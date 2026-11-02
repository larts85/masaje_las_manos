# Testing

Verify a this repository change or investigate failing tests.

Read the root `AGENTS.md` for the current repository context.

Inspect `package.json` and existing test tooling first. Run the available checks relevant to the task; do not assume Jest or Playwright scripts exist. Use browser tooling to verify UI flows at the local port 2021 when the app is running. Test authentication, data changes and error states in the affected flow with authorized test data. Add meaningful regression coverage where supported and appropriate. Report executed checks, failures and any missing tooling.
