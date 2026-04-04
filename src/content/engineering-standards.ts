export const content = `
# Engineering Standards

Standards and conventions enforced across the Yosemite Crew monorepo. These rules are automated via commitlint, lint-staged, PR governance workflows, and CI checks.

## Toolchain Baseline

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 20.x+ | Runtime |
| pnpm | 10.30+ | Package manager with workspaces |
| Turborepo | 2.5+ | Monorepo build orchestration |
| TypeScript | 5.x | Type safety across all apps |

## Commit Message Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format, enforced by \`commitlint.config.cjs\`:

\`\`\`
<type>(<scope>): <subject>
\`\`\`

- **Max header length:** 100 characters
- **Types:** \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`perf\`, \`test\`, \`build\`, \`chore\`, \`ci\`, \`revert\`
- **Scopes:** \`backend\`, \`frontend\`, \`mobile\`, \`dev-docs\`, \`types\`, \`fhirtypes\`, \`repo\`, \`ci\`, \`docs\`

## Pre-Commit Hooks (lint-staged)

Configured in \`lint-staged.config.cjs\`, hooks run automatically on staged files:

| File Pattern | Action |
|-------------|--------|
| \`*.{ts,tsx,js,jsx}\` (non-mobile) | ESLint with \`--max-warnings=0\` |
| \`*.{ts,tsx,js,jsx}\` (mobile) | ESLint via \`pnpm --filter mobileAppYC\` |
| \`*.{ts,tsx,js,jsx,json,md,css,scss}\` | Prettier formatting |
| All files | Secretlint (secrets detection) |

## Code Formatting (Prettier)

Configured in \`.prettierrc.json\`:

| Setting | Value |
|---------|-------|
| Print width | 100 |
| Semicolons | Yes |
| Quotes | Single |
| Trailing commas | ES5 |

## PR Governance

The \`pr-governance.yml\` GitHub Actions workflow runs on every PR and enforces:

1. **Semantic PR title** — Must include a type and scope (e.g. \`feat(backend): add lab order API\`)
2. **Commit message validation** — All commits in the PR range are checked against commitlint rules

## Definition of Done

Every PR must satisfy before merge:

- Lint passes with zero warnings
- TypeScript type-check passes
- All tests pass
- Build succeeds
- Documentation updated for user-facing changes
- No secrets in committed code

## ESLint Configuration

Configured in \`.eslintrc.js\` with:

- **Environment:** ES2022, Node, Browser, Jest
- **TypeScript plugin** with parser for \`.ts\`/\`.tsx\` files
- **ESLint recommended** rules as base
- \`@typescript-eslint/no-explicit-any\` set to \`off\`
- Ignores: build artifacts, \`node_modules\`, mobile native code (\`android/\`, \`ios/\`)

## Security

- **Secretlint** runs on every commit to prevent accidental secret leaks
- **CodeQL** scans for security vulnerabilities on PRs
- **SonarCloud** enforces quality gates including security hotspots
- No \`.env\` files or credentials in version control

## AI / Agent Contributions

Contributions from AI tools and agents must follow the same standards: conventional commits, passing CI, and code review. The engineering standards document in the repository (\`docs/engineering-standards.md\`) provides the canonical reference.
`;
