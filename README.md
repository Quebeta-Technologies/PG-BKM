# Sri Krishna PG — Project

Split into two folders for clean separation:

```
sri-krishna-pg/
├── frontend/    ← React + Vite (the website UI)
└── backend/     ← Express API (ready to extend if needed)
```

---

## 🚀 Running the Project

### Start the Frontend (Website)

```bash
cd frontend
npm install
npm run dev
```

Opens at → **http://localhost:5173**

---

### Start the Backend (API) — Optional

```bash
cd backend
npm install
npm run dev
```

Runs at → **http://localhost:4000**

---

## 📁 Frontend Structure

```
frontend/
├── index.html              ← HTML shell + SEO meta tags
├── vite.config.js          ← Vite config
├── package.json
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Root component
    ├── data.js             ← ✏️  EDIT THIS to update all content
    ├── styles.css          ← Global styles
    ├── components/         ← Page sections
    └── ui/                 ← Reusable UI primitives
```

## 📁 Backend Structure

```
backend/
├── server.js               ← Express entry point
└── package.json
```

---

## ✏️ How to Edit Content

All text, photos, contact details, pricing etc. live in one file:

**`frontend/src/data.js`**

---

## 📞 Contact / Book a Visit

All "Book a Visit" buttons on the site directly **call the phone number** defined in `frontend/src/data.js` under `CONTACT.phone`. No form or email involved.
