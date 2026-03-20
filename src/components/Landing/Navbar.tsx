const Navbar = () => {
    return (
      <nav className="nav">
        <div className="logo">⚡ Spentrax</div>
  
        <div className="links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="/login">Login</a>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;