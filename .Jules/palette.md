## 2025-01-24 - [Automatic ARIA Labels for Action Buttons]
**Learning:** Icon-only buttons often have tooltips that contain the exact text needed for an `aria-label`. Manually adding `aria-label` to every instance is error-prone and redundant.
**Action:** Always check if core button components can automatically derive accessibility labels from existing descriptive props like `tooltip` or `title`. If not, update the component to support this pattern globally.
