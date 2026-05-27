## 2026-05-27 - [Improve ActionButton accessibility]
**Learning:** Icon-only buttons are often missing proper `aria-label` and focus indicators, making them difficult for screen reader users and keyboard navigators. By centralizing accessibility features in a base `ActionButton` component, we can ensure consistent UX across the entire application.
**Action:** Automatically derive `aria-label` from `tooltip` prop when it's a string, and provide clear `focus-visible` styles in the base component.
