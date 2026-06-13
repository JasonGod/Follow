# Palette's Journal

Critical UX and accessibility learnings for the Follow project.

## 2026-06-13 - [Accessible Windows Titlebar Controls]
**Learning:** In Electron apps on Windows with custom titlebars, window control buttons are often at the very edge of the screen and icon-only. They require explicit `aria-label` attributes, Radix tooltips (with `TooltipPortal` to avoid clipping), and `focus-visible:ring-inset` to ensure the focus indicator is visible and not clipped by the window boundary or parent container.
**Action:** Use `Tooltip` with `TooltipPortal`, add `aria-label`, and apply `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none` for all custom window control buttons.
