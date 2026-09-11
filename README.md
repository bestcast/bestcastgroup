# BestCastGroup Full-Stack Application

A modern full-stack web application scaffold built with React (Vite), Node.js (Express.js), and MongoDB (Mongoose).

## 📁 Directory Structure

```text
bestcastgroup/
├── backend/                  # Node.js + Express API Backend
│   ├── config/
│   │   └── db.js            # MongoDB Mongoose connection
│   ├── models/
│   │   └── Item.js          # Mongoose Data Schema & Model
│   ├── routes/
│   │   └── itemRoutes.js    # API endpoints (/api/items)
│   ├── .env                 # Backend environment variables
│   ├── .env.example         # Template for environment variables
│   ├── server.js            # Express server entry point & health route
│   └── package.json         # Backend dependencies & scripts
│
├── frontend/                 # React Frontend (built with Vite)
│   ├── src/
│   │   ├── App.jsx          # Dashboard Component with live API status
│   │   ├── index.css        # Modern glassmorphism CSS design system
│   │   └── main.jsx         # React DOM mounting
│   ├── index.html           # HTML template with Google Fonts
│   ├── .env                 # Frontend environment variables
│   └── package.json         # Frontend dependencies & scripts
│
├── .gitignore
├── package.json              # Workspace root scripts (concurrent execution)
└── README.md
```

---

## ⚡ Quick Start

### 1. Environment Setup

Check `backend/.env` configuration:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bestcastgroup
```
*(If MongoDB service is not running locally, the server uses a graceful fallback mode so your API and React app remain completely operational during setup).*

Check `frontend/.env` configuration:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### 2. Running Development Servers

You can start both frontend and backend concurrently from the root folder:

```bash
# Start both Backend (Port 5000) and Frontend (Port 5173) simultaneously
npm run dev
```

Or start them individually:

```bash
# Start backend server only
npm run dev:backend

# Start frontend server only
npm run dev:frontend
```

---

## 🔌 API Routes Summary

- `GET /api/health` - Health check & MongoDB connection status
- `GET /api/items` - Fetch list of items
- `POST /api/items` - Create a new item (`{ title, description, status }`)
- `DELETE /api/items/:id` - Delete an item by ID
