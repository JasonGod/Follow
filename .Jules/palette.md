## 2024-06-22 - Titlebar and ActionButton Accessibility

**Learning:** When building custom Electron titlebars, window control buttons at the screen edges need `focus-visible:ring-inset` to keep focus rings visible. Radix tooltips in overflow-hidden containers like the titlebar must use `TooltipPortal` to avoid clipping. Generic icon-only button components like `ActionButton` should automatically derive `aria-label` from their `tooltip` prop to ensure accessibility by default.

**Action:** Use `TooltipPortal` for tooltips in titlebars. Apply `focus-visible:ring-inset` for buttons at window edges. Implement automatic `aria-label` derivation from tooltips in shared button components.
