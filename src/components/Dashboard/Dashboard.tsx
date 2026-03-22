import { useState } from "react";
import CreateProjectModal from "../CreateProjectModal/CreateProjectModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      name: "spentrax",
      region: "Asia (Singapore)",
      created: "Mar 14, 2026",
      usage: "31 MB",
      lastActive: "Mar 21, 2026",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0d0d0d",
        color: "#fff",
      }}
    >
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#111", padding: "20px" }}>
        <h2 style={{ marginBottom: "30px" }}>⚡ Spentrax</h2>

        <p style={{ color: "#aaa", marginBottom: "10px" }}>MENU</p>

        <div style={{ marginBottom: "10px", cursor: "pointer" }}>Dashboard</div>
        <div style={{ marginBottom: "10px", cursor: "pointer" }}>Projects</div>
        <div style={{ marginBottom: "10px", cursor: "pointer" }}>Settings</div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "20px" }}>
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h2>Dashboard</h2>
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: "8px 16px",
              background: "#1f1f1f",
              border: "1px solid #333",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            + New Project
          </button>
        </div>

        {showModal && (
          <CreateProjectModal
            onClose={() => setShowModal(false)}
            onCreated={() => {}}
          />
        )}
        {/* Metrics */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          {["API Calls", "Storage", "Cost", "Errors"].map((item) => (
            <div
              key={item}
              style={{
                flex: 1,
                background: "#161616",
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid #222",
              }}
            >
              <p style={{ color: "#aaa" }}>{item}</p>
              <h3>0</h3>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div
          style={{
            background: "#161616",
            borderRadius: "10px",
            border: "1px solid #222",
            padding: "20px",
          }}
        >
          <h3 style={{ marginBottom: "15px" }}>Projects</h3>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "#aaa" }}>
                <th>Name</th>
                <th>Region</th>
                <th>Created</th>
                <th>Usage</th>
                <th>Last Active</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((p, i) => (
                <tr key={i} style={{ borderTop: "1px solid #222" }}>
                  <td style={{ padding: "10px 0" }}>{p.name}</td>
                  <td>{p.region}</td>
                  <td>{p.created}</td>
                  <td>{p.usage}</td>
                  <td>{p.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
