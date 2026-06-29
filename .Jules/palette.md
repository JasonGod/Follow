## 2024-06-29 - [Titlebar Accessibility & Tooltips]
**Learning:** When adding tooltips to components within containers that have `overflow: hidden` (such as the app Titlebar), use `TooltipPortal` to ensure tooltips are not clipped and render correctly outside the parent boundary. Additionally, for interactive elements at the very edge of the window, `focus-visible:ring-inset` ensures the focus indicator remains fully visible.
**Action:** Always use `TooltipPortal` for tooltips in restricted containers and prefer inset rings for edge-of-screen interactive elements.
