import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Search, Inbox } from 'lucide-react';

const TaskList = ({ tasks = [], onDeleteTask, isLoading }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = task.title.toLowerCase().includes(q);
      const matchDesc = task.description ? task.description.toLowerCase().includes(q) : false;
      return matchTitle || matchDesc;
    }
    return true;
  });

  return (
    <div className="task-list-section">
      <div className="filter-bar glass-panel" style={{ justifyContent: 'flex-between' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
          Task Overview ({tasks.length})
        </h3>

        <div className="search-box">
          <Search size={16} color="var(--text-muted)" />
          <input
            type="text"
            className="search-input"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="empty-state glass-panel">
          <div className="spinner" style={{ margin: '0 auto 1rem', width: '32px', height: '32px', borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}></div>
          <p>Loading tasks from MongoDB...</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="empty-state glass-panel">
          <Inbox className="empty-icon" />
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            {searchQuery ? 'No matching tasks found' : 'No tasks yet'}
          </h3>
          <p style={{ fontSize: '0.85rem' }}>
            {searchQuery
              ? 'Try refining your search keyword'
              : 'Add your first task using the form on the left!'}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
