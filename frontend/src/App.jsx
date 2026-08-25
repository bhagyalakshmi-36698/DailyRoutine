import { useMemo, useState } from "react";

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
  Droplets,
  BookOpen,
  Dumbbell,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

import "./App.css";


const initialHabits = [
  {
    id: 1,
    name: "Wake Up Early",
    icon: Sun,
    time: "7:00 AM",
    category: "Morning",
    days: [true, true, true, false, true, true, true],
  },

  {
    id: 2,
    name: "Meditate",
    icon: Moon,
    time: "10 min",
    category: "Mind",
    days: [true, true, false, true, true, false, true],
  },

  {
    id: 3,
    name: "Exercise",
    icon: Dumbbell,
    time: "45 min",
    category: "Health",
    days: [true, true, true, true, false, true, true],
  },

  {
    id: 4,
    name: "Drink Water",
    icon: Droplets,
    time: "2.5 L",
    category: "Health",
    days: [true, true, true, true, true, true, false],
  },

  {
    id: 5,
    name: "Read Book",
    icon: BookOpen,
    time: "30 min",
    category: "Mind",
    days: [true, false, true, true, true, false, true],
  },
];


const weekDays = [
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
  "S",
];


function App() {

  const [activePage, setActivePage] =
    useState("Dashboard");

  const [habits, setHabits] =
    useState(initialHabits);

  const [mobileMenu, setMobileMenu] =
    useState(false);


  /* =========================
     TOGGLE HABIT
  ========================= */

  const toggleHabit = (
    habitId,
    dayIndex
  ) => {

    setHabits((current) =>

      current.map((habit) => {

        if (habit.id !== habitId) {
          return habit;
        }

        const updatedDays =
          [...habit.days];

        updatedDays[dayIndex] =
          !updatedDays[dayIndex];

        return {
          ...habit,
          days: updatedDays,
        };

      })

    );
  };


  /* =========================
     CALCULATIONS
  ========================= */

  const totalCompleted =
    habits.reduce(
      (total, habit) =>
        total +
        habit.days.filter(Boolean).length,
      0
    );


  const totalPossible =
    habits.length * 7;


  const completionPercentage =
    totalPossible === 0
      ? 0
      : Math.round(
          (totalCompleted /
            totalPossible) *
            100
        );


  const todayCompleted =
    habits.filter(
      (habit) =>
        habit.days[6]
    ).length;


  const currentStreak = 12;

  const bestStreak = 21;


  /* =========================
     WEEKLY ACTIVITY
  ========================= */

  const weeklyActivity =
    useMemo(() => {

      return weekDays.map(
        (_, index) =>

          habits.reduce(
            (total, habit) =>
              total +
              (habit.days[index]
                ? 1
                : 0),
            0
          )
      );

    }, [habits]);


  /* =========================
     NAVIGATION
  ========================= */

  const navigation = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Habits",
      icon: Target,
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

    <div className="app-container">


      {/* MOBILE OVERLAY */}

      {mobileMenu && (

        <div
          className="mobile-overlay"
          onClick={() =>
            setMobileMenu(false)
          }
        />

      )}


      {/* =========================
          SIDEBAR
      ========================= */}

      <aside
        className={`sidebar ${
          mobileMenu
            ? "sidebar-open"
            : ""
        }`}
      >

        <div className="brand">

          <div className="brand-logo">
            ✓
          </div>

          <div className="brand-text">

            <h2>
              DailyRoutine
            </h2>

            <span>
              HABIT TRACKER
            </span>

          </div>


          <button
            className="close-menu"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            <X size={19} />
          </button>

        </div>


        <nav className="sidebar-navigation">

          {navigation.map(
            (item) => {

              const Icon =
                item.icon;

              return (

                <button
                  key={item.name}
                  className={`nav-item ${
                    activePage ===
                    item.name
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {

                    setActivePage(
                      item.name
                    );

                    setMobileMenu(
                      false
                    );

                  }}
                >

                  <Icon size={18} />

                  <span>
                    {item.name}
                  </span>

                </button>

              );

            }
          )}

        </nav>


        <div className="sidebar-bottom">

          <div className="streak-box">

            <Flame size={17} />

            <div>

              <strong>
                {currentStreak} DAY STREAK
              </strong>

              <span>
                Keep going!
              </span>

            </div>

          </div>

        </div>

      </aside>


      {/* =========================
          MAIN
      ========================= */}

      <main className="main">


        {/* =========================
            HEADER
        ========================= */}

        <header className="top-header">


          <button
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenu(true)
            }
          >

            <Menu size={20} />

          </button>


          <div className="mobile-title">
            DailyRoutine
          </div>


          <div className="search-box">

            <Search size={16} />

            <input
              type="text"
              placeholder="Search habits..."
            />

          </div>


          <div className="header-right">


            <button className="notification-button">

              <Bell size={17} />

              <span className="notification-dot" />

            </button>


            <div className="date-text">

              Monday, August 24

            </div>


            <div className="profile">

              <div className="avatar">
                B
              </div>

              <div className="profile-text">

                <strong>
                  Bhagyalakshmi
                </strong>

                <span>
                  Student
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* =========================
            DASHBOARD
        ========================= */}

        {activePage ===
          "Dashboard" && (

          <>

            {/* HERO */}

            <section className="hero">

              <div className="hero-content">

                <div className="hero-label">

                  <span />

                  CONSISTENCY WINS

                </div>


                <h1>

                  Build better habits,

                  <br />

                  <span>
                    one day at a time.
                  </span>

                </h1>


                <p>

                  Track your habits,
                  build your streak,
                  and become more
                  consistent every day.

                </p>

              </div>


              <div className="hero-check">

                ✓

              </div>

            </section>


            {/* =========================
                STAT CARDS
            ========================= */}

            <section className="stats">

              <div className="stat-card">

                <div className="stat-icon">

                  <Flame size={18} />

                </div>

                <div>

                  <span>
                    CURRENT STREAK
                  </span>

                  <strong>
                    {currentStreak}
                  </strong>

                  <small>
                    days
                  </small>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">

                  <TrendingUp size={18} />

                </div>

                <div>

                  <span>
                    COMPLETION
                  </span>

                  <strong>
                    {completionPercentage}%
                  </strong>

                  <small>
                    this week
                  </small>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">

                  <Trophy size={18} />

                </div>

                <div>

                  <span>
                    BEST STREAK
                  </span>

                  <strong>
                    {bestStreak}
                  </strong>

                  <small>
                    days
                  </small>

                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon">

                  <CheckCircle2 size={18} />

                </div>

                <div>

                  <span>
                    TODAY
                  </span>

                  <strong>
                    {todayCompleted}
                    /
                    {habits.length}
                  </strong>

                  <small>
                    completed
                  </small>

                </div>

              </div>

            </section>


            {/* =========================
                ANALYTICS
            ========================= */}

            <section className="analytics-grid">


              {/* WEEKLY CHART */}

              <div className="panel">

                <div className="panel-header">

                  <div>

                    <h2>
                      Weekly Overview
                    </h2>

                    <p>
                      Your habit activity
                    </p>

                  </div>


                  <button className="period-button">

                    This Week

                  </button>

                </div>


                <div className="chart">

                  {weeklyActivity.map(
                    (value, index) => {

                      const height =
                        (value /
                          habits.length) *
                        100;

                      return (

                        <div
                          className="chart-column"
                          key={index}
                        >

                          <div className="chart-area">

                            <div
                              className="chart-bar"
                              style={{
                                height:
                                  `${height}%`,
                              }}
                            />

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

                      );

                    }
                  )}

                </div>

              </div>


              {/* HABIT PROGRESS */}

              <div className="panel">

                <div className="panel-header">

                  <div>

                    <h2>
                      Habit Progress
                    </h2>

                    <p>
                      Completion by habit
                    </p>

                  </div>

                  <BarChart3
                    size={18}
                  />

                </div>


                <div className="progress-list">

                  {habits
                    .slice(0, 4)
                    .map(
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

                            <div className="progress-label">

                              <span>
                                {habit.name}
                              </span>

                              <strong>
                                {percentage}%
                              </strong>

                            </div>


                            <div className="progress-track">

                              <div
                                className="progress-fill"
                                style={{
                                  width:
                                    `${percentage}%`,
                                }}
                              />

                            </div>

                          </div>

                        );

                      }
                    )}

                </div>

              </div>

            </section>


            {/* =========================
                HABIT TRACKER
            ========================= */}

            <section className="tracker-panel">


              <div className="tracker-header">

                <div>

                  <h2>
                    HABIT TRACKER
                  </h2>

                  <p>
                    August 18 – August 24, 2026
                  </p>

                </div>


                <button className="add-button">

                  <Plus size={15} />

                  Add Habit

                </button>

              </div>


              <div className="tracker-table">


                <div className="tracker-row tracker-header-row">

                  <div className="habit-column">
                    HABIT
                  </div>


                  {weekDays.map(
                    (day, index) => (

                      <div
                        className="day-column"
                        key={index}
                      >
                        {day}
                      </div>

                    )
                  )}


                  <div className="streak-column">
                    STREAK
                  </div>

                </div>


                {habits.map(
                  (habit) => {

                    const Icon =
                      habit.icon;

                    const streak =
                      habit.days.filter(
                        Boolean
                      ).length;

                    return (

                      <div
                        className="tracker-row"
                        key={habit.id}
                      >


                        <div className="habit-column habit-title">

                          <div className="habit-icon">

                            <Icon
                              size={15}
                            />

                          </div>

                          <span>
                            {habit.name}
                          </span>

                        </div>


                        {habit.days.map(
                          (
                            completed,
                            index
                          ) => (

                            <button
                              key={index}
                              className={`habit-check ${
                                completed
                                  ? "checked"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleHabit(
                                  habit.id,
                                  index
                                )
                              }
                            >

                              {completed ? (

                                <CheckCircle2
                                  size={17}
                                />

                              ) : (

                                <Circle
                                  size={16}
                                />

                              )}

                            </button>

                          )
                        )}


                        <div className="streak-number">

                          <Flame
                            size={13}
                          />

                          {streak}

                        </div>


                      </div>

                    );

                  }
                )}

              </div>

            </section>


            {/* =========================
                BOTTOM CARDS
            ========================= */}

            <section className="bottom-grid">


              <div className="quote-card">

                <div className="quote-symbol">
                  "
                </div>

                <div>

                  <h3>
                    Consistency is the key.
                  </h3>

                  <p>
                    You don't have to be
                    perfect. Just keep
                    showing up.
                  </p>

                </div>

              </div>


              <div className="goal-card">

                <div className="goal-icon">

                  <Target size={21} />

                </div>

                <div>

                  <span>
                    WEEKLY GOAL
                  </span>

                  <strong>
                    {completionPercentage}%
                    Complete
                  </strong>


                  <div className="goal-progress">

                    <div
                      style={{
                        width:
                          `${completionPercentage}%`,
                      }}
                    />

                  </div>

                </div>

              </div>


            </section>

          </>

        )}


        {/* =========================
            OTHER PAGES
        ========================= */}

        {activePage !==
          "Dashboard" && (

          <section className="empty-page">

            <div className="empty-icon">

              {activePage ===
                "Habits" && (
                <Target />
              )}

              {activePage ===
                "Calendar" && (
                <CalendarDays />
              )}

              {activePage ===
                "Analytics" && (
                <BarChart3 />
              )}

              {activePage ===
                "Settings" && (
                <Settings />
              )}

            </div>


            <h2>
              {activePage}
            </h2>


            <p>
              This section will be
              connected next.
            </p>

          </section>

        )}

      </main>

    </div>
  );
}


export default App;