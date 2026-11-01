# Commit, push and pull request

Always run `yarn verify:feature-docs`; functional PRs must include the feature
inventory update.

Use this workflow when the user requests Git delivery for this repository.

1. Inspect the current branch, remote, working tree and diff. Preserve unrelated changes and stage specific task files. Use the existing task branch; for new feature work start from `develop` and use `feature/<name>` or `fix/<name>`.
2. Read `../rules/validation.md` and run checks appropriate to the change. Report failures accurately. Fix regressions introduced by the task; do not change application behavior or test expectations merely to make a check green. For unrelated baseline failures, keep the PR in draft and document the failures.
3. Review the final diff for application relevance, credentials and generated files. Create a focused commit and push only when authorized by the current request. Do not include local environment files or unrelated verification artifacts.
4. Check for an existing PR for this branch. Create or update the PR against `develop`, unless the user specifies another base. Describe the problem, resulting behavior and actual validation. Use a repository PR template if one exists. With `gh`, write multiline descriptions to a file and pass `--body-file`.
5. Inspect available PR checks and report their status. Do not assume GitHub Actions or deployment checks are configured. Attach the PR to the current Codex task when the attachment tool is available. Creating a PR does not authorize merging or production deployment.
