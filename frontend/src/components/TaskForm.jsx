import React, { useState } from 'react';
import { PlusCircle, Loader2 } from 'lucide-react';

const TaskForm = ({ onAddTask, isSubmitting }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    setError('');
    const success = await onAddTask({
      title: title.trim(),
      description: description.trim()
    });

    if (success) {
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="form-card glass-panel">
      <h2 className="form-title">
        <PlusCircle size={20} color="var(--accent-primary)" />
        Create New Task
      </h2>

      {error && (
        <div style={{ color: 'var(--accent-rose)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 600 }}>
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="task-title">
            Task Title <span style={{ color: 'var(--accent-rose)' }}>*</span>
          </label>
          <input
            id="task-title"
            type="text"
            className="form-input"
            placeholder="e.g. Design API endpoints"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError('');
            }}
            maxLength={100}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="task-desc">
            Description <span style={{ color: 'var(--text-dim)' }}>(Optional)</span>
          </label>
          <textarea
            id="task-desc"
            className="form-textarea"
            placeholder="Add details or notes..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="spinner" />
              Adding Task...
            </>
          ) : (
            <>
              <PlusCircle size={18} />
              Add Task
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
