# Palette's Journal

## 2025-02-14 - Initialize Palette's Journal
**Learning:** Setting up the journal for the first time.
**Action:** Ready to record future micro-UX/accessibility learnings in this project.

## 2025-02-14 - Accessible Code Copy Button Tooltip & Keyboard Polish
**Learning:** Icon-only action buttons such as `CopyButton` used for code highlights require accessible dynamic tooltips, a fallback try/catch clipboard handler for secure/headless testing environments, and customized keyboard focus indicators (`focus-visible:ring-2`) since global outline styles are disabled.
**Action:** When creating utility buttons or action buttons, wrap them in Radix `Tooltip` with a localized dynamic `aria-label` changing with interaction state (e.g., "Copy" vs "Copied to clipboard"). Add `onFocusCapture={stopPropagation}` to handle focus capture properly.
