## 2024-10-14 - Windows Titlebar Accessibility & UX
**Learning:** In custom Electron titlebars, interactive window controls (minimize, maximize, close) are often missed by screen readers if the container has `aria-hidden`. They also lack visual feedback for keyboard users since global focus outlines are often disabled.
**Action:** Use `aria-hidden={!windowsElectron}` on the titlebar container, add `aria-label` to icon buttons, and use `TooltipPortal` with `disableHoverableContent` for tooltips in overflow-hidden regions. Use `focus-visible:ring-inset` for buttons at window edges.
