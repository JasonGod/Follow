# Palette's UX & Accessibility Journal

## 2025-02-17 - Restoring Keyboard Navigability and Screen-Reader Clarity to ActionButton
**Learning:** In projects that globally disable default browser focus indicators (`:focus-visible { outline: none; }`) for design consistency, keyboard navigability is severely compromised. Users who rely on tab navigation are left without any visual feedback on focus state. Additionally, custom icon-only components (like `ActionButton` wrapping Radix tooltips) often lack explicit `aria-label` attributes, rendering them silent or cryptic to screen readers.
**Action:** Always ensure custom icon-only button elements are decorated with standard focus indicators (e.g., `focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none`) and implement an automatic fallback mechanism where string-based tooltips serve as `aria-label` attributes if no explicit labels are provided.
