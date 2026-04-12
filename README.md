# Seedhe Growth — Full-Stack SPA

> *Seedhi Baat. Seedha Result.*

A React 18 + Vite SPA with an Express backend that captures leads directly into a Google Sheet.

---

## Project Structure

```
SeedheGrowth/
├── client/                 # React 18 + Vite frontend
│   ├── index.html
│   ├── vite.config.js      # /api proxy → localhost:5000
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           ├── CustomCursor.jsx
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Marquee.jsx
│           ├── Services.jsx
│           ├── TaglineBreak.jsx
│           ├── WhyUs.jsx
│           ├── Process.jsx
│           ├── CTA.jsx
│           ├── Footer.jsx
│           ├── LeadModal.jsx
│           └── SuccessPopup.jsx
├── server/                 # Node.js + Express backend
│   ├── package.json
│   ├── .env.example
│   └── server.js
├── .gitignore
└── README.md
```

---

## Quick Start

### 1. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 2. Configure Environment Variables

```bash
cd server
copy .env.example .env   # Windows
# cp .env.example .env   # Mac/Linux
```

Then open `server/.env` and fill in the values (see Google Sheets setup below).

### 3. Run in Development

Open **two terminals**:

```bash
# Terminal 1 — Frontend (http://localhost:5173)
cd client
npm run dev

# Terminal 2 — Backend (http://localhost:5000)
cd server
npm run dev
```

The Vite dev server proxies `/api/*` to the Express server, so no CORS issues.

---

## Google Sheets API Setup

### Step 1 — Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com/)
2. Click **Select a project → New Project**
3. Name it `seedhe-growth` and click **Create**

### Step 2 — Enable the Sheets API

1. In the sidebar go to **APIs & Services → Library**
2. Search for **Google Sheets API** and click **Enable**

### Step 3 — Create a Service Account

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → Service Account**
3. Name it `seedhe-growth-sheets`, click **Create and Continue**
4. Skip role assignment and click **Done**
5. Click the service account email you just created
6. Go to the **Keys** tab → **Add Key → Create new key → JSON**
7. Download the JSON file — **keep it safe, never commit it**

### Step 4 — Extract Credentials into `.env`

Open the downloaded JSON and copy these two values into `server/.env`:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=   # "client_email" field
GOOGLE_PRIVATE_KEY=             # "private_key" field (including -----BEGIN/END-----)
```

> **Windows tip:** Paste the private key including all `\n` characters exactly as they appear in the JSON file.

### Step 5 — Create and Share the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **Seedhe Growth Leads**
3. In **Row 1**, add these headers (optional but recommended):
   ```
   A1: Name   B1: Email   C1: Contact   D1: Query   E1: Timestamp
   ```
4. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```
5. Paste it into `server/.env` as `GOOGLE_SHEET_ID`
6. Click **Share** (top right) → paste your `GOOGLE_SERVICE_ACCOUNT_EMAIL` → give **Editor** access → click **Send**

### Step 6 — Verify

Start both servers and submit the lead form. A new row should appear in your Google Sheet within seconds.

---

## Production Build

```bash
cd client
npm run build        # outputs to client/dist/
```

Serve `client/dist/` with any static host (Vercel, Netlify, etc.) and deploy `server/` to a Node.js host (Railway, Render, Fly.io, etc.).

> Remember to update `CORS_ORIGIN` in `server/.env` to match your production frontend URL.

---

## Lead Form Fields

| Column | Field |
|--------|-------|
| A | Full Name |
| B | Email Address |
| C | Contact Number |
| D | Service Summary / Query |
| E | Timestamp (IST) |

---

*Built with React 18, Vite, Express, and the Google Sheets API.*
