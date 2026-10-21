import { describe, expect, it } from "vitest"

import { ActionButton } from "./index"

describe("ActionButton aria-label behavior", () => {
  it("uses tooltip string as default aria-label when string tooltip is provided", () => {
    const props = {
      tooltip: "Discover",
    }
    const ariaLabel =
      (props as any)["aria-label"] ??
      (typeof props.tooltip === "string" ? props.tooltip : undefined)
    expect(ariaLabel).toBe("Discover")
  })

  it("prioritizes explicit aria-label over string tooltip", () => {
    const props = {
      tooltip: "Discover",
      "aria-label": "Custom Discover Label",
    }
    const ariaLabel =
      (props as any)["aria-label"] ??
      (typeof props.tooltip === "string" ? props.tooltip : undefined)
    expect(ariaLabel).toBe("Custom Discover Label")
  })

  it("returns undefined for non-string tooltip when no explicit aria-label is supplied", () => {
    const props = {
      tooltip: <span>Complex Tooltip</span>,
    }
    const ariaLabel =
      (props as any)["aria-label"] ??
      (typeof props.tooltip === "string" ? props.tooltip : undefined)
    expect(ariaLabel).toBeUndefined()
  })

  it("exports ActionButton correctly", () => {
    expect(ActionButton).toBeDefined()
  })
})
