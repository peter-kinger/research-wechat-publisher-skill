"use client";

import { useState } from "react";
import { CopyCommand } from "./copy-command";

type Language = "zh" | "en";

const installCommand =
  "cp -R research-wechat-publisher-skill/skills/research-wechat-editor .agents/skills/";
const repositoryUrl =
  "https://github.com/peter-kinger/research-wechat-publisher-skill";
const exampleUrl = `${repositoryUrl}/blob/main/examples/irrigation-scheduling/wechat-post.md`;

const content = {
  zh: {
    nav: { principles: "原则", workflow: "流程", install: "安装", repo: "GitHub" },
    eyebrow: "科研公众号写作 SKILL",
    title: ["让论文更好读，", "不让证据走样。"],
    deck: "把论文、项目笔记和粗稿，整理成准确、易懂、适合微信公众号发布的中文文章。作者、图片、数据与局限，都有出处。",
    primaryAction: "安装 Skill",
    secondaryAction: "查看真实示例",
    proofLabel: "一篇可信解读，从正文之前开始",
    proofItems: [
      ["文章信息", "题目、期刊、DOI、年份、单位与完整引文"],
      ["作者团队", "只写论文与机构页面能够核实的信息"],
      ["图片证据", "原图、重绘与编辑示意图分别标注来源"],
    ],
    cardStamp: "证据优先",
    principlesEyebrow: "写作底线",
    principlesTitle: "润色表达，不改写事实。",
    principlesDeck: "Skill 把事实核查直接写进编辑流程，让读者看懂，也让作者经得起追问。",
    principles: [
      ["01", "身份先行", "文章开头先给论文信息、作者团队和标准引用，再进入故事。"],
      ["02", "图片可追溯", "每张讲解图片都基于真实材料，并给出图号、页码或链接。"],
      ["03", "边界不消失", "模拟不冒充田间证据，相关不写成因果，不确定性不被删掉。"],
    ],
    workflowEyebrow: "编辑流程",
    workflowTitle: "从 PDF 到可发布文章，只走四步。",
    workflow: [
      ["阅读", "提取问题、方法、证据、团队与边界"],
      ["核验", "复核元数据、图片、单位、情景与引文"],
      ["重组", "按非专业读者的阅读路径搭建叙事"],
      ["交付", "输出标题、正文、配图说明与待核问题"],
    ],
    installEyebrow: "一分钟安装",
    installTitle: "把可信写作流程放进 Codex。",
    installText: "克隆仓库，将 research-wechat-editor 复制到项目的 .agents/skills 目录，然后新开一个任务。",
    copy: "复制命令",
    copied: "已复制",
    repoAction: "打开 GitHub 仓库",
    license: "MIT 开源 · 为严谨的科研传播而设计",
  },
  en: {
    nav: { principles: "Principles", workflow: "Workflow", install: "Install", repo: "GitHub" },
    eyebrow: "RESEARCH COMMUNICATION SKILL",
    title: ["Make papers readable,", "without bending the evidence."],
    deck: "Turn papers, project notes, and rough drafts into accurate, approachable Chinese WeChat stories, with every author, figure, result, and limitation traceable to a source.",
    primaryAction: "Install the skill",
    secondaryAction: "Read a real example",
    proofLabel: "A trustworthy story starts before the opening line",
    proofItems: [
      ["Paper identity", "Title, venue, DOI, year, affiliations, and full citation"],
      ["Author team", "Only details verified in the paper or institutional sources"],
      ["Visual evidence", "Originals, redraws, and editorial diagrams labeled separately"],
    ],
    cardStamp: "Evidence first",
    principlesEyebrow: "EDITORIAL STANDARD",
    principlesTitle: "Polish the writing. Preserve the facts.",
    principlesDeck: "The skill builds verification into the edit, so the story stays clear for readers and defensible for researchers.",
    principles: [
      ["01", "Identity first", "Open with paper metadata, the author team, and a complete citation before the story begins."],
      ["02", "Figures stay traceable", "Base every explanatory image on real material and retain its figure number, page, or link."],
      ["03", "Limits stay visible", "Simulations do not become field evidence, correlations do not become causes, and uncertainty remains."],
    ],
    workflowEyebrow: "EDITORIAL LOOP",
    workflowTitle: "Four steps from PDF to publishable post.",
    workflow: [
      ["Read", "Extract the question, methods, evidence, team, and boundaries"],
      ["Verify", "Check metadata, figures, units, scenarios, and citations"],
      ["Reshape", "Build a reader-first narrative for non-specialists"],
      ["Deliver", "Provide titles, copy, figure notes, and open questions"],
    ],
    installEyebrow: "INSTALL IN A MINUTE",
    installTitle: "Bring evidence-first editing into Codex.",
    installText: "Clone the repository, copy research-wechat-editor into your project’s .agents/skills directory, then open a new task.",
    copy: "Copy command",
    copied: "Copied",
    repoAction: "Open the GitHub repository",
    license: "MIT licensed · Built for careful science communication",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const copy = content[language];

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  }

  return (
    <main data-language={language}>
      <nav className="nav-shell" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
        <a className="wordmark" href="#top" aria-label="Research WeChat Publisher">
          <span className="wordmark-mark">RW</span>
          <span>Research WeChat Publisher</span>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#principles">{copy.nav.principles}</a>
            <a href="#workflow">{copy.nav.workflow}</a>
            <a href="#install">{copy.nav.install}</a>
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
              {copy.nav.repo}
            </a>
          </div>
          <div className="language-switch" aria-label={language === "zh" ? "切换语言" : "Switch language"}>
            <button type="button" className={language === "zh" ? "active" : ""} aria-pressed={language === "zh"} onClick={() => changeLanguage("zh")}>
              中文
            </button>
            <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>
              EN
            </button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.title[0]}
            <span>{copy.title[1]}</span>
          </h1>
          <p className="hero-deck">{copy.deck}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#install">{copy.primaryAction}</a>
            <a className="text-link" href={exampleUrl} target="_blank" rel="noreferrer">{copy.secondaryAction} <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <aside className="evidence-card" aria-label={copy.proofLabel}>
          <div className="evidence-head">
            <span>EDITORIAL NOTE / 01</span>
            <strong>{copy.cardStamp}</strong>
          </div>
          <h2>{copy.proofLabel}</h2>
          <div className="evidence-list">
            {copy.proofItems.map(([title, text], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <p><strong>{title}</strong>{text}</p>
              </div>
            ))}
          </div>
          <div className="evidence-seal">SOURCE<br />CHECKED</div>
        </aside>
      </section>

      <section className="principles section-shell" id="principles">
        <div className="section-intro">
          <p className="eyebrow">{copy.principlesEyebrow}</p>
          <h2>{copy.principlesTitle}</h2>
          <p>{copy.principlesDeck}</p>
        </div>
        <div className="principle-grid">
          {copy.principles.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" id="workflow">
        <div className="workflow-heading">
          <p className="eyebrow">{copy.workflowEyebrow}</p>
          <h2>{copy.workflowTitle}</h2>
        </div>
        <ol>
          {copy.workflow.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="install section-shell" id="install">
        <div className="install-copy">
          <p className="eyebrow">{copy.installEyebrow}</p>
          <h2>{copy.installTitle}</h2>
          <p>{copy.installText}</p>
          <a className="text-link" href={repositoryUrl} target="_blank" rel="noreferrer">{copy.repoAction} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="command-card">
          <div className="command-bar">
            <span>TERMINAL</span>
            <CopyCommand command={installCommand} label={copy.copy} copiedLabel={copy.copied} />
          </div>
          <pre><code><span>$</span> {installCommand}</code></pre>
          <div className="command-foot"><span>SKILL.md</span><span>references/</span><span>assets/</span></div>
        </div>
      </section>

      <footer>
        <div className="wordmark">
          <span className="wordmark-mark">RW</span>
          <span>Research WeChat Publisher</span>
        </div>
        <p>{copy.license}</p>
        <span>2026</span>
      </footer>
    </main>
  );
}
