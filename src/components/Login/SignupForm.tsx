import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleSignup } from "../../services/authService";

const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await handleSignup({ email, password });

      console.log(res);

      // redirect after signup
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create account 🚀</h2>
        <p className="signup-subtext">
          Start tracking your API usage with Spentrax
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn-main signup-btn" onClick={onSubmit}>
          Create Account
        </button>

        <div className="divider">OR</div>

        <button className="btn-outline">
          Continue with Google
        </button>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default SignupForm;