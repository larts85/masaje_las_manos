# Bug fixing

If the fix changes an observable or MCP-visible capability, update
`docs/application-features.md` and run `yarn verify:feature-docs`.

Diagnose and resolve a this repository issue.

Read the root `AGENTS.md` for the current repository context.

Reproduce the issue and trace it through the affected UI, server actions, API handlers and database operations and legacy import. Identify the cause before changing code. Apply a focused fix using existing patterns. Run relevant available checks and verify the original reproduction. Report the cause, fix and verification limitations.
