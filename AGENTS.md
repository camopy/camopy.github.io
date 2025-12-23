# Repository Guidelines

## Project Structure & Module Organization
- `package.json` is retained for lightweight scripts and deployment; keep scripts aligned with the static build flow.

## Build, Test, and Development Commands
- `npm run dev` serves the static site from `static/` on port 3001 for local iteration.

## Coding Style & Naming Conventions
- Use clear, descriptive HTML class names and keep Tailwind utility stacks readable by ordering classes (layout → spacing → typography → state).
- Keep indentation to two spaces in HTML and CSS for readability.
- Prefer semantic HTML (`header`, `main`, `section`, `nav`) and accessible labels (`aria-label`, descriptive `alt` text).

## Testing Guidelines
- No automated tests currently exist. If you add JS or build tooling, introduce a test runner and document it here.
- Prefer behavioral tests for interactive scripts (Playwright) and keep them close to the feature they validate.

## Commit & Pull Request Guidelines
- Use conventional commits (e.g., `feat: add responsive hero gradient`, `fix: correct CTA link`). Avoid referencing “Codex” in messages.
- Each PR should include a clear description, any linked issue/feature request, testing steps (if applicable), and screenshots for UI changes.
- Rebase or squash as needed so the history reflects meaningful, reviewable changes; keep PR size manageable for easier verification.

## Deployment & Observability Notes
- Observability is currently limited to the static site; add targeted error-monitoring if client-side scripting is introduced.
- Coordinate asset or layout changes with `npm run build` to catch regressions before deploying via `npm run deploy`.
