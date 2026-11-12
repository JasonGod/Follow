import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { ActionButton, IconButton } from "./index"

describe("ActionButton & IconButton Accessibility", () => {
  it("derives fallback aria-label from string tooltip when aria-label is not provided", () => {
    const html = renderToStaticMarkup(
      <ActionButton tooltip="Discover Feeds">
        <i className="icon" />
      </ActionButton>,
    )

    expect(html).toContain('aria-label="Discover Feeds"')
    expect(html).toContain("focus-visible:ring-2")
  })

  it("prioritizes explicit aria-label over tooltip", () => {
    const html = renderToStaticMarkup(
      <ActionButton aria-label="Custom Action" tooltip="Tooltip description">
        <i className="icon" />
      </ActionButton>,
    )

    expect(html).toContain('aria-label="Custom Action"')
  })

  it("IconButton contains focus-visible focus ring indicator styles", () => {
    const html = renderToStaticMarkup(
      <IconButton icon={<i className="icon" />}>Click me</IconButton>,
    )

    expect(html).toContain("focus-visible:ring-2")
    expect(html).toContain("focus-visible:ring-accent/40")
  })
})
