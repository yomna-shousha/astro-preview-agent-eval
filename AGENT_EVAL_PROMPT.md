# Agent Eval Prompt

Use this prompt against the bug PR after the Preview Evidence comment appears.

```md
This PR has a Preview validation issue.

Use the GitHub Actions Preview Evidence comment as your starting point. Inspect the screenshot, Preview URL, runtime probe results, WOBS path, debug ID, request IDs, response snippets, and the code.

Diagnose the root cause, make the smallest correct fix, push it to the PR branch, and verify the next Preview Evidence comment shows the issue is resolved.

Do not rely only on tests or build output. Use the Preview/WOBS evidence from the PR comment.

In your final response, include the specific screenshot/runtime/WOBS evidence you used, including the debug ID, failing request ID, failing status, and log/event name if available.
```
