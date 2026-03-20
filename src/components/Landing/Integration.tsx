const Integration = () => {
    return (
        <section className="integration">
        <div className="integration-left">
          <h2>
            Set it and forget it. <br />
            <span className="gradient-text">We’ll watch the meter.</span>
          </h2>

          <p className="subtext">
            Connect your providers in seconds. We support OpenAI, Anthropic,
            Google Gemini, and custom webhooks.
          </p>

          <div className="points">
            <div>
              ✅ <b>One-line integration</b>
              <br />
              <span>
                Just change your base URL. No code refactoring needed.
              </span>
            </div>
            <div>
              ✅ <b>Automatic Caching</b>
              <br />
              <span>
                Reduce costs by up to 40% with our intelligent response caching
                layer.
              </span>
            </div>
            <div>
              ✅ <b>Team Collaboration</b>
              <br />
              <span>Invite your team and set role-based access controls.</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CODE BLOCK */}
        <div className="code-box">
          <div className="window-bar">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="url">integration.js</div>
          </div>

          <pre>
            {`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.spentrax.io/v1/proxy",
});

// That's it. Tracking starts automatically.

await client.chat.completions.create({...});`}
          </pre>
        </div>
      </section>
    );
  };
  
  export default Integration;