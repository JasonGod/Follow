## 2025-02-12 - Titlebar Accessibility and Tooltips

**Learning:** Custom window controls in Electron apps often miss basic accessibility features like localized ARIA labels and visual tooltips, making them less intuitive for screen reader users and new users. Additionally, global focus outlines are often disabled, requiring manual implementation of focus indicators.
**Action:** Implement localized `aria-label` and `Tooltip` for all icon-only window controls. Use `focus-visible:ring-inset` for buttons at the screen edge to ensure focus indicators remain visible and contained within the component.
