import React, { useState } from 'react';
import { Trash2, Clock } from 'lucide-react';

const TaskItem = ({ task, onDeleteTask }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    await onDeleteTask(task._id);
  };

  return (
    <div className="task-item glass-panel">
      <div className="task-main">
        <div className="task-content">
          <div className="task-header-line">
            <span className="task-title">{task.title}</span>
          </div>

          {task.description && (
            <p className="task-desc">{task.description}</p>
          )}

          <div className="task-meta">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={12} />
              Created: {formatDate(task.createdAt)}
            </span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          className="btn-delete"
          onClick={handleDeleteClick}
          disabled={isDeleting}
          title="Delete Task"
        >
          <Trash2 size={15} />
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
