## 2025-05-14 - Accessible Custom Titlebar Controls
**Learning:** Custom titlebars in Electron apps often lack standard accessibility features like tooltips and ARIA labels. When implementing them, Radix Tooltips need `TooltipPortal` to avoid being clipped by `overflow: hidden` containers, and `focus-visible:ring-inset` is necessary for buttons at the window edge to keep the focus indicator visible.
**Action:** Always provide ARIA labels and tooltips for icon-only window controls. Use `onFocusCapture={stopPropagation}` to resolve focus issues with Radix Tooltips in interactive regions.
