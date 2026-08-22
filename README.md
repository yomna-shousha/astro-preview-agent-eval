# Astro Preview Agent Eval

Small public harness for testing whether an agent can diagnose a Preview-only issue from GitHub PR evidence.

The workflow deploys a Worker Preview, captures a Browser Run screenshot, sends correlated runtime requests, and posts an evidence-only PR comment with WOBS/debug/request IDs.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run build` | Build the Astro static assets |
| `npm run dev` | Start the Astro dev server |

## Agent Eval

Use `AGENT_EVAL_PROMPT.md` against the intentionally broken PR after the Preview Evidence comment appears.
