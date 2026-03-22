import api from "./index";

export const createProject = async (name: string) => {
  const res = await api.post("/project", { name });
  return res.data;
};

export const getProjects = async () => {
  const res = await api.get("/project");
  return res.data;
};