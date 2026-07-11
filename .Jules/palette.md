## 2024-10-24 - [Titlebar Accessibility and Tooltips]
**Learning:** In custom Electron titlebars with `overflow: hidden`, Radix Tooltips will be clipped unless wrapped in a `TooltipPortal`. Additionally, interactive elements in the titlebar should use `onFocusCapture={stopPropagation}` to manage focus behavior correctly with tooltips.
**Action:** Always use `TooltipPortal` and `onFocusCapture={stopPropagation}` when adding tooltips to the Titlebar or other restricted-overflow containers.

## 2024-10-24 - [Focus Indicators]
**Learning:** The project's global CSS disables default focus outlines. Custom interactive components must provide their own focus indicators.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none` (optionally with `focus-visible:ring-inset`) for a consistent focus experience.
