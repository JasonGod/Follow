import { describe, expect, it, vi } from "vitest"

import { Titlebar } from "./Titlebar"

// Mock dependencies
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    data: false,
    refetch: vi.fn(),
  }),
}))

vi.mock("~/atoms/settings/ui", () => ({
  useUISettingKey: () => 250,
}))

vi.mock("~/lib/client", () => ({
  tipcClient: {
    getWindowIsMaximized: vi.fn(),
    windowAction: vi.fn(),
  },
}))

vi.mock("~/components/ui/tooltip", () => ({
  Tooltip: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children }: any) => <div>{children}</div>,
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  TooltipPortal: ({ children }: any) => <div>{children}</div>,
}))

describe("Titlebar", () => {
  it("should be defined", () => {
    expect(Titlebar).toBeDefined()
  })
})
