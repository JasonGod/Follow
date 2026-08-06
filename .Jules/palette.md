## 2026-08-06 - Accessible Tooltips for Action Buttons
**Learning:** Icon-only micro-interaction components like CopyButton must have both an updating localized `aria-label` for screen readers and a hover-triggered `Tooltip` for visual users to guarantee seamless multi-modality accessibility.
**Action:** Always wrap custom micro-buttons (e.g., share, copy, like, refresh) with the Radix `Tooltip` component and specify dynamic `aria-label` and visual tooltip texts that respond to active state changes.
