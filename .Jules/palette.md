## 2024-07-04 - [Titlebar Accessibility & Tooltips]
**Learning:** Custom Electron titlebars often omit standard window control labels, making them inaccessible to screen readers. Additionally, tooltips within absolute-positioned/overflow-hidden containers like titlebars require `TooltipPortal` to avoid being clipped.
**Action:** Always provide localized `aria-label` for window controls and use `TooltipPortal` for titlebar tooltips. Use standard OS terminology (e.g., zh-CN "向下还原" for Restore).
