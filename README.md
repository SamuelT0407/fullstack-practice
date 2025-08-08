# 🧩 Fullstack Auth App (React + Node.js + MongoDB)

A simple fullstack user authentication app built with React (Vite) on the frontend, Node.js + Express on the backend, and MongoDB for data storage.

---

## 📁 Project Structure

```
your-project/
├── backend/        # Node.js + Express + MongoDB API
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/       # React + Vite app
│   ├── src/
│   ├── public/
│   └── .env
├── .gitignore
└── README.md
```

---

## 🧪 Features

- ✅ User registration
- ✅ User login
- ✅ Save user info to `localStorage`
- ✅ Redirect after login/registration
- ✅ Logout and clear user info

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 2. Configure frontend environment

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

### 3. Start the servers

In two separate terminals:

```bash
# Start backend server
cd backend
node server.js
```

```bash
# Start frontend Vite dev server
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`, and the backend on `http://localhost:5000`.

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, TypeScript, CSS Modules
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)

---

## 📦 Notes

- Make sure MongoDB is running (`localhost:27017` by default).
- You can use [MongoDB Compass](https://www.mongodb.com/products/compass) to view and manage data.
- You may use Docker for easier MongoDB setup (optional).

---

## 📜 License

This project is for learning purposes. Feel free to modify and use it in your own way.
