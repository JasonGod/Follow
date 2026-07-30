## 2026-05-30 - Enhanced Copy Button Accessibility and Contextual Tooltips

**Learning:** Reusable icon-only buttons like code block CopyButtons are frequently overlooked during accessibility sweeps, leaving them without focus indicators, proper ARIA labels, or screen reader feedback. Wrapping these interactive controls in a standardized Radix Tooltip with dynamically shifting states (e.g., "Copy" changing to "Copied to clipboard") dramatically improves screen reader visibility and keyboard navigability while providing immediate, pleasant visual feedback for mouse-driven interactions.

**Action:** When designing or refactoring any icon-only button (such as delete, edit, or copy/share actions), always ensure that:
1. It is wrapped in a keyboard-accessible standard Tooltip component using TooltipPortal.
2. It has an explicit dynamic `aria-label` matching the current tooltip state.
3. The button supports a customized focus-visible outline or ring (`focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none`) since the app disables default global outlines.
4. Radix tooltip trigger elements stop focus capture propagation using `onFocusCapture={stopPropagation}` to prevent focus/tooltip state conflicts.
