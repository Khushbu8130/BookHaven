# 📚 BookHaven – Engineering Book Resource Platform

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Server-Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css)

A full-stack web application that allows users to explore, read, and download engineering books categorized by different branches. Designed to provide students with easy access to academic resources in one place.

---

## 🔗 Live Demo  
👉 https://bookhavenn.onrender.com/

💡 Tip: Browse books branch-wise (CSE, ECE, Mechanical, etc.) to quickly find relevant study materials.

---

## 📌 Overview

BookHaven is a centralized platform for engineering students to discover and access academic books. The application organizes books based on branches and subjects, making it easier for users to find relevant resources without searching multiple sources.

This project demonstrates full-stack development using the MERN stack, including database integration, API handling, and responsive frontend design.

---

## ✨ Key Features

- 📚 Browse books categorized by engineering branches  
- 🔍 Easy navigation and structured content  
- 📥 Download or read books directly  
- 🧩 Dynamic data rendering from backend/database  
- ⚡ Fast and responsive UI  
- 🎨 Clean design using Tailwind CSS  
- 🌐 Deployed and accessible online  

---

## 🏗 System Architecture

### 🔹 Frontend (Client)
- React.js  
- Tailwind CSS  
- Axios  
- Component-based architecture  
- Responsive design  

### 🔹 Backend (Server)
- Node.js  
- Express.js  
- REST API routing  
- JSON / Database-based book management  

### 🔹 Database
- MongoDB (or JSON-based storage depending on your setup)

---

## 📊 Workflow

1. User visits the website  
2. Selects a branch (e.g., CSE, ECE, Mechanical)  
3. Frontend requests data from backend  
4. Backend fetches book data from database/JSON  
5. Books are displayed as cards with access/download options  

---

## 📂 Project Structure
bookhaven/
├── client/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ └── App.jsx
├── server/
│ ├── routes/
│ ├── controllers/
│ └── models/
└── README.md


## 📈 Impact

- Built a centralized platform for accessing engineering study materials  
- Improved user experience by organizing resources branch-wise  
- Gained hands-on experience with MERN stack and dynamic data handling  

---

## 🛠 Installation & Setup

```bash
git clone https://github.com/your-username/bookhaven.git
cd bookhaven

# Frontend
cd client
npm install
npm start

# Backend
cd ../server
npm install
npm start
