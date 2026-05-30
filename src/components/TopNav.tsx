import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { C } from "../utils/theme";

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname.substring(1) || "home";

  const navItems: { key: string; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "register", label: "Register" },
    { key: "seminars", label: "Seminars" },
    { key: "awareness", label: "Awareness" },
    { key: "inspection", label: "Inspection" },
    { key: "feedback", label: "Feedback" },
    { key: "analytics", label: "Analytics" },
  ];

  const handleNav = (key: string) => {
    navigate(key === "home" ? "/" : `/${key}`);
    setMenuOpen(false);
  };

  return (
    <nav className="topnav">
      <div className="topnav-container">
        <div className="topnav-left">
          <div
            className="brand-logo cursor-pointer"
            onClick={() => handleNav("home")}
          >
            <div className="brand-logo-icon">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-title">ELUWAS</span>
            </div>
          </div>
        </div>

        <div className="topnav-right">
          <div className="desktop-menu">
            {navItems.map((n) => (
              <button
                key={n.key}
                className={`nav-link${activePath === n.key ? " active" : ""}`}
                onClick={() => handleNav(n.key)}
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="nav-actions">
            {activePath === "admin-dashboard" ||
            activePath === "vendor-dashboard" ? (
              <button
                className="btn-outline-danger desktop-only"
                onClick={() => handleNav("home")}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn-primary desktop-only"
                onClick={() => handleNav("login")}
              >
                Login
              </button>
            )}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            {navItems.map((n) => (
              <button
                key={n.key}
                className="mobile-nav-link"
                onClick={() => handleNav(n.key)}
                style={{
                  color: activePath === n.key ? C.emerald : C.textMuted,
                  fontWeight: activePath === n.key ? 500 : 400,
                }}
              >
                {n.label}
              </button>
            ))}
            <div className="mobile-divider"></div>
            {activePath === "admin-dashboard" ||
            activePath === "vendor-dashboard" ? (
              <button
                className="mobile-nav-link text-danger"
                onClick={() => handleNav("home")}
              >
                Logout
              </button>
            ) : (
              <button
                className="mobile-nav-link text-primary"
                onClick={() => handleNav("login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
