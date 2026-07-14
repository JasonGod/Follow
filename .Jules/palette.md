## 2025-05-14 - [Enhancing Windows Titlebar Accessibility]
**Learning:** Custom Electron titlebars often lack standard accessibility features. Interactive elements like window controls must have explicit ARIA labels and focus indicators, and the container should not be hidden from screen readers on the target platform.
**Action:** When implementing custom titlebars, ensure `aria-hidden` reflects the actual presence of interactive content and use `TooltipPortal` for tooltips within `overflow: hidden` titlebar containers.
