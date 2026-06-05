# Palette's UX Journal

## UX Philosophy

- Users notice the little things
- Accessibility is not optional
- Every interaction should feel smooth
- Good UX is invisible - it just works

## Critical Learnings

### 2024-10-24 - Window Controls Accessibility

**Learning:** Desktop-like UI in Electron apps often lacks basic accessibility features like ARIA labels and tooltips, especially when custom titlebars are used. Focus indicators for these buttons should be inset to avoid being clipped at the window edge.
**Action:** Always provide localized ARIA labels and tooltips for window controls. Use `focus-visible:ring-inset` for buttons at the screen edge. Use `TooltipPortal` to ensure tooltips are not clipped by overflow-hidden containers.
