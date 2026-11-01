# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-03-05 - [Aria-Label Fallback & Keyboard Focus Rings on ActionButton]
**Learning:** In design systems where the global focus-visible outline is disabled (e.g., `:focus-visible { outline: none; }` in `base.css`), interactive custom controls like `ActionButton` must supply their own robust, visible focus indicators (such as `focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none`) to preserve full keyboard navigability. Additionally, to avoid missing accessibility attributes on icon-only buttons across the app, `ActionButton` can automatically derive a fallback `aria-label` from string-based `tooltip` props when an explicit `aria-label` is not provided.
**Action:** Ensure reusable icon button components provide automatic fallback accessible names from tooltips and include explicit focus-visible ring styles.
