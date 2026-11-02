# Release preparation

Use when the user requests a this repository release.

Inspect the actual branch structure, release history and hosting configuration. Use `develop` as the integration source; establish the requested production target before creating the release PR. Do not open a release PR from an unchanged copy of `develop` back into `develop`.

Use the requested release branch name or `release/YYYY/MM/DD` with the user's current date. Collect changes since the previous release from Git and merged PRs; do not assume sprint metadata or a fixed reviewer list. Apply `../rules/validation.md`, and describe included changes, verification and rollout steps. Change the package version only when required by the requested release.

Create or update the release PR within the authorized scope. Report actual checks and deployment status; absent CI is not a passing pipeline. Merging, tagging, publishing a release and deploying require authorization for those actions.
