import { useEffect, useState } from "react";
import CreateProjectModal from "../CreateProjectModal/CreateProjectModal";
import ProjectsTable from "./ProjectsTable";
import { getProjects } from "../../api/projectService";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
  
      const formatted = data.map((p: any, index: number) => ({
        index: index + 1,
        name: p.name,
        created: new Date(p.createdAt).toLocaleDateString(),
        apiKey: p.apiKeys?.[0]?.key || "No Key",
      }));
  
      setProjects(formatted);
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  return (
    <div>
      {/* Top */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Projects</h2>

        <div
          onClick={() => setShowModal(true)}
          style={{
            padding: "8px 16px",
            background: "#1f1f1f",
            border: "1px solid #333",
            cursor: "pointer",
          }}
        >
          + New Project
        </div>
      </div>

      {/* Table */}
      <ProjectsTable projects={projects} />

      {/* Modal */}
      {showModal && (
        <CreateProjectModal
          onClose={() => setShowModal(false)}
          onCreated={fetchProjects}
        />
      )}
    </div>
  );
};

export default Projects;