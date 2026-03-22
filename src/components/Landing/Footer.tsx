const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>⚡ Spentrax</h3>
          <p>
            Intelligent cost management for the AI era. Built for developers,
            by developers.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <a href="/">Features</a>
          <a href="/">Integrations</a>
          <a href="/">Pricing</a>
          <a href="/">Changelog</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="/">Documentation</a>
          <a href="/">API Reference</a>
          <a href="/">Community</a>
          <a href="/">Blog</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Spentrax Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;