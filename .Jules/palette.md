## 2025-05-15 - [Accessible Windows Titlebar Controls]
**Learning:** In custom Electron titlebars, window control buttons are often icon-only and lack built-in accessibility features. Using Radix Tooltips with `TooltipPortal` ensures they aren't clipped by `overflow: hidden` containers, and `onFocusCapture={stopPropagation}` prevents focus issues.
**Action:** Always provide `aria-label` and `Tooltip` for icon-only controls, and use `focus-visible:ring-inset` for buttons at the window edge.
