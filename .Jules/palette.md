## 2025-05-14 - [Titlebar Accessibility & UX]
**Learning:** In containers with `overflow: hidden` (like the custom Titlebar), Radix tooltips will be clipped unless wrapped in `TooltipPortal`. Additionally, since global `outline` is disabled, interactive elements must explicitly provide `focus-visible` styles for keyboard navigation.
**Action:** Always use `TooltipPortal` for tooltips in layout-constrained areas and ensure `focus-visible` rings are implemented for all buttons.
