# Update Package Bot

### Purpose
This bot will look at the registry from a package.json, choose a package to update, then run it through and agent.

This project will be hand built to keep skills sharp.

### Repo Design
- src
  - main.ts -> the main loop
  - ToolBox.ts -> tool functions + tool wrappers
  - ContextCollector.ts -> Gets information for the agent to work on
  - prompt.ts -> the agent's prompt
