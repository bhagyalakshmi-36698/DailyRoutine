function StatCard({ title, value, subtitle, icon, className }) {
  return (
    <div className={`stat-card ${className || ""}`}>
      <div className="stat-top">
        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <h2>{value}</h2>

      <p className="stat-title">{title}</p>

      <span className="stat-subtitle">
        {subtitle}
      </span>
    </div>
  );
}

export default StatCard;