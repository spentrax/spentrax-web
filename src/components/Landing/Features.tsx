const Features = () => {
    return (
<section className="features">
        <p className="tag">FEATURES</p>

        <h2>Everything you need to manage API costs</h2>

        <p className="subtext">
          Stop guessing where your budget went. Get granular insights into every
          request, token, and project.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon blue">📦</div>
            <h3>Project Isolation</h3>
            <p>
              Organize costs by project or environment. Allocate budgets
              specifically to 'Production' vs 'Staging' with ease.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon purple">🔑</div>
            <h3>API Key Management</h3>
            <p>
              Rotate, revoke, and monitor individual API keys. See exactly which
              service is causing the spike in usage.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon pink">📊</div>
            <h3>Real-time Usage</h3>
            <p>
              Live dashboards showing token consumption, latency percentiles,
              and error rates as they happen.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon orange">🔔</div>
            <h3>Smart Alerts</h3>
            <p>
              Get notified via Slack, Email, or Webhooks when you hit 50%, 80%,
              or 100% of your defined limits.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;