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
enableMapSet()

if (!globalThis.tw) {
  globalThis.tw = (strings: TemplateStringsArray, ...values: any[]) =>
    String.raw({ raw: strings }, ...values)
}
