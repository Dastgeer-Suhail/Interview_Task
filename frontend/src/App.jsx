import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from './api/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Submit new task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTask = await createTask({ title, description });
      setTasks([newTask, ...tasks]);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  // Delete task by ID
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="app-container">
      <header className="header-bar glass-panel">
        <h1 className="brand-title">Task Manager</h1>
      </header>

      <main className="main-layout">
        {/* Form to submit new tasks */}
        <div className="form-card glass-panel">
          <h2 className="form-title">Add New Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="title">Title *</label>
              <input
                id="title"
                type="text"
                className="form-input"
                placeholder="Enter task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-textarea"
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary">
              Add Task
            </button>
          </form>
        </div>

        {/* List of tasks */}
        <div className="task-list-section">
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>
            Tasks ({tasks.length})
          </h2>

          {tasks.length === 0 ? (
            <div className="empty-state glass-panel">
              <p>No tasks available. Add one above!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tasks.map((task) => (
                <div key={task._id} className="task-item glass-panel">
                  <div className="task-content">
                    <h3 className="task-title">{task.title}</h3>
                    {task.description && (
                      <p className="task-desc">{task.description}</p>
                    )}
                  </div>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
