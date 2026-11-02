# Application conventions

- Use the installed Next.js docs before changing framework APIs. `package.json` and current code take precedence over older framework versions mentioned in documentation.
- Reuse `app/ui/` and `shared/` components. Follow the touched files' formatting and Tailwind patterns rather than importing another design system.
- Keep Postgres credentials, OAuth token handling and data access on the server. Validate authentication, input and access to the active household in server actions and API routes.
- Preserve database schema and household isolation unless the task includes a migration; preserve sheet headers in the legacy importer. Check string/number conversions, Argentine currency formatting, quantities and weight units when changing shopping calculations.
- Inspect callers and `app/lib/types` when changing shared data shapes. Handle loading, empty and error states in affected UI.
- Keep `docs/application-features.md` synchronized with every user-visible or MCP-visible capability change, grouped under the affected entity.
