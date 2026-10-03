import { describe, expect, test } from "vitest"

import { ActionButton } from "./index"

describe("ActionButton", () => {
  test("is defined and exports component", () => {
    expect(ActionButton).toBeDefined()
    expect(typeof ActionButton).toBe("object")
  })
})
