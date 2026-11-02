# Git and delivery

- Inspect the working tree before branching or committing. Preserve unrelated local changes and stage only task files.
- Start ordinary new feature/fix work from `develop`. Target integration PRs to `develop` unless the request specifies another target.
- Keep commits focused and PR descriptions tied to the final diff, with actual validation results. Use draft PRs for unresolved baseline checks.
- Exclude credentials, runtime logs, chat exports, unrelated prompts and generated artifacts from shared agent configuration.
- Follow the user's authorized scope for push, PR creation, merge and deployment; an implementation request alone does not authorize production actions.
- Confirm the actual hosting project and environment before deployment. Do not assume a provider-specific pipeline or reviewer list.
