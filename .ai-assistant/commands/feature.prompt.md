# Feature implementation

For every capability added, removed or changed, update `docs/application-features.md`
under the affected entity and run `yarn verify:feature-docs` before finishing.

Implement the requested this repository feature.

Read the root `AGENTS.md` for the current repository context.

Inspect related routes, server actions and reusable UI before editing. Use the installed Next.js documentation for affected APIs. Reuse components in `app/ui/` and `shared/`; integrate with Supabase Postgres through the existing server operations. Keep types, authentication and styling consistent with the repo. Run the relevant checks available in `package.json` and verify affected browser behavior when applicable. Report changes and validation. Perform Git or deployment actions only within the user’s requested scope.
