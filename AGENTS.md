# Repository Guidelines

Read the repository documentation and package manifest before changing code. Preserve existing conventions and keep changes focused.

Use the scripts declared by `package.json` for linting, tests, type checks, and builds. Run the narrowest relevant validation and report unavailable tooling accurately.

Use feature or fix branches from the integration branch, keep commits focused, and open a PR with the repository template. Do not merge, deploy, or publish without explicit authorization.

`.ai-assistant/` is the tool-neutral source for reusable commands, rules, and skills. Keep it generic and repository-scoped; exclude unused-tool references, credentials, logs, and chat exports.
