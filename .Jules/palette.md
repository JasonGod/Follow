# Palette's Journal

## 2024-11-20 - Custom Windows Titlebar Layout & Pointer Events
**Learning:** In custom Electron titlebars, the container must use `pointer-events-auto` and have a defined `left` anchor corresponding to the sidebar/feed column width (e.g., `left: ${feedColWidth}px`) because the global drag region in the main layout uses `pointer-events-none` on Windows to pass clicks through to titlebar buttons.
**Action:** Always ensure any interactive overlay in the drag region has proper positioning and pointer-events enabled, specifically setting `pointer-events-auto` and matching boundaries.

## 2024-11-20 - Standard Windows Titlebar Localization (zh-CN)
**Learning:** Standard Windows localized terms for Titlebar window actions in Simplified Chinese (zh-CN) are: 最小化 (Minimize), 最大化 (Maximize), and 向下还原 (Restore).
**Action:** Use these standard translations for window controls to match native operating system experiences instead of general translations.

## 2024-11-20 - Titlebar Focus Ring and Tooltip Adjustments
**Learning:** Window control buttons in a custom Titlebar are often located at the very edge of the screen, causing normal focus outlines to clip or look visual unappealing. They also trigger Radix tooltip focus/blur issues when they capture focus.
**Action:** Use `focus-visible:ring-inset` for edge-positioned buttons and `onFocusCapture={stopPropagation}` on interactive elements to prevent focus capturing from interfering with Radix tooltips.

## 2024-11-20 - Titlebar Close Button Contrast
**Learning:** The window close button typically gets a red background on hover. If the close icon is styled with gray colors, it may lose contrast.
**Action:** Specifically style the close button with `hover:bg-red-500 hover:!text-white` to ensure the Close ("X") icon has high contrast and is clearly visible on the red background.
