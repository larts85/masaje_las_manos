# Coverage analysis and improvement

Use for an explicit request to analyze or improve this repository test coverage.

Inspect `package.json`, test files and test configuration first. The repo has database verification scripts but no general test coverage script; do not invent reports, percentages, fixtures or test helpers. If tooling is absent, report the gap and propose the smallest relevant setup. Install or configure test tooling only when covered by the user's request.

When coverage tooling exists, run its supported command and identify behavioral gaps in the requested area. Prioritize shopping totals and units, legacy import conversions, authentication boundaries and failure states as relevant to the change. Add meaningful assertions using existing conventions; do not enforce a coverage threshold that the repo has not adopted.

Re-run affected tests and report measured coverage, remaining gaps and verification limitations. Keep real credentials and user spreadsheet data out of fixtures.
