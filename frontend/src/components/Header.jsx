import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Good Evening! 👋</h1>
        <p>Let's make today productive.</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search tasks..."
          />
        </div>

        <button className="notification-button">
          <Bell size={21} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="avatar">B</div>

          <div>
            <strong>Bhagyalakshmi</strong>
            <span>Student</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;