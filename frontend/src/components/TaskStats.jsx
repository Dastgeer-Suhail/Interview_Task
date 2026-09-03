import React from 'react';
import { ListTodo, CheckCircle2, Layers } from 'lucide-react';

const TaskStats = ({ tasks = [] }) => {
  const total = tasks.length;

  return (
    <div className="stats-grid">
      <div className="stat-card glass-panel">
        <div className="stat-icon-wrapper stat-icon-total">
          <ListTodo size={24} />
        </div>
        <div>
          <div className="stat-value">{total}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
      </div>

      <div className="stat-card glass-panel">
        <div className="stat-icon-wrapper stat-icon-completed">
          <Layers size={24} />
        </div>
        <div>
          <div className="stat-value">{total > 0 ? 'Active' : 'Empty'}</div>
          <div className="stat-label">Workspace Status</div>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
