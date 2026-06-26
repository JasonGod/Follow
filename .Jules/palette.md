## 2025-05-14 - Tooltips and ARIA labels for custom Electron Titlebar
**Learning:** Custom Electron titlebars often omit accessibility features like ARIA labels and tooltips, making them difficult for screen reader and keyboard users. Using `TooltipPortal` is essential when the container has `overflow: hidden` to prevent tooltips from being clipped.
**Action:** Always add ARIA labels and Radix Tooltips (with Portal) to icon-only window controls in custom titlebars. Ensure `onFocusCapture={stopPropagation}` is used to prevent focus events from interfering with window drag logic.
