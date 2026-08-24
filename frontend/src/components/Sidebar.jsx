import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Tasks",
      icon: CheckSquare,
    },
    {
      name: "Calendar",
      icon: CalendarDays,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">✓</div>
        <div>
          <h2>DailyRoutine</h2>
          <span>Productivity</span>
        </div>
      </div>

      <nav className="navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="motivation">
          <p>💡 Stay consistent!</p>
          <span>Small progress every day.</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;