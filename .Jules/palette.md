## 2026-07-06 - [Titlebar Accessibility and Micro-UX]
**Learning:** Custom Electron titlebars often lack basic accessibility features like ARIA labels and keyboard focus indicators. Additionally, when using Radix Tooltips inside a container with `overflow: hidden` (common for titlebars), the `TooltipPortal` component is essential to prevent tooltips from being clipped.
**Action:** Always provide `aria-label` to icon-only buttons. Use `TooltipPortal` for tooltips in constrained containers. Ensure focus indicators use `ring-inset` for buttons at the very edge of the window.
