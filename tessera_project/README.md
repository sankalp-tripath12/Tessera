# 🌆 Tessera - Smart City Issue Reporting System

Tessera is a web-based application that allows users to report and track civic issues like potholes, garbage overflow, water leakage, etc. The goal is to make cities smarter, cleaner, and more responsive.

---

## 🚀 Features

- 📍 Report issues in your area
- 📊 Dashboard to view all reports
- 🔄 Track issue status (Pending, In Progress, Resolved)
- 🔐 Login UI for users
- 🎨 Clean and responsive UI
- ⚡ Fast navigation using React Router

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React

---

## 📂 Project Structure
tessera_project/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── home_page_components/
│ │ │ ├── Body_Home.jsx
│ │ │ ├── Feature_Section.jsx
│ │ │ └── Footer.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Report.jsx
│ │ ├── Issue.jsx
│ │ ├── Issuepage2.jsx
│ │ ├── Issuepage3.jsx
│ │ └── Login.jsx
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
├── package.json
└── README.md


---

## 🧠 Key Concepts Used

- Reusable Components (Navbar, Footer, Feature Cards)
- Dynamic Rendering using `.map()`
- Props for passing data
- React Router for navigation
- Inline and external CSS styling

---

## ▶️ How to Run the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

Then open:
http://localhost:5173/