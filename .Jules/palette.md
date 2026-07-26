# Palette's Journal

## 2025-02-13 - ActionButton Accessibility and Focus Improvements
**Learning:** In applications where the default browser focus outlines are disabled globally (e.g. `:focus-visible { outline: none; }` in `base.css`), custom interactive components like `ActionButton` (which is typically icon-only) fail to show a visual indicator during keyboard navigation. Additionally, they often lack semantic `aria-label` attributes unless explicitly passed. Automatically falling back to the string-based `tooltip` prop as an `aria-label` and adding `focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none` ensures great keyboard navigation and screen reader accessibility out-of-the-box.
**Action:** Always provide standard focus indicators on interactive controls and ensure custom wrapper components fall back to informative props (like tooltips/labels) for their ARIA labels.
