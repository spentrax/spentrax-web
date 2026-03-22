import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const user = {
    email: "augustine@mail.com",
  };

  const getInitial = (email: string) => email.charAt(0).toUpperCase();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ background: "#0d0d0d", color: "#fff", height: "100vh" }}>
      {/* Header */}
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          borderBottom: "1px solid #222",
          background: "#111",
        }}
      >
        {/* Logo */}
        <div
          style={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/projects")}
        >
          ⚡ Spentrax
        </div>

        {/* Profile Dropdown */}
        <div ref={profileRef} style={{ position: "relative" }}>
          {/* Avatar */}
          <div
            onClick={() => setShowProfile(!showProfile)}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {getInitial(user.email)}
          </div>

          {/* Dropdown */}
          {showProfile && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: "0",
                background: "#111",
                border: "1px solid #222",
                borderRadius: "8px",
                width: "200px",
                padding: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                zIndex: 100,
              }}
            >
              {/* Email */}
              <div
                style={{
                  fontSize: "13px",
                  color: "#aaa",
                  marginBottom: "10px",
                  wordBreak: "break-all",
                }}
              >
                {user.email}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "#222",
                  margin: "8px 0",
                }}
              />

              {/* Logout */}
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                style={{
                  cursor: "pointer",
                  color: "#f55",
                  fontSize: "14px",
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", height: "calc(100% - 60px)" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "200px",
            borderRight: "1px solid #222",
            padding: "20px",
            background: "#111",
          }}
        >
          <div
            onClick={() => navigate("/projects")}
            style={{
              marginBottom: "15px",
              cursor: "pointer",
              color: isActive("/projects") ? "#fff" : "#aaa",
            }}
          >
            Projects
          </div>

          <div
            onClick={() => navigate("/settings")}
            style={{
              cursor: "pointer",
              color: isActive("/settings") ? "#fff" : "#aaa",
            }}
          >
            Settings
          </div>
        </div>

        {/* Page Content */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
