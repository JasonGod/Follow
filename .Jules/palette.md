## 2025-05-14 - [Titlebar Accessibility]
**Learning:** Window control buttons in Electron apps (minimize, maximize, close) are often overlooked for accessibility. They need localized `aria-label` attributes and tooltips, just like other icon-only buttons. Additionally, custom focus indicators are required because the project disables the default browser outline.
**Action:** Always provide localized labels and tooltips for window controls. Use `focus-visible:ring-inset` for buttons that sit at the edge of the screen to prevent the focus ring from being clipped.
