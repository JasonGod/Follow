## 2024-06-15 - Improving Windows Titlebar Accessibility
**Learning:** Applying `aria-hidden` to a container that includes interactive elements (like window controls) prevents screen readers from discovering or interacting with those elements. Additionally, for buttons at the very edge of a window or container, using `focus-visible:ring-inset` ensures the focus indicator remains visible and isn't clipped.
**Action:** Always ensure interactive containers are not marked with `aria-hidden`. Use `ring-inset` for focus indicators on edge-aligned elements.

## 2024-06-15 - Radix Tooltips in Overflow Hidden Containers
**Learning:** In components with `overflow: hidden` (like the app Titlebar), Radix Tooltips can be clipped if they render within the parent's DOM tree.
**Action:** Use `TooltipPortal` to render tooltips into a portal, ensuring they remain visible outside the parent's boundaries.
