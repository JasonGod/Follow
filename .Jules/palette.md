## 2025-03-09 - Electron Titlebar ARIA & Tooltip Accessibility
**Learning:** Container wrappers with static `aria-hidden` unconditionally hide nested interactive controls from screen readers, even when those controls are rendered conditionally for platform desktop environments (such as Windows Electron titlebars).
**Action:** Dynamically set `aria-hidden={!windowsElectron}` on titlebar containers and ensure icon-only window controls have localized `aria-label` attributes, Radix tooltips via `TooltipPortal`, and inset focus indicators (`focus-visible:ring-inset`).
