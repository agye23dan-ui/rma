# Recovery Mechanic Academy

A self-study PWA for the recovery mechanic trade: 12 modules, 239 explained questions, 44 diagrams, practical checklists, a glossary, a timed final exam and a certificate.

## Structure
- `content.js`: original modules, practicals and glossary.
- `m01.js` to `m12.js`: the enhanced content for each module (outcomes are in `std.js`). Each file holds notes, detailed sections, figures (`g`) and questions with explanations.
- `std.js`: learning outcomes, standards references and the standards page data.
- `extra.js`: extra practical checklists and glossary terms.
- `fig.js`: helper that wraps an SVG with a caption.
- `app.js`, `styles.css`, `sw.js`: the app, styles and offline cache.

## Question format
`[question, [options], index of correct option, explanation]`. Options are shuffled when shown.

## Maintaining
- After adding or renaming a `mNN.js` file run `python wire.py --bump`. It rewrites the script list in `index.html` and the offline file list in `sw.js`, and bumps the cache version.
- `node check.js` validates every module's questions (answer index, duplicates, explanations).

## Standards
The course is aligned to, not accredited by, the references on the in-app Standards page (ISO 45001, UK PAS 43, IMI IMIRR10 and others). No NVTI or COTVET occupational standard for Recovery Mechanic was found. Have NVTI or COTVET validate it before using it for formal certification, and have a working recovery practitioner review the safety content.
