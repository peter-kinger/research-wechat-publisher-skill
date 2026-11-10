# Research WeChat Publisher

Turn research papers, project notes, and rough drafts into accurate, readable,
WeChat-ready science stories.

[Project homepage](https://research-wechat-publisher.gisphere.chatgpt.site)

This repository contains the `research-wechat-editor` Codex skill, a worked
paper-interpretation example, and the source for the project homepage.

## What the skill enforces

- Academic accuracy and the author's intent take priority over presentation.
- Light editing by default; substantial restructuring only when requested.
- A title, an 80–150-character introduction, a main image with a separate
  caption, the body, and relevant paper information and references at the end.
- One recommended title by default and objective, descriptive subheadings.
- Evidence-traceable figures labeled as original, redrawn, or editorial
  diagrams, with clear separation of observations, predictions, and simulations.
- Concise, natural Chinese without forced story templates, inflated claims,
  mandatory author profiles, or engagement prompts.
- Editorial schedules and reminders only when explicitly requested.

## Repository layout

```text
skills/research-wechat-editor/   Installable Codex skill
examples/irrigation-scheduling/  Real paper-to-post example
examples/global-poverty-environment/  Global poverty and environmental pressure example
examples/integrative-sdg-portfolios/  Integrated SDG policy portfolio example
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
