## 2024-10-18 - [Titlebar Accessibility & Tooltips]
**Learning:** Custom Electron titlebars often omit standard micro-UX features like tooltips and ARIA labels. Because these buttons are at the very edge of the window, standard focus outlines are often clipped or disabled globally.
**Action:** Always provide `aria-label` for titlebar buttons, use `TooltipPortal` to ensure tooltips aren't clipped by `overflow-hidden` containers, and use `focus-visible:ring-inset` for edge-aligned interactive elements.

## 2024-10-18 - [Testing Constraints in @follow/web]
**Learning:** The `@follow/web` package does not have `@testing-library/react` or a DOM environment configured for Vitest, making component-level integration testing difficult.
**Action:** Focus on unit testing logic and exported definitions, and use manual verification or Playwright for UI changes until a proper testing environment is established.
