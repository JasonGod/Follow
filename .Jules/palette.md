## 2024-05-15 - [Titlebar Accessibility and Tooltips]

**Learning:** Radix Tooltips inside containers with `overflow: hidden` (like the custom Windows Titlebar) will be clipped unless wrapped in a `TooltipPortal`. Additionally, icon-only window controls in Electron require explicit `aria-label` and `onFocusCapture={stopPropagation}` to work correctly with global drag regions and provide a good screen reader experience.

**Action:** Always use `TooltipPortal` for tooltips in layout-constrained components and ensure `aria-label` matches standard OS terminology (e.g., "Minimize", "Maximize", "Restore").
