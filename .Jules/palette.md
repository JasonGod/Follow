# Palette's Journal - Critical Learnings Only

## 2023-10-27 - Custom Window Control Enhancements

**Learning:** In Electron custom titlebars, window controls are often left as plain buttons with icons. Since they lack standard native browser/OS tooltips and focus rings, they become highly inaccessible. Adding localized Radix Tooltips with `TooltipPortal` ensures that the tooltips are not clipped by the Titlebar's overflow-hidden styling. Additionally, using `onFocusCapture={stopPropagation}` prevents Radix Tooltip stuck/focus state bugs on click, and inset focus indicators (`focus-visible:ring-inset`) prevent indicators from being clipped at window borders.
**Action:** When designing or refactoring custom window/app titlebars or controls nested in high-impact/restricted overflow containers, wrap buttons with Radix Tooltips inside a portal, provide explicit ARIA labels, intercept focus propagation on click, and use inset ring styles for keyboard focus boundaries.
