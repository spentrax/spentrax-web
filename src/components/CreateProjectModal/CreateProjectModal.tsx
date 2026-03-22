import { useState, type CSSProperties } from "react";
import { createProject } from "../../api/projectService";

const CreateProjectModal = ({ onClose  , onCreated}: { onClose: () => void, onCreated: () => void }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name.trim()) return;

    try {
      setLoading(true);

      await createProject(name); // ✅ API call

      onCreated();
      onClose(); // close modal
    } catch (err) {
      console.error(err);
      alert("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Create Project</h2>
          <span onClick={onClose} style={{ cursor: "pointer" }}>
            ✖
          </span>
        </div>

        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Give your project a name to start tracking API usage.
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="project-name"
          style={input}
        />

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={handleCreate}
            disabled={!name || loading}
            style={{
              ...btnPrimary,
              opacity: !name || loading ? 0.5 : 1,
            }}
          >
            {loading ? "Creating..." : "Create a project"}
          </button>

          <button onClick={onClose} style={btnSecondary}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;

const overlay: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal: CSSProperties = {
  background: "#111",
  padding: "30px",
  borderRadius: "10px",
  width: "400px",
  border: "1px solid #222",
};

const input: CSSProperties = {
  width: "100%",
  padding: "10px",
  background: "#1a1a1a",
  border: "1px solid #333",
  color: "#fff",
  marginTop: "5px",
};

const btnPrimary: CSSProperties = {
  padding: "10px 15px",
  background: "#6c2bd9",
  border: "none",
  color: "#fff",
};

const btnSecondary: CSSProperties = {
  padding: "10px 15px",
  background: "transparent",
  border: "1px solid #333",
  color: "#fff",
};
