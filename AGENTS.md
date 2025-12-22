# Repository Guidelines

## Project Structure & Module Organization
- `static/` is the site root for GitHub Pages and local previews. Add `index.html`, `styles.css`, and asset folders here.
- `runConfigurations/` stores editor/CI helper configs; keep them aligned with the supported scripts rather than introducing conflicting commands.
- `package.json` is retained for lightweight scripts and deployment; keep scripts aligned with the static build flow.

## Build, Test, and Development Commands
- `npm run dev` serves the static site from `static/` on port 3001 for local iteration.
- `npm run build` copies the static site into `build/` so deploys stay clean and deterministic.
- `npm run preview` serves the production-ready `build/` output on port 4173.
- `npm run deploy` builds and publishes `build/` to GitHub Pages via `gh-pages`.

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
