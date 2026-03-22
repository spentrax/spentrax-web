import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">⚡ Spentrax</div>

      <div className="links">
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/login">Login</Link>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;