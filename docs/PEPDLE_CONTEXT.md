# Pepdle Project Context

## What Pepdle is
Pepdle is a peptide-sequencing educational game inspired by Wordle-style deduction.

It has two modes:

### Practice
Practice is the learning and teaching mode. It should help learners understand sequencing evidence while letting educators quickly move between examples, reveal selected clues, and control pacing.

### Classic
Classic is intended as the main deduction game. The player begins with limited information and unlocks sequencing evidence through guesses.

The modes share a visual language, but should remain distinct experiences.

## Design philosophy
Pepdle has moved from a simple utility-like interface toward a more mature dark UI.

Current principles:
- restrained rather than flashy,
- readable rather than decorative,
- semantically meaningful color,
- animation that communicates state,
- compact controls with clear hierarchy,
- gentle polish instead of arcade-like excess.

A useful rule of thumb:
> Color and motion should explain something.

## Practice mode history and direction

### Input row
The input row is the central visual and interaction surface. It communicates:
- sequence,
- repeated residues,
- cleavage positions,
- enzyme labels,
- N-Terminus,
- C-Terminus,
- sequence state.

Older bond-rail styling was deliberately removed.

Preferred cleavage design:
- tall narrow lines,
- enzyme pills alternating above/below,
- terminal labels at the ends.

Long sequences intentionally remain compact and relatively fixed-looking. A previous responsive redesign that resembled an older relic layout was rejected.

### Input behavior
Current accepted behavior:
- residue entries normalize to standard capitalization,
- a fully valid row submits when Enter is pressed,
- incomplete Enter behavior should guide the user to the first incomplete/invalid cell,
- Enter should not force the player through cells once the row is complete.

### Submission controls
Submit Guess was visually matured in a mini-patch:
- calmer fill/border,
- stronger hover/press states,
- remains primary.

New Sequence was kept because it is valuable for teaching. An educator may want:
1. generate sequence,
2. discuss,
3. generate another,
4. repeat.

It remains accessible but visually secondary and uses a refresh-style icon.

### Hint system
The old hint area exposed multiple controls directly.

Current direction:
- one light-bulb control,
- clicking opens a compact hint panel,
- main action gives the **next progressive hint**.

Progression:
1. N-Terminus
2. cleavage evidence
3. C-Terminus

Skip already-known stages.

A secondary **Choose a hint** path preserves manual teaching controls:
- N-Terminus,
- cut site / cleavage evidence,
- C-Terminus.

Reveal Answer stays separate because it ends the puzzle rather than merely assisting.

### Hint behavior
The bulb acts like a contextual helper, not decorative animation.

It may react when:
- user is inactive,
- a wrong guess is submitted,
- a new hint becomes relevant,
- a hint is used.

Keep reactions subtle:
- glow,
- tiny lift,
- small tilt,
- restrained flare.

The bulb may visually dim as hints are consumed.

## Classic mode
Classic is limited-attempt deduction.

Evidence progression:
1. enzyme 1
2. enzyme 2
3. N-Terminus
4. cleavage-site result
5. C-Terminus

Classic does not expose manual Practice hints.

Residue pool is integrated into the main evidence card.

Classic fragment tracking updates based on submitted guesses, not unsent input.

Earned annotations persist for the round.

## Anti-free-win generation
Puzzle generation includes safeguards so evidence does not trivially reveal the answer.

Intent:
- displayed fragments must not simply concatenate into the secret,
- two-fragment cases should avoid canonical/free-answer ordering,
- opening enzyme must genuinely cut,
- prefer richer fragment sets,
- avoid pathological identical-fragment cases,
- clues remain scientifically truthful,
- display order may be manipulated, not the evidence itself.

Do not weaken these safeguards casually.

## Residue pool
The residue pool is an evidence surface.

Current behavior:
- available residues shown as chips,
- used/accounted residues change visually,
- repeated residues preserve repeat information,
- treatment is restrained.

Planned:
- unused/available residues may gently react during long guesses,
- motion should be subtle,
- this borrows the idea of attention guidance, not a Candy Crush aesthetic.

Potential behaviors:
- light pulse,
- tiny movement,
- controlled stagger,
- contextual idle reaction.

Not finalized yet.

## Custom difficulty
Presets:
- Easy
- Normal
- Hard
- Expert
- Custom

Custom exposes sequence length, enzyme count, fragment mode, and repeat settings.

Planned improvements:
- make Custom collapsible,
- mature the layout,
- reduce visual heaviness,
- slightly reduce control sizes if useful,
- improve hierarchy,
- make the main evidence/problem area respond more immediately where appropriate.

## Terminus feedback
Semantic colors:
- N-Terminus `#5fc4d6`
- C-Terminus `#d9818f`

Planned:
- termini should receive feedback animation comparable in quality to cleavage markers,
- but remain semantically distinct from enzyme cuts.

## Built-in residue keyboard
Tentative but important enough to prototype later.

Concept:
- on-screen residue keyboard,
- three-letter code primary,
- single-letter code superscript,
- optional swap where single-letter becomes primary and three-letter becomes secondary.

Open questions:
- replace typing or complement it,
- primarily for mobile/accessibility,
- whether it fits without crowding the input row.

Do not commit to it without design discussion.

## Motion system

### Existing motion
Pepdle uses:
- mode-entry settle,
- screen transitions,
- tile feedback reveal,
- invalid-input shake,
- residue-accounted pulse,
- cleavage-line draw-in,
- enzyme-label fade,
- terminus-label reveal.

### New Sequence and evidence refresh
A recent mini-patch added:
- refresh icon rotation,
- evidence/table replacement animation.

Earlier attempts replayed inconsistently.

The reliable fix is architectural:

#### Wrong approach
Starting pose and transition were enabled together, then quickly reversed, so the element barely moved.

#### Current approach
Two explicit states:

1. **Prepare**
   - transitions disabled,
   - element placed immediately at faded/lowered starting pose.

2. **Animate**
   - force browser to commit the start state,
   - enable transitions,
   - settle to final pose.

This works consistently in Chromium and Firefox.

The current mini-patch motion is acceptable but not considered final; revisit later.

## Visual language

### Core palette
- Background `#1b1f27`
- Main card/tile `#2a2f3a`
- Secondary chip `#343b48`
- Border about `#46505f`
- Text `#eef1f5`
- Secondary text `#9aa3b2`
- Classic / Trypsin `#6fa8ff`

### Enzymes
- Trypsin `#6fa8ff`
- Chymotrypsin `#c08bff`
- CNBr `#f2b35f`
- Elastase `#59c8b3`

### Termini
- N-Terminus `#5fc4d6`
- C-Terminus `#d9818f`

### Repeat colors
Representative palette:
- `#C89B4A`
- `#7EA35A`
- `#7D8FC7`
- `#9B7AC0`
- `#A8845C`
- `#8C6E96`

Repeat colors intentionally avoid terminal colors.

Used residue chips use a steel/slate-blue treatment rather than strikethrough.

Wordle green/yellow/gray retain their semantic meanings.

## Startup and menu
Pepdle uses a one-time fake loading experience per page session.

After initial load:
- menu-to-mode transitions stay subtle,
- returning to menu should not replay the loader.

Mode accent split:
- Classic blue,
- Practice teal.

The menu includes a banner image and descriptive footer.

## Loader personality
Pepdle includes biochemistry trivia plus intentionally silly creator notes.

The tone can be playful without harming usability.

Trivia may use a “Did you know?” framing; creator notes should remain visually distinct from factual trivia.

## Social preview / banner
Current banner asset:
- `pepdle-social-banner.png`

Open Graph and Twitter metadata are present.

A previous automated binary upload corrupted the banner. Important lesson:
- verify binary assets,
- do not assume a successful commit means a valid image,
- reuse a known-valid blob where possible,
- manual upload may be safer for large images.

Discord preview works correctly after restoring the valid asset. Messenger may cache previews inconsistently.

## Repository and development workflow
Repository:
- `sampleverse/Pepdle`
- branch `main`

Historically GitHub Pages served root `index.html`.

Local development now uses:
- VS Code connected to WSL,
- Ubuntu under WSL2,
- Node/npm installed inside WSL,
- the WSL-native clone at `/home/sampleverse/projects/Pepdle`,
- Wrangler / Cloudflare tooling,
- `npm run dev` for local development,
- local preview at `http://localhost:8787`.

GitHub remains the shared source of truth between ChatGPT, Codex, and local development.

Avoid maintaining competing Windows and WSL copies of the project as active working copies.

For meaningful UI/gameplay changes, the normal validation flow is now:
1. edit the current source in the WSL repo,
2. run/keep `npm run dev` active,
3. test through the local Wrangler preview,
4. review and refine,
5. commit/push only after explicit approval.

A separate copied preview/test file is no longer the default workflow and should only be created when explicitly requested.

## Current architecture
The app is still largely contained in `index.html`.

A future refactor may split into:
- `index.html`
- `styles.css`
- `game.js`
- `classic.js`
- `practice.js`
- `puzzle-generator.js`

Do this when it improves maintainability, not simply because frameworks exist.

React/Vue are not required.

Backend only becomes necessary for things like:
- accounts,
- cloud saves,
- leaderboards,
- classroom dashboards,
- shared custom puzzles,
- multiplayer,
- authoritative scores,
- centralized analytics.

## Patch agenda

### Main
1. Enter submits a complete input row.
2. Mature Submit Guess and preserve educator-friendly New Sequence.
3. Progressive + manual hint system.
4. Residue-pool feedback during long guesses.
5. Collapsible/more mature Custom difficulty.
6. Stronger terminal feedback animation.
7. Decide on built-in residue keyboard.
8. Reduce Practice control noise overall.

Items 1–3 have received a mini-patch implementation.

### Optional / later
- stronger font identity,
- more responsive Custom-setting feedback,
- consider collapsing unused Classic rows after final answer,
- reconsider Classic residue-pool placement,
- mobile UI optimization,
- revisit evidence refresh motion.

## Collaboration workflow
Preferred workflow:
1. discuss problem,
2. recommend direction,
3. explain tradeoffs,
4. get approval,
5. implement locally in the WSL development repo,
6. validate through the local Wrangler dev server,
7. refine if needed,
8. commit/push only after explicit approval.

“Proceed,” “go ahead,” “yes please,” and similar wording count as approval to implement.

Do not push just because local validation succeeded.

A separate copied preview/test artifact is only needed when explicitly requested.

## Rejected or intentionally avoided directions
Preserve these unless the user revisits them:
- no bond rails,
- do not make long sequences resemble the old relic layout,
- do not expose every hint control as a loud permanent toolbar,
- do not remove New Sequence solely to reduce clutter,
- do not make Reveal Answer part of the normal hint ladder,
- do not use decorative color without meaning,
- do not overanimate everything,
- do not introduce a framework only for modernization,
- do not silently mix unrelated cleanup work into a focused patch.

## Definition of done
A patch is not done just because code was edited.

Before calling it done:
- confirm intended behavior,
- syntax-check JavaScript where applicable,
- do not claim browser testing unless it happened,
- preserve unrelated working behavior,
- validate through the local dev server when appropriate,
- push only after explicit approval.

For Pepdle UI work, consistency with the rest of the game matters as much as the feature itself.
