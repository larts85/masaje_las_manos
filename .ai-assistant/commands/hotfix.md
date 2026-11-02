# Hotfix

Use for an explicitly requested urgent this repository fix.

Inspect the production issue, current branch and requested delivery target. For the normal integration workflow, start from `develop` and target `develop`. If the request requires a direct production fix, establish the production base and PR target before branching; do not infer an emergency merge policy.

Use `hotfix/<description>`, preserve unrelated changes, and follow `fix.prompt.md` for diagnosis and implementation. Apply `../rules/validation.md` and `pushup.md` for checks and authorized delivery. Bump the package version only if requested or required by a verified release convention. Report the fix, verification and PR status. Merge or deploy only within the explicitly authorized scope.
