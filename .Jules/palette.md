# Palette's Journal - Critical UX/Accessibility Learnings

This journal documents critical UX and accessibility learnings discovered during development.

## 2025-05-15 - Initial Journal Creation
**Learning:** Initializing the journal for the Palette agent to track project-specific UX patterns and constraints.
**Action:** Use this file to record significant UX discoveries and patterns.

## 2025-05-15 - Window Control Accessibility and UX
**Learning:** Window control buttons in the Titlebar require explicit localized ARIA labels and tooltips for better accessibility and UX. Using `TooltipPortal` is necessary when the parent container has `overflow: hidden`. Improved focus visibility with `focus-visible:ring-inset` is crucial as buttons are at the edge. Specify namespace in `t()` to avoid type errors.
**Action:** Always add ARIA labels to icon-only buttons, use tooltips with portals for edge cases, and ensure focus styles are visible and contained.
