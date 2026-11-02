# Push, verify in dev and release to production

Use only when the user explicitly requests delivery and deployment. This is the
main procedure for changes that must go from the current worktree to `develop`,
be verified in `dev.dyarthi.com.ar`, and then be released from `develop` to
`main`.

## 1. Prepare and validate

1. Inspect the repository root, current branch, remote, worktree and diff.
2. Preserve unrelated changes and stage only task files. Never include local
   environment files, credentials, generated artifacts or unrelated edits.
3. Read `../rules/validation.md`; install only the repository's locked
   dependencies when needed.
4. Run the relevant checks from `package.json` sequentially. For application
   changes, run at least `yarn typecheck`, `yarn lint` and `yarn build`.
5. Record failures accurately. Fix regressions introduced by the task; do not
   weaken tests or hide baseline failures.

## 2. Publish to develop

1. Start from the actual `origin/develop` revision. Use a focused branch named
   `feature/<name>` or `fix/<name>` unless the user explicitly requests a
   different branch.
2. Review the final diff, commit the scoped changes and push the branch.
3. Create or update a PR targeting `develop` with the problem, behavior,
   migration/deployment notes and actual validation results.
4. Inspect PR checks and deployment status. A missing check is not a passing
   check. Merge only when the user explicitly authorized the merge; if the
   request authorizes delivery to `develop`, merge the PR after required checks
   are complete.

## 3. Verify dev.dyarthi.com.ar

1. Verify the deployed revision and environment before testing; do not confuse
   a preview, development deployment and production deployment.
2. Test the affected user flow at `https://dev.dyarthi.com.ar`, using the
   requested browser/testing surface and authorized test data. Cover the main
   happy path plus relevant permission, loading and error states.
3. Do not mutate production or shared data merely to test. Report authentication
   or environment limitations and distinguish code checks from browser evidence.
4. If verification fails, stop the release, report the failing flow and return
   to the branch/PR for a corrective change.

## 4. Release develop to main

1. Confirm `origin/develop` contains the intended merged commit and inspect the
   commits since the previous release. Confirm the production target and actual
   hosting configuration.
2. Create or update a release branch named `release/YYYY/MM/DD` (add a suffix
   only if that name already exists) from `develop`, and open a PR targeting
   `main`. Include included changes, dev verification evidence, migrations,
   rollback considerations and validation.
3. Inspect release PR checks. Merge, tag, publish and deploy only when the
   current user request explicitly authorizes those actions. This workflow does
   authorize the release from `develop` to `main` when the user asked for it.
4. Verify the resulting production revision and URL after deployment. Report
   commit, PRs, checks, deployment URL, browser observations and any skipped
   validation.

Never infer a deployment target from the README alone. Do not merge an outdated
PR, release unchanged `develop`, or claim success from an intended deployment.
