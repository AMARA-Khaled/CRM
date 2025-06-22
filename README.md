# 🧾 CRM Front-End (Next.js)

This project is a front-end implementation of a mini **Customer Relationship Management (CRM)** system using **Next.js**. It allows users to view, manage, and add clients through a clean, modern, and fully responsive interface. All data is simulated using static JSON files and API routes.

---

## 🚀 Features

### ✅ 1. Mock Login Page
- Simple, static login screen (no backend validation).
- Clean, professional design.
- Fully responsive on all screen sizes.

### ✅ 2. Dashboard Layout
- Displayed after the mock login.
- Navigation bar with links:
  - **Dashboard**
  - **Clients**
  - **Add Client**
- Structured layout shared across all pages.
- Mobile-friendly and responsive layout.

### ✅ 3. Clients List Page
- Displays a table of mocked client data stored in a local JSON file.
- Columns:
  - **Name**
  - **Email**
  - **Phone**
  - **Created At**
- Functionalities:
  - Search bar (client name filtering, case-insensitive).
  - Sortable by name.
- Responsive and easy to use on all devices.

### ✅ 4. Client Detail Page
- Opens when clicking on a row in the client table.
- Shows full client information.
- Includes a mocked activity history list.
- Designed for clarity and mobile compatibility.

### ✅ 5. Add Client Page
- Form created using `React Hook Form`.
- Required fields:
  - **First Name**
  - **Last Name**
  - **Email** (validated)
  - **Phone** (format validated)
- Data is sent to a local API route using **Next.js API Routes**, then appended to the mock JSON file.
- Displays a success message upon form submission.
- Fully responsive and user-friendly.

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **React Hook Form**
- **Tailwind CSS**
- **Lucide Icons**
- **Faker.js** (for mock data generation)
- **Next.js API Routes**
- **File System (`fs`)** for mock data persistence (in development only)

---

## 📁 Folder Structure
```bash
app/
│
├── login/ → Mock login page
├── dashboard/ → Main layout after login
├── client-list/ → Clients list and detail view
├── add-client/ → Client creation form
├── api/
│ └── clients/ → API route to add clients to JSON
├── data/
│ └── clients.json → Mock client data
```

---

## ⚙️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/AMARA-Khaled/CRM
cd CRM
npm install
npm run dev
```
Visit http://localhost:3000 in your browser to view the app.

## 🔗 Live Demo
You can check the deployed version here:
👉 https://crm-arimayi.vercel.app/

## 📌 Notes
* This is a front-end only application. No real authentication or database connection is used.

* Adding clients writes to a local JSON file via the file system—only available in development mode.

* All pages are fully responsive and work smoothly on desktops, tablets, and phones.

## 📄 License
This project is open-source and free to use.
