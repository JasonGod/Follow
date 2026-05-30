## 2026-05-30 - ActionButton Accessibility and Focus States
**Learning:** Shared UI components like `ActionButton` that use tooltips should automatically provide `aria-label` for screen readers when the tooltip is a simple string. Additionally, since global focus outlines are disabled in this project (`:focus-visible { outline: none; }`), interactive components MUST provide their own visual focus indicators to remain keyboard accessible.
**Action:** Enhance `ActionButton` to derive `aria-label` from `tooltip` and add explicit `focus-visible` ring styles.
