# [Play Pepdle Here :3](https://sampleverse.github.io/Pepdle/)


Biochem prelims so bad i had to go through several DNA sequencing practice sets- A funny thought came to me "What if i just made Polypeptide Sequencing into Wordle?" and so here we are with Pepdle (also i just vibecoding the living hell out of this silly program please don't hurt me)

## About

The goal of Pepdle is to make peptide sequencing practice more interactive and approachable.

Players reconstruct an unknown peptide sequence using information from different cleavage methods and fragment patterns, with optional hints available in Practice Mode.


## Latest Update

### Patch: social preview & landing hero
- Added a Pepdle social/link-preview banner for shared links.
- Added Open Graph and Twitter/X card metadata.
- Added the banner as a visible landing-page hero above the mode cards.
- Added social preview title, description, and canonical page URL metadata.


### Patch: Classic re-entry & loader polish
- Fixed the shared residue pool disappearing after leaving and re-entering Pepdle Classic.
- Adjusted residue-pool lifecycle timing so the Classic exit animation stays visually intact.
- Restored live amino-acid input casing to three-letter formatting such as `Arg`, `Gly`, and `Met`.
- Expanded the loading-screen dialogue bank with additional creator quips.
- Updated the landing-page creator note to credit Sampleverse (J.Ra).


### Mini update: sequencing clarity & puzzle logic
- Refined the shared Practice/Classic input-row annotations with taller cleavage markers and cleaner enzyme-label spacing.
- Removed the experimental bond rails for a cleaner final-sequence row.
- Kept the current fixed long-sequence layout for 10–12 residue peptides.
- Added anti-free-win fragment ordering so displayed enzyme fragments do not accidentally reproduce the full peptide in sequence order.
- Opening enzyme selection now avoids trivial no-cut clues and prefers more informative fragment sets when available.
- Practice and Pepdle Classic now share the same updated sequencing-row behavior and clue-generation safeguards.


### Classic Mode overhaul
- Classic now begins with the residue composition as baseline evidence.
- Sequencing evidence unlocks progressively after failed guesses.
- Newly revealed enzyme, terminus, and cut-site evidence uses subtle reveal animations.
- Fragment evidence in Classic updates only after submitted guesses, preventing free live probing.
- Earned N-terminus, C-terminus, and cleavage-site annotations persist on the working row.
- Classic now uses the same responsive residue accounting system as Practice.
- The Classic residue pool is integrated into the main evidence panel for a cleaner layout.
- Board-to-input spacing and annotated-row spacing were refined for consistency.

### Startup and menu polish
- Added a one-time Pepdle startup splash.
- Startup duration varies between roughly 3–5 seconds.
- Added randomized biochemistry trivia and creator messages.
- Added a staged progress animation and refined desktop/mobile loading layout.
- Reworked the landing menu into a cohesive card-based layout.
- Mode cards now use dark surfaces with blue/teal accent treatment instead of large saturated fills.
- Added subtle menu and screen transitions.

### Practice/UI refinements
- Long-sequence clue and residue layouts were widened and compacted for 10–12 residues.
- 12-residue pools now fit cleanly in a single row where space permits.
- Hint controls and main action buttons were consolidated and compacted.
- Vertical spacing across settings, clue cards, residue pools, ghost rows, and input rows was normalized.
- Added a small creator/WIP note to the landing screen.


## Current Features

- Pepdle Classic mode
- Practice Mode with adjustable difficulty
- Multiple cleavage enzymes
- Ordered and composition-only fragment clues
- N-terminus hints
- Progressive cut-site hints
- Residue pool tracking
- Duplicate residue highlighting
- Responsive sequence layouts
- Enzyme color coding

## Modes

### Pepdle Classic
A more game-like mode where additional information is revealed as you make guesses.

### Practice Mode
A learning-focused mode with customizable sequence length, enzyme count, fragment type, residue repeats, and guided hints.

## How to Play

1. Study the fragment clues.
2. Use the available cleavage information to infer possible residue positions.
3. Enter your proposed amino-acid sequence.
4. Submit your guess.
5. Use the feedback and optional hints to refine your answer.

## Project Status

Pepdle is currently in active development.

The interface, teaching tools, and sequencing mechanics are still being refined based on testing and feedback.

## Purpose

Pepdle was created primarily as an academic learning tool, but it is also intended to be freely usable for general educational purposes.

## License

Copyright © 2026 John Rec. All rights reserved.

Pepdle is publicly available for viewing and educational use, but permission is not granted to copy, modify, redistribute, republish, sublicense, sell, or create derivative works from the source code without prior written permission.

See the `LICENSE` file for the full terms.
