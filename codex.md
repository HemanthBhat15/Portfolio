# Stitch Design System Metrics

Source project: Complete Personal Portfolio (`projects/14524958693403933258`)

Use these layout and spacing parameters when building or adjusting UI for this app:

```yaml
spacingScale: 2
spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-gap-lg: 8rem
  section-gap-md: 4rem
  element-gap: 1rem
roundness: ROUND_EIGHT
```

Layout guidance from the Stitch design system:

- Use a fixed-grid layout for large screens and center page content inside a `1280px` max-width container.
- Base spacing on an 8px / `0.5rem` rhythm.
- Use `8rem` for large section gaps and `4rem` for medium section gaps.
- Use `1.5rem` page gutters; on mobile, margins should shrink to `24px`.
- Collapse the desktop grid to a single column on mobile.
- Keep repeated inline groups, such as tech stack tags, in a fluid wrapping layout with a consistent `1rem` gap.
- Use `8px` rounded corners for structural UI such as cards and inputs.
