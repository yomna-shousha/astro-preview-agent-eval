# Astro Preview Agent Eval

Small public harness for testing whether an agent can diagnose a Preview-only issue by collecting its own evidence.

The workflow only deploys a Worker Preview and posts the Preview coordinates. It intentionally does not capture screenshots, send application probes, query WOBS, or provide request IDs. The investigating agent must do that work itself.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run build` | Build the Astro static assets |
| `npm run dev` | Start the Astro dev server |

## Agent Eval

Use `AGENT_EVAL_PROMPT.md` against the intentionally broken PR after the Preview Coordinates comment appears.

## Sensor Eval

Add the `sensor` label to a PR to run the separate `Worker Preview Sensor` workflow. That workflow deploys the Preview, captures a browser screenshot, sends runtime probes, attempts a GraphQL Workers metrics query, and posts the collected evidence back to the PR.
