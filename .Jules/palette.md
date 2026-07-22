## 2026-07-22 - Custom Electron Titlebar Accessibility and Focus Pattern
**Learning:** In desktop environments with custom Titlebars (e.g. Windows custom titlebars inside an Electron app shell), interactive buttons (Minimize, Maximize, Close) are often nested inside fixed overlays that may have `aria-hidden` statically set or `pointer-events-none` for global window drag-regions. To make custom titlebar controls accessible and visually perfect:
- Change the container wrapper to `aria-hidden={!windowsElectron}` to keep them screen-reader accessible on Windows while properly hiding them on non-supported platforms.
- Wrap window control buttons inside Radix Tooltips with `TooltipPortal` so tooltips are not clipped by `overflow: hidden` on the titlebar container.
- Apply `focus-visible:ring-inset` and custom rings to prevent the focus outline from clipping at the window/screen border.
- Apply `onFocusCapture={stopPropagation}` from `~/lib/dom` to resolve Radix Tooltip focus capturing bugs on window controls.
**Action:** Always apply this integrated pattern of dynamic `aria-hidden`, `TooltipPortal`, inset rings, and `stopPropagation` focus captures when implementing or refactoring custom window and titlebar control buttons in this design system.
