# Research WeChat Publisher

Turn research papers, project notes, and rough drafts into accurate, readable,
WeChat-ready science stories.

This repository contains the `research-wechat-editor` Codex skill, a worked
paper-interpretation example, and the source for the project homepage.

## What the skill enforces

- A structured article header with title, venue, DOI, year, affiliations, and a
  complete citation.
- Verifiable author-team information without inferred roles or biographies.
- Evidence-traceable figures labeled as original, redrawn, or editorial
  diagrams.
- Clear separation between observed results, model estimates, simulations, and
  interpretation.
- Mobile-friendly WeChat structure with three title options, short sections,
  image guidance, limitations, and references.

## Repository layout

```text
skills/research-wechat-editor/   Installable Codex skill
examples/irrigation-scheduling/  Real paper-to-post example
app/                             Project homepage
tests/                           Rendered-site checks
```

## Install

```bash
git clone https://github.com/peter-kinger/research-wechat-publisher-skill.git
mkdir -p .agents/skills
cp -R research-wechat-publisher-skill/skills/research-wechat-editor .agents/skills/
```

Restart Codex or open a new task after installation so the skill can be
discovered.

## Example prompts

```text
Use research-wechat-editor to explain this paper for readers who are new to
machine learning and agriculture. Keep it around 1,500 Chinese characters.
```

```text
Polish this research project update for WeChat. Preserve all limitations,
include the author team, and only recommend figures that can be traced to the
source material.
```

## Homepage development

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
npm test
```

## Skill validation

Run the Codex skill validator against the bundled skill directory:

```bash
python /path/to/skill-creator/scripts/quick_validate.py skills/research-wechat-editor
```

## License

Released under the [MIT License](LICENSE). Source-paper figures in the worked
example retain their original attribution and license.
