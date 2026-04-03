export const content = `
# Contributing

We love contributions! Whether it is code, docs, or ideas, your help is always welcome.

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](/docs/code-of-conduct).

## How to Report Issues

1. Search existing issues to avoid duplicates
2. Open a new issue with a clear title and description
3. Include reproduction steps, expected behavior, and actual behavior
4. Add relevant labels (bug, enhancement, etc.)

## Feature Requests

1. Open an issue describing the feature
2. Explain why it would be useful
3. Discuss the implementation approach if possible

## Submission Guidelines

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a feature branch from \`dev\`

\`\`\`bash
git clone https://github.com/yourusername/Yosemite-Crew.git
cd Yosemite-Crew
git checkout -b feat/my-feature dev
\`\`\`

### Development

1. Install dependencies: \`pnpm install\`
2. Make your changes
3. Write tests for new functionality
4. Run checks before submitting:

\`\`\`bash
pnpm run lint
pnpm run test
pnpm run build
\`\`\`

### Pull Request

1. Push to your fork
2. Open a PR targeting the \`dev\` branch
3. Fill out the PR template
4. Wait for code review

## Coding Rules

- All features must be tested
- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- Use TypeScript for type safety
- Document public APIs

## Commit Message Format

All commit messages must follow this format:

\`\`\`
<type>(<scope>): <subject>
\`\`\`

### Types

| Type | Description |
|------|-------------|
| \`feat\` | A new feature |
| \`fix\` | A bug fix |
| \`docs\` | Documentation changes |
| \`style\` | Code style changes (formatting, semicolons) |
| \`refactor\` | Code changes that neither fix bugs nor add features |
| \`perf\` | Performance improvements |
| \`test\` | Adding or updating tests |
| \`chore\` | Build process or tooling changes |
| \`ci\` | CI/CD configuration changes |

### Scopes

| Scope | Description |
|-------|-------------|
| \`backend\` | Backend (Express API) changes |
| \`frontend\` | Frontend (Next.js) changes |
| \`mobile\` | Mobile app (React Native) changes |
| \`dev-docs\` | Developer documentation changes |
| \`types\` | Shared types package changes |
| \`fhirtypes\` | FHIR types package changes |
| \`repo\` | Repository-level changes |
| \`ci\` | CI/CD configuration changes |
| \`docs\` | General documentation changes |

### Examples

\`\`\`
feat(backend): add IDEXX lab order endpoints
fix(frontend): resolve duplicate notification issue
docs(dev-docs): update API index with new routers
refactor(backend): simplify auth middleware chain
\`\`\`

### Reverts

\`\`\`
revert: feat(backend): add IDEXX lab order endpoints
\`\`\`

## Automated Quality Checks

The repository uses **commitlint** and **lint-staged** to enforce standards automatically:

- **commitlint** — Validates commit messages against the conventional format above. Commits that don't match \`<type>(<scope>): <subject>\` will be rejected.
- **lint-staged** — Runs linting and formatting on staged files before each commit.

These run automatically via Git hooks — no manual setup required after \`pnpm install\`.

## Definition of Done

Before merging, all changes must satisfy:

\`\`\`bash
pnpm run lint         # Code linting
pnpm run type-check   # TypeScript type checking
pnpm run test         # Test suite
pnpm run build        # Production build
\`\`\`

Updated docs are required for any changed behavior, setup steps, or workflows.
`;
