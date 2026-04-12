require('dotenv').config()

const express    = require('express')
const cors       = require('cors')
const { google } = require('googleapis')

const app  = express()
const PORT = process.env.PORT || 5000

/* ── Startup credential check ───────────────────────────── */
console.log('\n── ENV CHECK ──────────────────────────────────────')
console.log('GOOGLE_SHEET_ID            :', process.env.GOOGLE_SHEET_ID         ? '✅ set' : '❌ MISSING')
console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? '✅ set' : '❌ MISSING')
console.log('GOOGLE_PRIVATE_KEY         :', process.env.GOOGLE_PRIVATE_KEY       ? '✅ set' : '❌ MISSING')
console.log('───────────────────────────────────────────────────\n')

/* ── Middleware ─────────────────────────────────────────── */
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

/* ── Google Sheets auth ─────────────────────────────────── */
function getAuthClient() {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n') // handle escaped newlines from .env

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key:  privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

/* ── POST /api/submit-lead ──────────────────────────────── */
app.post('/api/submit-lead', async (req, res) => {
  const { name, email, contact, query } = req.body

  if (!name || !email || !contact || !query) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const SHEET_ID   = process.env.GOOGLE_SHEET_ID
  const SHEET_NAME = 'Sheet1'
  const RANGE      = `${SHEET_NAME}!A:E`

  try {
    const auth   = getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range:         RANGE,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          name,
          email,
          contact,
          query,
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        ]],
      },
    })

    console.log(`✅  Lead captured: ${name} <${email}>`)
    return res.status(200).json({ success: true })

  } catch (err) {
    // Full error detail in terminal — helps diagnose auth / sheet issues
    console.error('\n❌  Google Sheets error ─────────────────────────')
    console.error('Message :', err.message)
    console.error('Code    :', err.code)
    if (err.errors) console.error('Details :', JSON.stringify(err.errors, null, 2))
    console.error('─────────────────────────────────────────────────\n')
    return res.status(500).json({ error: 'Failed to save lead. Please try again.' })
  }
})

/* ── Health check ───────────────────────────────────────── */
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

/* ── Start ──────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`🚀  Seedhe Growth server running on http://localhost:${PORT}`)
})
