# Palette's Journal

Critical UX and Accessibility learnings for RSSNext Follow application.

## 2024-11-20 - ActionButton and IconButton Accessibility and Focus Indicator Improvement
**Learning:** In projects where the global CSS disables the default focus outline (`:focus-visible { outline: none; }`), reusable button components must provide their own high-contrast visual focus rings to maintain keyboard navigability. Additionally, icon-only buttons often lack `aria-label` attributes because developers rely purely on tooltips; we can safely fall back to the string value of the tooltip prop as an implicit `aria-label` when no explicit label is provided.
**Action:** Always verify that interactive custom components have explicit focus-visible classes matching the app's design system style guide, and implement fallback `aria-label` heuristics for icon-based/tooltip-wrapped elements.
