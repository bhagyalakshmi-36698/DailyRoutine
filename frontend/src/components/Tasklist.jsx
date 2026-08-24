import { Check, Clock, MoreVertical } from "lucide-react";

function TaskList({ tasks, toggleTask }) {
  return (
    <div className="task-card">
      <div className="section-header">
        <div>
          <h2>Today's Tasks</h2>
          <p>Stay focused and complete your goals.</p>
        </div>

        <button className="view-all">
          View All
        </button>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <div
            className={`task-item ${
              task.completed ? "completed" : ""
            }`}
            key={task.id}
          >
            <button
              className="task-checkbox"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed && <Check size={16} />}
            </button>

            <div className="task-content">
              <h3>{task.title}</h3>

              <div className="task-time">
                <Clock size={14} />
                {task.time}
              </div>
            </div>

            <span className={`priority ${task.priority}`}>
              {task.priority}
            </span>

            <button className="more-button">
              <MoreVertical size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;