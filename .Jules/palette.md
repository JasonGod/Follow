## 2024-06-14 - Windows Titlebar Accessibility and Focus Patterns

**Learning:** Custom titlebars in Electron apps often overlook basic accessibility. Applying `aria-hidden` to the titlebar container (to pass clicks through to drag regions) completely hides window controls from screen readers. Additionally, when global focus outlines are disabled, buttons at the very edge of the window (like the Close button) need `focus-visible:ring-inset` to keep the focus indicator visible. Radix UI Tooltips within `overflow-hidden` titlebars require `TooltipPortal` to avoid being clipped.

**Action:** Ensure titlebar containers are accessible to screen readers by removing `aria-hidden`. Use `TooltipPortal` for any tooltips in the titlebar area. Apply `focus-visible:ring-inset` and `onFocusCapture={stopPropagation}` to window control buttons to ensure consistent keyboard navigation and focus visibility.
