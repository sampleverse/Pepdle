# AGENTS.md

## Project
Pepdle is a peptide-sequencing learning game with two modes:
- **Practice**: guided learning and teaching.
- **Classic**: deduction under limited attempts with progressively unlocked sequencing evidence.

The app is still primarily HTML/CSS/JavaScript, with most gameplay code historically living in `index.html`.

## Source of truth
Treat the repository on `main` as canonical.

Before changes:
1. Pull/fetch latest `main`.
2. Read this file.
3. Read `docs/PEPDLE_CONTEXT.md` when work affects UX, visuals, gameplay structure, architecture, or project history.

Do not assume an older local test file is newer than `main`.

## Working rules
- For meaningful UI/gameplay changes, edit the WSL development repo locally and validate through the local Wrangler dev server before committing or pushing. A separate copied preview/test file is only needed when explicitly requested.
- Do **not push to GitHub without explicit user approval**.
- Explain direction/tradeoffs before implementation unless the user has already said to proceed.
- Prefer cohesive, restrained polish over flashy effects.
- Preserve intentional differences between Practice and Classic.
- Do not casually restore removed/legacy UI.
- After JavaScript edits in `index.html`, extract `<script>` contents and run `node --check` on the extracted `.js`; do not run `node --check` directly on HTML.
- Only claim checks that were actually run.

## UX principles
- Dark, restrained interface.
- Color should be semantic.
- Motion should communicate state.
- Reuse Pepdle's existing motion language.
- Avoid dramatic bounce, blur, or large movement unless explicitly requested.
- Respect `prefers-reduced-motion`.
- Keep the input row central and readable.

## Practice mode
Current direction:
- Full valid input row + **Enter** submits immediately.
- Submit Guess is the primary action.
- New Sequence remains available for educator/demo workflows but is visually secondary.
- Hints use a light-bulb control.
- Default hint behavior is progressive.
- Manual hint selection remains available for educators.
- Reveal Answer remains separate as a last-resort action.

Progressive hint order:
1. N-Terminus
2. Cleavage evidence / cut sites
3. C-Terminus

Skip stages already known.

The hint bulb may gently react after inactivity, a wrong guess, or when a new hint is relevant. Keep this contextual rather than gimmicky.

## Classic mode
Classic is the main deduction mode.

Evidence unlock progression:
1. Enzyme 1
2. Enzyme 2
3. N-Terminus
4. Cleavage-site result
5. C-Terminus

Classic has no manual Practice-style hints.

Residue pool and evidence are integrated into the main evidence card.

## Input row
Current settled direction:
- No bond rails.
- Cleavage markers are tall, narrow lines.
- Enzyme pills alternate top/bottom.
- N/C terminal pills appear at the ends.
- Repeat superscripts remain visible.
- Practice and Classic share the input-row visual language.
- Long sequences use a compact/fixed-ish layout by design.

Do not reintroduce responsive behavior that makes long sequences resemble the older relic layout without discussing it first.

## Colors
Core:
- Background `#1b1f27`
- Tile/card `#2a2f3a`
- Chip `#343b48`
- Border around `#46505f`
- Text `#eef1f5`
- Secondary text `#9aa3b2`
- Classic / Trypsin accent `#6fa8ff`

Enzymes:
- Chymotrypsin `#c08bff`
- CNBr `#f2b35f`
- Elastase `#59c8b3`

Termini:
- N-Terminus `#5fc4d6`
- C-Terminus `#d9818f`

Wordle green/yellow/gray stay unchanged.

## Animation
Existing motion includes:
- mode-entry settle,
- tile feedback reveal,
- restrained invalid-row shake,
- residue accounted pulse,
- cleavage-line draw-in,
- terminus-label reveal.

New Sequence uses a restrained refresh spin.

Sequence/evidence refresh uses explicit **prepare -> animate** states so repeated transitions replay consistently in Chromium and Firefox. Do not collapse this back into a transition that starts and reverses almost immediately. Cleanup timers should remain cancelable so rapid refreshes do not interrupt newer transitions.

The current refresh motion is accepted as a mini-patch, but is not considered final.

## Current patch agenda
Remaining high-priority work:
- residue-pool idle/attention feedback during long guesses,
- collapsible and more mature Custom difficulty UI,
- stronger termini feedback animations,
- evaluate a built-in residue keyboard,
- further declutter Practice controls,
- revisit refresh/evidence motion later.

Optional:
- stronger font identity,
- richer slider/custom-setting feedback,
- possibly collapse unused Classic rows after the final answer,
- reconsider Classic residue-pool placement,
- mobile UI optimization,
- split the single-file app into multiple files when useful.

## Architecture
Vanilla HTML/CSS/JS is still sufficient.

A future split may look like:
- `index.html`
- `styles.css`
- `game.js`
- `classic.js`
- `practice.js`
- `puzzle-generator.js`

Do not migrate to React/Vue solely for modernization.

A backend is justified only for shared/persistent services like accounts, cloud saves, leaderboards, classroom dashboards, multiplayer, shared puzzles, or authoritative scores.

## Repo / deployment
Repository:
- `sampleverse/Pepdle`
- default branch `main`

Historically deployed from root via GitHub Pages.

There may now be local tooling such as:
- `package.json`
- `package-lock.json`
- `node_modules`
- `dist`
- `scripts`
- Wrangler / Cloudflare files

Do not remove or reorganize those until their purpose is understood.

Large binary uploads through automation have previously corrupted assets. Prefer known-valid blobs or manual upload for large images when necessary.

## Collaboration style
The user prefers compact, energetic collaboration and clear recommendations before meaningful changes.

If the user says “proceed,” “go ahead,” “yes please,” or equivalent, that counts as approval to implement.

When in doubt, preserve current behavior and ask before structural changes.
