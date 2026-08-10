# Palette's Journal - Critical UX & Accessibility Learnings

This journal documents critical, reusable UX and accessibility insights discovered during the development of this application.

## 2025-01-24 - Enhancing Micro-interactions: Accessible Copy Feedback
**Learning:** Tooltip-based feedback on copy buttons is far more accessible and reassuring than simple icon-only transitions. Icon-only changes are invisible to screen readers, and screen readers should be informed of state changes through proper ARIA labels. By introducing Radix Tooltips wrapped with standard localization, the copy experience is improved for both sighted and screen-reader users alike.
**Action:** Always wrap copy/clipboard buttons in standard accessible tooltips that update their `aria-label` and tooltip content to reflect the state transition from "Copy" to "Copied to clipboard".
