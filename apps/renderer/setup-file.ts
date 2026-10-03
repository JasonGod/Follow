// @ts-nocheck
import "fake-indexeddb/auto"

import { enableMapSet } from "immer"

globalThis.window = {
  location: new URL("https://example.com"),
  __dbIsReady: true,
  addEventListener: () => {},
  get navigator() {
    return globalThis.navigator
  },
}

if (!globalThis.navigator) {
  globalThis.navigator = {
    onLine: true,
    userAgent: "node",
  }
}

// @ts-expect-error global polyfill for tw macro used in style imports
globalThis.tw = (strings: TemplateStringsArray, ...values: any[]) =>
  strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "")
enableMapSet()
