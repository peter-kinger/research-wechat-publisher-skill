import { CopyCommand } from "./copy-command";

const installCommand =
  "cp -R research-wechat-publisher-skill/skills/research-wechat-editor .agents/skills/";

const standards = [
  {
    number: "01",
    title: "Paper identity first",
    text: "Every interpretation opens with the title, venue, DOI, year, affiliations, and a complete citation.",
  },
  {
    number: "02",
    title: "Figures stay traceable",
    text: "Original figures, redraws, and editorial diagrams are labeled differently and tied to a real source.",
  },
  {
    number: "03",
    title: "Teams get credited",
    text: "First and corresponding authors, institutions, and declared contributions are reported without guesswork.",
  },
  {
    number: "04",
    title: "Limits remain visible",
    text: "Simulations do not become field evidence, correlations do not become causes, and uncertainty is not edited away.",
  },
];

const workflow = [
  ["Read", "Extract the question, methods, evidence, team, and boundaries."],
  ["Verify", "Check metadata, figures, units, scenarios, and citation details."],
  ["Reshape", "Build a reader-first arc for non-specialist mobile reading."],
  ["Publish", "Deliver titles, formatted copy, figure notes, and open questions."],
];

export default function Home() {
  const repositoryUrl =
    "https://github.com/peter-kinger/research-wechat-publisher-skill";

  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Research WeChat Publisher home">
          <span className="wordmark-mark">RW</span>
          <span>Research WeChat Publisher</span>
        </a>
        <div className="nav-links">
          <a href="#workflow">Workflow</a>
          <a href="#standards">Standards</a>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            Repository
          </a>
          <a className="nav-cta" href="#install">
            Install skill
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">OPEN RESEARCH TOOLKIT / WECHAT EDITION</p>
          <h1>
            From paper to
            <span> public story,</span>
            without losing the evidence.
          </h1>
          <p className="hero-deck">
            A Codex skill for turning technical research into accurate,
            approachable Chinese WeChat articles with source-aware figures,
            author context, and honest limitations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#install">
              Get the skill
            </a>
            <a className="button button-quiet" href="#workflow">
              See the editorial system
            </a>
          </div>
        </div>

        <div className="paper-stage" aria-label="A stylized research article becoming a WeChat story">
          <div className="registration-mark">OPEN / 01</div>
          <article className="paper-card">
            <div className="paper-meta">
              <span>SMART AGRICULTURE</span>
              <span>2024 / 100403</span>
            </div>
            <h2>Can AI schedule irrigation better than a simple rule?</h2>
            <div className="author-line">Kelly / Foster / Schultz</div>
            <div className="paper-rule" />
            <div className="figure-grid">
              <div className="figure-block figure-blue">TRAIN</div>
              <div className="figure-block figure-green">TEST</div>
              <div className="figure-block figure-orange">VERIFY</div>
            </div>
            <p className="figure-caption">
              FIG. 2 / Original paper figure / DOI linked
            </p>
          </article>
          <div className="editor-stamp">
            <span>EVIDENCE</span>
            <strong>CHECKED</strong>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Project summary">
        <div>
          <strong>1</strong>
          <span>structured article header</span>
        </div>
        <div>
          <strong>3</strong>
          <span>distinct title directions</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>traceable research figures</span>
        </div>
        <div>
          <strong>0</strong>
          <span>invented claims</span>
        </div>
      </section>

      <section className="section section-intro" id="standards">
        <div className="section-label">
          <span>THE STANDARD</span>
          <span>01 - 04</span>
        </div>
        <div className="section-heading">
          <h2>Scientific restraint, built into the edit.</h2>
          <p>
            The skill does more than polish prose. It defines what must be
            checked, what must stay qualified, and what a reader should see
            before the story begins.
          </p>
        </div>
        <div className="standards-grid">
          {standards.map((item) => (
            <article className="standard-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-copy">
          <p className="eyebrow">THE EDITORIAL LOOP</p>
          <h2>A repeatable path from PDF to publishable post.</h2>
          <p>
            Designed for literature explainers, project updates, science
            outreach drafts, and editorial planning.
          </p>
        </div>
        <ol className="workflow-list">
          {workflow.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="proof-section">
        <div className="proof-note">
          <p className="eyebrow">OUTPUT CONTRACT</p>
          <h2>The first screen earns trust.</h2>
          <p>
            Before the opening hook, readers see the real paper image, source,
            title, journal, DOI, year, institutions, and citation.
          </p>
        </div>
        <div className="metadata-card">
          <div className="metadata-image">
            <span>REAL FIGURE</span>
            <strong>FIG. 02</strong>
          </div>
          <dl>
            <div>
              <dt>Title</dt>
              <dd>Original paper title</dd>
            </div>
            <div>
              <dt>Journal</dt>
              <dd>Full venue name</dd>
            </div>
            <div>
              <dt>Paper link</dt>
              <dd>https://doi.org/...</dd>
            </div>
            <div>
              <dt>Affiliations</dt>
              <dd>Verified author institutions</dd>
            </div>
          </dl>
          <p className="citation-line">
            cite / Authors. "Full title." Journal volume (year): article.
          </p>
        </div>
      </section>

      <section className="install-section" id="install">
        <div>
          <p className="eyebrow">INSTALL IN MINUTES</p>
          <h2>Bring the editorial desk into your workspace.</h2>
          <p className="install-copy">
            Clone the repository, place the skill under your workspace&apos;s
            <code>.agents/skills</code> directory, then start a new Codex task.
          </p>
        </div>
        <div className="terminal-card">
          <div className="terminal-bar">
            <span>INSTALL</span>
            <CopyCommand command={installCommand} />
          </div>
          <pre>
            <code>
              <span className="prompt">$</span> git clone{" "}
              https://github.com/peter-kinger/
              <br />
              {"  "}research-wechat-publisher-skill.git
              <br />
              <span className="prompt">$</span> mkdir -p .agents/skills
              <br />
              <span className="prompt">$</span> {installCommand}
            </code>
          </pre>
          <div className="terminal-foot">
            <span>SKILL.md</span>
            <span>references/</span>
            <span>assets/</span>
            <span>agents/</span>
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">FOR RESEARCHERS, EDITORS, AND SCIENCE COMMUNICATORS</p>
        <h2>Make complex work readable. Keep the evidence intact.</h2>
        <a className="button button-primary" href="#install">
          Start with Research WeChat Publisher
        </a>
      </section>

      <footer>
        <div className="wordmark footer-mark">
          <span className="wordmark-mark">RW</span>
          <span>Research WeChat Publisher</span>
        </div>
        <p>Open source under the MIT License. Built for evidence-first science communication.</p>
        <span>2026</span>
      </footer>
    </main>
  );
}
