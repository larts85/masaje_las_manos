# Validation

- Inspect `package.json` before choosing commands. Use Yarn with the committed `yarn.lock`.
- `yarn lint` runs ESLint; `yarn build` builds the app. For a direct compiler check use the configured `yarn typecheck`.
- Run the build and compiler check sequentially: the build regenerates `.next` types consumed by TypeScript. Do not run them concurrently.
- Use the configured `verify:supabase`, `verify:households` and `verify:import` scripts when relevant; inspect `SUPABASE_VERIFICATION.md` before database verification. Do not assume Jest, Testing Library, Playwright fixtures or coverage reports exist. Select tests from the actual repo configuration.
- For agent documentation/configuration changes, check skill metadata, configuration syntax, all local references and the final diff. Application checks are required when application behavior or build configuration changes.
- Fix task regressions and report unrelated baseline failures. Do not alter correct behavior or weaken tests to get a passing check.
- Run `yarn verify:feature-docs` for every PR and require the feature inventory to change when functional application files change.
- Verify affected browser flows with available tools when appropriate, using authorized test data. Report untested flows and authentication/tool limitations accurately.
