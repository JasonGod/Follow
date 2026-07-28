# Palette's Journal

## 2025-02-17 - Resolving Radix Tooltip Focus and Keyboard Outlines
**Learning:** In this application, standard Radix tooltips can exhibit focus issues or trigger on focus capture unexpectedly. To address this, interactive trigger elements should use `onFocusCapture={stopPropagation}` (imported from `~/lib/dom`). Additionally, the global CSS (`apps/renderer/src/styles/base.css`) disables the default focus outline (`:focus-visible { outline: none; }`), meaning interactive elements and buttons must explicitly provide their own visual focus indicators or motion scale effects when focused to ensure complete keyboard navigation accessibility.
**Action:** Always import `stopPropagation` from `~/lib/dom` and apply `onFocusCapture={stopPropagation}` to interactive components wrapped inside Radix Tooltips. Ensure focused states have custom visual styling or motion behaviors.
