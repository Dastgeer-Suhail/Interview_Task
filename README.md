# Task Manager (MERN Stack)

A simple Task Manager application built with **MongoDB**, **Express**, **React**, and **Node.js**.

## Features
- **View Tasks**: Displays a list of tasks fetched from the backend.
- **Add Task**: Submit new tasks using the task form.
- **Delete Task**: Click the "Delete" button next to any task to remove it.

---

## REST API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task (`{ "title": "Required", "description": "Optional" }`)
- `DELETE /api/tasks/:id` - Delete a task by ID

---

## How to Run Locally

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Application
```bash
npm run dev
```

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
