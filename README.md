# KnowledgeHub — refactor notes

The original app was one ~1,300-line file. This splits it into a normal
React project structure and fixes a few real bugs along the way.

## Structure

```
src/
  types.ts                 shared Dept/Page/Question types + ALL_DEPARTMENTS list
  data/
    departments.ts         DEPT_META + RESOURCES (was two separate,
                            slightly-mismatched objects)
    questions.ts            the quiz bank
  components/
    Tag.tsx
    NavBar.tsx
    InteractiveCard.tsx     one card component used everywhere instead of
                            copy-pasted onMouseEnter/onMouseLeave pairs
  pages/
    HomePage.tsx
    Dashboard.tsx
    DepartmentsPage.tsx
    DepartmentPage.tsx
    ResourcesPage.tsx
    PracticePage.tsx
    PracticeQuestion.tsx
  styles/globals.css        CSS variables + the .card-interactive hover rule
  App.tsx                   routing only — no page markup lives here anymore
tailwind.config.js
```

## Bugs fixed

- **Key mismatch**: `DEPT_META` and `QUESTIONS` used the key
  `"Great To Be An LCP"` while the `Dept` type (and the departments list)
  used `"Its Great To Be An LCP"`. That department would have been
  `undefined` at runtime. Now there's one source of truth
  (`ALL_DEPARTMENTS` in `types.ts`) and every data object is typed against
  it, so TypeScript catches this class of bug at compile time.
- **True/false grading**: the old check
  `opt === String(q.answer) || opt === (q.answer === true ? "True" : "False")`
  was redundant and fragile. Replaced with a single `isOptionCorrect()`
  helper used for both `tf` and `mcq` questions.
- **Leftover pasted text**: earlier edits had left large chunks of
  duplicated prompt/comment text sitting inside JSX string literals in a
  few components. Removed.

## Design changes

- Every hover effect that was previously two inline JS handlers
  (`onMouseEnter`/`onMouseLeave` setting `style.borderColor` and
  `style.background`) is now a single CSS rule
  (`.card-interactive:hover` in `globals.css`). Pass an `accent` prop to
  `InteractiveCard` to theme an individual card's hover color — no
  JavaScript required.
- Colors that repeated everywhere (`#141720`, `#252B3B`, `#A8B0CC`, …) are
  now Tailwind tokens (`bg-surface`, `border-border`, `text-muted`, …)
  defined once in `tailwind.config.js`, instead of being retyped as raw
  hex in dozens of `style={{ }}` props.
- On the home page, the logo and headline now sit in a shared
  fixed-width column (`BRAND_BLOCK_WIDTH` in `HomePage.tsx`), so the
  title wraps to the same width as the logo above it instead of running
  wider — this was a specific request buried in the old file's comments.
- Added `Fraunces` as a display serif for headings via `globals.css`
  (paired with `Inter` for body text) for a bit more visual character
  than an all-Inter page.

## What's still a placeholder

- `RESOURCES` in `data/departments.ts` points every department at
  `drive.google.com` / `sheets.google.com`. Swap in your real shared
  Drive and Sheets links.
- The AIESEC logo import (`src/assets/logos/Blue-AIESEC-Logo.png`) is
  referenced but not included here — drop your existing asset into
  `src/assets/logos`.
