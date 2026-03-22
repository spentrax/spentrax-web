import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const res = await handleLogin({ email, password });
      localStorage.setItem("token", res.token);
      // redirect after login
      navigate("/projects");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome back 👋</h2>
        <p className="login-subtext">Login to your Spentrax account</p>

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-main login-btn" onClick={onSubmit}>
          Login
        </button>

        <div className="divider">OR</div>

        <button className="btn-outline">Continue with Google</button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
