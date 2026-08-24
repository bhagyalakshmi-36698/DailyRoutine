import { useState } from "react";
import {
  LayoutDashboard,
  Target,
  CalendarDays,
  BarChart3,
  Settings,
  Search,
  Bell,
  Flame,
  CheckCircle2,
  Trophy,
  TrendingUp,
  Plus,
  Circle,
} from "lucide-react";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Exercise",
      icon: "🏃",
      color: "green",
      days: [true, true, true, false, true, true, true],
    },
    {
      id: 2,
      name: "Reading",
      icon: "📚",
      color: "purple",
      days: [true, true, false, true, true, false, true],
    },
    {
      id: 3,
      name: "Study",
      icon: "💻",
      color: "blue",
      days: [true, true, true, true, false, true, true],
    },
    {
      id: 4,
      name: "Meditation",
      icon: "🧘",
      color: "orange",
      days: [false, true, true, true, true, false, true],
    },
    {
      id: 5,
      name: "Water",
      icon: "💧",
      color: "cyan",
      days: [true, true, true, true, true, true, false],
    },
  ]);

  const toggleHabit = (habitId, dayIndex) => {
    setHabits((currentHabits) =>
      currentHabits.map((habit) => {
        if (habit.id !== habitId) {
          return habit;
        }

        const updatedDays = [...habit.days];

        updatedDays[dayIndex] = !updatedDays[dayIndex];

        return {
          ...habit,
          days: updatedDays,
        };
      })
    );
  };

  const totalCompleted = habits.reduce(
    (total, habit) =>
      total +
      habit.days.filter(Boolean).length,
    0
  );

  const totalPossible = habits.length * 7;

  const completionPercentage = Math.round(
    (totalCompleted / totalPossible) * 100
  );

  return (
    <div className="app-container">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            ✓
          </div>

          <div>
            <h2>DailyRoutine</h2>
            <span>Habit Tracker</span>
          </div>
        </div>

        <nav className="sidebar-menu">

          <button
            className={
              activePage === "Dashboard"
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() =>
              setActivePage("Dashboard")
            }
          >
            <LayoutDashboard size={19} />
            Dashboard
          </button>

          <button
            className={
              activePage === "Habits"
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() =>
              setActivePage("Habits")
            }
          >
            <Target size={19} />
            Habits
          </button>

          <button
            className={
              activePage === "Calendar"
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() =>
              setActivePage("Calendar")
            }
          >
            <CalendarDays size={19} />
            Calendar
          </button>

          <button
            className={
              activePage === "Analytics"
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() =>
              setActivePage("Analytics")
            }
          >
            <BarChart3 size={19} />
            Analytics
          </button>

          <button
            className={
              activePage === "Settings"
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() =>
              setActivePage("Settings")
            }
          >
            <Settings size={19} />
            Settings
          </button>

        </nav>

        <div className="sidebar-bottom">

          <div className="mini-streak">
            <Flame size={20} />

            <div>
              <strong>7 Day Streak</strong>
              <span>Keep it going!</span>
            </div>
          </div>

          <div className="user-profile">

            <div className="user-avatar">
              B
            </div>

            <div>
              <strong>Bhagyalakshmi</strong>
              <span>Student</span>
            </div>

          </div>

        </div>

      </aside>


      {/* MAIN */}

      <main className="main">

        {/* HEADER */}

        <header className="top-header">

          <div className="mobile-brand">
            DailyRoutine
          </div>

          <div className="search">

            <Search size={17} />

            <input
              placeholder="Search habits..."
            />

          </div>

          <div className="header-actions">

            <button className="icon-button">
              <Bell size={19} />
              <span className="notification"></span>
            </button>

            <div className="date">
              Monday, August 24
            </div>

          </div>

        </header>


        {activePage === "Dashboard" && (

          <>

            {/* HERO */}

            <section className="hero">

              <div>

                <div className="hero-label">
                  <span></span>
                  CONSISTENCY WINS
                </div>

                <h1>
                  Build better habits,
                  <br />
                  <span>one day at a time.</span>
                </h1>

                <p>
                  Track your habits, build your streak,
                  and become more consistent every day.
                </p>

              </div>

              <div className="hero-icon">
                📈
              </div>

            </section>


            {/* STATS */}

            <section className="stats">

              <div className="stat">

                <div className="stat-icon green">
                  <Flame size={21} />
                </div>

                <div>
                  <span>Current Streak</span>
                  <strong>7 Days</strong>
                </div>

              </div>


              <div className="stat">

                <div className="stat-icon purple">
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <span>Completion</span>
                  <strong>
                    {completionPercentage}%
                  </strong>
                </div>

              </div>


              <div className="stat">

                <div className="stat-icon orange">
                  <Trophy size={21} />
                </div>

                <div>
                  <span>Best Streak</span>
                  <strong>12 Days</strong>
                </div>

              </div>


              <div className="stat">

                <div className="stat-icon blue">
                  <TrendingUp size={21} />
                </div>

                <div>
                  <span>This Week</span>
                  <strong>
                    {totalCompleted} Tasks
                  </strong>
                </div>

              </div>

            </section>


            {/* CHARTS */}

            <section className="analytics-grid">

              <div className="panel">

                <div className="panel-header">

                  <div>
                    <h2>Weekly Activity</h2>
                    <span>Your consistency this week</span>
                  </div>

                  <button className="week-button">
                    This Week
                  </button>

                </div>

                <div className="chart">

                  {[
                    45,
                    70,
                    55,
                    85,
                    68,
                    92,
                    76,
                  ].map((height, index) => (

                    <div
                      className="chart-column"
                      key={index}
                    >

                      <div className="chart-bar-wrapper">

                        <div
                          className="chart-bar"
                          style={{
                            height: `${height}%`,
                          }}
                        ></div>

                      </div>

                      <span>
                        {
                          [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ][index]
                        }
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* COMPLETION */}

              <div className="panel">

                <div className="panel-header">

                  <div>
                    <h2>Habit Progress</h2>
                    <span>Completion by habit</span>
                  </div>

                  <BarChart3 size={19} />

                </div>

                <div className="habit-progress">

                  {habits.slice(0, 4).map(
                    (habit) => {

                      const percentage =
                        Math.round(
                          (habit.days.filter(
                            Boolean
                          ).length /
                            7) *
                            100
                        );

                      return (

                        <div
                          className="progress-item"
                          key={habit.id}
                        >

                          <div className="progress-title">

                            <span>
                              {habit.icon}{" "}
                              {habit.name}
                            </span>

                            <strong>
                              {percentage}%
                            </strong>

                          </div>

                          <div className="progress-track">

                            <div
                              className={`progress-value ${habit.color}`}
                              style={{
                                width: `${percentage}%`,
                              }}
                            ></div>

                          </div>

                        </div>

                      );
                    }
                  )}

                </div>

              </div>

            </section>


            {/* HABIT TRACKER */}

            <section className="tracker-panel">

              <div className="tracker-header">

                <div>

                  <h2>Habit Tracker</h2>

                  <span>
                    August 18 – August 24, 2026
                  </span>

                </div>

                <button className="add-habit">
                  <Plus size={17} />
                  Add Habit
                </button>

              </div>


              <div className="tracker-table">

                <div className="tracker-row tracker-head">

                  <div className="habit-name">
                    HABIT
                  </div>

                  {[
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                  ].map((day, index) => (

                    <div
                      className="day"
                      key={index}
                    >
                      {day}
                    </div>

                  ))}

                  <div className="streak-column">
                    STREAK
                  </div>

                </div>


                {habits.map((habit) => (

                  <div
                    className="tracker-row"
                    key={habit.id}
                  >

                    <div className="habit-name">

                      <span className="habit-emoji">
                        {habit.icon}
                      </span>

                      <span>
                        {habit.name}
                      </span>

                    </div>


                    {habit.days.map(
                      (completed, index) => (

                        <button
                          key={index}
                          className={
                            completed
                              ? `habit-check checked ${habit.color}`
                              : "habit-check"
                          }
                          onClick={() =>
                            toggleHabit(
                              habit.id,
                              index
                            )
                          }
                        >

                          {completed ? (
                            <CheckCircle2
                              size={18}
                            />
                          ) : (
                            <Circle
                              size={17}
                            />
                          )}

                        </button>

                      )
                    )}


                    <div className="streak-value">

                      <Flame size={15} />

                      {
                        habit.days.filter(
                          Boolean
                        ).length
                      }

                    </div>

                  </div>

                ))}

              </div>

            </section>


            {/* BOTTOM */}

            <section className="bottom-grid">

              <div className="quote-card">

                <div className="quote-icon">
                  "
                </div>

                <div>

                  <h3>
                    Consistency is the key.
                  </h3>

                  <p>
                    You don't need to be perfect.
                    You just need to keep showing up.
                  </p>

                </div>

              </div>


              <div className="goal-card">

                <div className="goal-icon">
                  🎯
                </div>

                <div>

                  <span>Weekly Goal</span>

                  <strong>
                    80% Complete
                  </strong>

                  <div className="goal-track">

                    <div
                      style={{
                        width: `${completionPercentage}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>

            </section>

          </>

        )}


        {activePage !== "Dashboard" && (

          <div className="coming-soon">

            <div>
              {activePage === "Habits" && "🎯"}

              {activePage === "Calendar" && "📅"}

              {activePage === "Analytics" && "📊"}

              {activePage === "Settings" && "⚙️"}
            </div>

            <h2>
              {activePage}
            </h2>

            <p>
              This section will be connected
              to the backend next.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}

export default App;