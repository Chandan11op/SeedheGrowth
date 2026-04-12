# Seedhe Growth

> **Seedhi Baat. Seedha Result.**

🌐 **Live Website:** [Coming Soon](#) <!-- Replace # with your deployed URL -->

---

## What is this?

**Seedhe Growth** is a full-stack landing page for India's no-nonsense marketing agency. It's designed to make an instant impression, capture leads, and store them directly in a Google Sheet — no CRM, no third-party tools, just seedha results.

The site is built as a Single Page Application (SPA) with a custom dark aesthetic, animated cursor, scroll-reveal effects, and a lead capture modal that connects straight to your Google Sheets.

---

## What can it do?

- 🎯 **Showcases 6 core services** — Online Campaigns, Offline Campaigns, Business Agents, Brand Strategy, Websites, and Influencer Marketing
- 📋 **Captures leads via a modal form** — triggered by "Book a Free Call", "Start Growing", and "Let's Talk" buttons
- ✅ **Validates inputs** — required fields + email format checked before submission
- 📊 **Saves leads to Google Sheets** — Name, Email, Contact, Query, and IST Timestamp appended as a new row on every submission
- 🎉 **Shows a success message** — "Your response is submitted; our team will contact you within 24 hours."
- 🖱️ **Custom animated cursor** with a gold dot and lagging ring
- ✨ **Scroll-reveal animations** across all sections

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Vanilla CSS (Cormorant Garamond, Syne, Space Grotesk) |
| Backend | Node.js + Express |
| Database | Google Sheets (via Google Sheets API v4) |
| Auth | Google Service Account |

---

## Getting Started

### 1. Install dependencies

```bash
# Frontend
cd client && npm install

# Backend
cd server && npm install
```

### 2. Set up environment variables

```bash
cd server
copy .env.example .env
```

Open `server/.env` and fill in:

```env
PORT=5000
CORS_ORIGIN=http://localhost:5173
GOOGLE_SHEET_ID=your_sheet_id_from_url
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### 3. Run

```bash
# Terminal 1 — Frontend
cd client && npm run dev       # http://localhost:5173

# Terminal 2 — Backend
cd server && npm run dev       # http://localhost:5000
```

---

## Google Sheets Setup (5 steps)

1. Go to [console.cloud.google.com](https://console.cloud.google.com) → create a project → enable **Google Sheets API**
2. Go to **Credentials → Create Credentials → Service Account** → download the JSON key
3. Copy `client_email` and `private_key` from the JSON into `server/.env`
4. Create a Google Sheet → copy the ID from the URL → paste as `GOOGLE_SHEET_ID`
5. Share the sheet with your `client_email` and give it **Editor** access

---

## Lead Data Format

Every form submission adds one row to your Google Sheet:

| Name | Email | Contact | Query | Timestamp (IST) |
|---|---|---|---|---|
| Rahul Sharma | rahul@brand.com | +91 98765 43210 | I want a website | 12/04/2026, 10:30:00 pm |

---

*Built with ❤️ for Seedhe Growth — no jugaad, just results.*
