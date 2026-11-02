# Cross-repository instruction synchronization

Use when asked to copy or synchronize agent instructions between repositories.

Read the root `AGENTS.md` for the current repository context.

Use the source and target specified by the user. Inspect existing instructions and preserve repository-specific context, credentials and local changes. Copy shared workflows into `.ai-assistant/`, expose them through references in `.agents/skills/`, and configure project settings in `.codex/config.toml`. Adapt technology-specific guidance to the target stack. Check references and skill frontmatter. Report conflicts or missing sources; do not overwrite differing target instructions without resolving their intended behavior.
