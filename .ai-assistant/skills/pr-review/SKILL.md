---
name: pr-review
description: Review an existing pull request, post evidence-based inline or general feedback, address failing pipeline checks with actionable requests, and report the review to the PR-creating Codex session.
---

# Pull request review

Review the requested PR independently from its author. Focus on defects, regressions, security, maintainability, and whether the change meets its stated goal. Do not edit the PR branch or merge it as part of the review.

## Review workflow

1. Identify the PR, repository, base and head commits, description, changed files, and current pipeline/check status. Read relevant repository guidance and inspect the full diff plus surrounding code for affected behavior.
2. Validate important claims with focused inspection or checks available in the repo. Distinguish confirmed defects from questions or risks; do not report style preferences as blockers.
3. For each actionable code finding, post an inline PR review comment on the smallest relevant changed line range. State impact, conditions to reproduce, and the needed correction. Use a general PR comment when a finding is cross-cutting or cannot be attached to a changed line. Avoid duplicate comments and report no findings when none are supported by evidence.
4. Inspect pipeline checks. If a failed or blocked check is caused by the PR, identify the check and useful log evidence, then request the specific adjustment in a PR comment (inline only when tied to code). Separate PR-caused failures from infrastructure, flaky, or pre-existing failures. Never claim a check passed unless observed.
5. Submit the review with an appropriate disposition (comment, approve, or request changes) based on repository policy and findings. Do not approve when actionable defects or PR-caused pipeline failures remain.
6. Report the outcome to the Codex session that created the PR: include PR link, disposition, findings and comment locations, pipeline status, and any follow-up needed. Use the available Codex session/task communication mechanism when available. If the originating session cannot be reached, leave a concise general PR comment with the summary and return the same report to the invoking user/session; do not claim a handoff that did not occur.

Keep comments concise, specific, respectful, and limited to the submitted change. Never modify the PR or pipeline configuration during review unless separately requested.
