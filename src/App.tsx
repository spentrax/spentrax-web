import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./components/Projects/Projects";
import Settings from "./components/Settings/Settings";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages (NO HEADER) */}
        <Route path="/" element={<Landing />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* Protected Pages (WITH HEADER) */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;