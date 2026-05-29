## 2025-05-15 - Automatic ARIA label for ActionButton
**Learning:** Icon-only buttons often miss ARIA labels, making them inaccessible to screen readers. In this app, many `ActionButton` components are used with a `tooltip` prop that contains a descriptive string, which is perfect for an `aria-label`.
**Action:** Automatically derive `aria-label` from the `tooltip` prop in common button components if it's a string, ensuring baseline accessibility without extra effort from developers.
