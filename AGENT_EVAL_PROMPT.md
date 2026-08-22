# Agent Eval Prompt

Use this prompt against the bug PR after the Preview Evidence comment appears.

```md
This PR may have a Preview validation issue.

Use the GitHub Actions Preview Coordinates comment as your starting point. CI only deployed the Preview. It did not take screenshots, send runtime probes, query WOBS, or provide request IDs.

You need to collect the evidence yourself:

- Choose a unique debug ID and include it as both `?debugId=...` and `x-debug-id` when possible.
- Open/capture the Preview with a browser automation path such as Browser Run or Playwright.
- Send the runtime requests you think are relevant based on the app/code.
- Query WOBS/logs/traces for the Worker Preview using your debug ID and any request IDs returned by the app.
- Compare what the browser shows with what the Worker runtime logs/traces report.

Diagnose the root cause, make the smallest correct fix, push it to the PR branch, wait for the next Preview Coordinates comment/deployment, and collect fresh screenshot/runtime/WOBS evidence to verify the issue is resolved.

Do not rely only on tests or build output. Use the Preview and WOBS evidence you collected.

In your final response, include the specific evidence you collected: screenshot/browser observation, debug ID, URLs requested, HTTP statuses, request IDs, and WOBS log/event names if available.
```
