---name: pushup
applyTo: '**'
---

Execute the comprehensive development workflow that includes code analysis, branch creation, commit organization, PR creation, and pipeline monitoring with full template completion.

## What this command does:

### Phase 1: Changes Analysis for Branch Naming and PR Description

- Reviews all changes made in the current branch, and in the associated PR (if it exists), to understand the scope and nature of modifications.
- Uses this analysis to create a suitable branch name and to write or update the Pull Request description effectively.

### Phase 2: Code Review and Quality Assurance

- Performs comprehensive code review following frontend best practices using available tooling of `alwaysApply: true` rules in .ai-assistant/rules folder.
- Checks code readability, error handling, and TypeScript compliance.
- Validates adherence to Single Responsibility Principle and state management.
- Identifies performance bottlenecks and generates improvement recommendations.
- Checks for potential compiler issues (TypeScript), Linter errors, and any other necessary improvements or adjustments.
- Applies necessary fixes before proceeding with git operations.

### Phase 3: Branch Creation

- Creates properly named branch with descriptive reference.
- Format: `[type]/[descriptive-name]`
  - Example: `feature/create-initiative-wizard`
- Follows project naming conventions (feature/, fix/, release/, hotfix/)
  - See @gitflow.mdc for more details.

### Phase 4: Commit Organization with Dependency Management

**CRITICAL**: Follows dependency management rules to avoid broken commits:

- **Never commits broken dependencies** - all related files committed together
- **Exception files** never committed: `app/constants/config.ts`, `config/default.js`
- Organizes commits by functional completeness:
  - Infrastructure/Rules (if .ai-assistant/rules/\* modified)
  - Complete Features with Dependencies (types + components + helpers)
  - Complete Test Coverage
  - Supporting Files (styles, mocks, documentation)

### Phase 5: Automatic PR Creation and Template Completion

- Creates PR with proper title format: `[type]: [branch-name-without-prefix]`
- base branch must be always develop.
- Uses appropriate template (`.github/pull_request_template.md`)
- **Mandatory**: Completes ALL template sections with meaningful content

### Phase 6: Monitor CI/CD Pipeline

After pushing the branch and creating the PR, the agent will monitor the CI/CD pipeline until completion. This process should NOT be sent to the background, and should remain interactive.

**Action:**

- Use `cd /Users/imadev/Dev/repos/dyarti && gh run watch $(gh run list --limit 1 --json databaseId --jq '.[0].databaseId')` to monitor the pipeline status for the newly created PR.
- Continuously monitor until all checks pass (build, tests, deployment).

## Usage:

Simply type `/pushup` in the chat to execute the complete workflow.

## Key Features:

- ✅ **Complete automation** - from code review to PR creation
- ✅ **Dependency safety** - prevents broken commits
- ✅ **Template completion** - never leaves PR template empty
- ✅ **Code quality** - frontend review before any git operations
- ✅ **Proper branching** - follows project naming conventions
- ✅ **Pipeline monitoring** - ensures successful CI/CD completion

## Expected Output:

1. Code review results and applied improvements
2. New branch created and pushed to origin
3. Organized commits with proper messages
4. PR created with completed template and assigned reviewers
5. Summary with all relevant links (PR, branch)
6. CI/CD pipeline monitoring results
