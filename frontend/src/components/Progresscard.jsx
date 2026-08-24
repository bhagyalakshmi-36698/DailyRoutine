function ProgressCard({ completed, total }) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-card">
      <div className="section-header">
        <div>
          <h2>Daily Progress</h2>
          <p>Your productivity today</p>
        </div>

        <strong>{percentage}%</strong>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="progress-info">
        <span>
          {completed} of {total} tasks completed
        </span>

        <span>
          {percentage >= 80
            ? "Excellent! 🔥"
            : "Keep going! 💪"}
        </span>
      </div>
    </div>
  );
}

export default ProgressCard;