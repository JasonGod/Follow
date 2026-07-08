## 2026-07-08 - [Titlebar Accessibility & Tooltips]
**Learning:** In Electron apps with custom titlebars, icon-only window controls often lack semantic labels and visual cues. Using `TooltipPortal` is essential when the parent container has `overflow: hidden` to prevent tooltips from being clipped. Additionally, `onFocusCapture={stopPropagation}` is necessary to prevent focus events from interfering with Radix Tooltip behavior.
**Action:** Always provide localized `aria-label` for window controls and use `TooltipPortal` for tooltips in restricted-height containers like titlebars.
