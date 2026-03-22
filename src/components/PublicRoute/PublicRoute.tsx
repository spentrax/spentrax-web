import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default PublicRoute;