import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { useUISettingKey } from "~/atoms/settings/ui"
import { ElECTRON_CUSTOM_TITLEBAR_HEIGHT } from "~/constants"
import { tipcClient } from "~/lib/client"

export const Titlebar = () => {
  const { data: isMaximized, refetch } = useQuery({
    queryFn: () => tipcClient?.getWindowIsMaximized(),
    queryKey: ["windowIsMaximized"],
  })
  const { t } = useTranslation("common")

  const feedColWidth = useUISettingKey("feedColWidth")

  return (
    <div
      className="drag-region absolute right-0 flex items-center justify-end overflow-hidden"
      style={{
        height: `${ElECTRON_CUSTOM_TITLEBAR_HEIGHT}px`,
        left: `${feedColWidth}px`,
      }}
    >
      <button
        className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-theme-item-active"
        type="button"
        aria-label={t("words.minimize")}
        onClick={() => {
          tipcClient?.windowAction({ action: "minimize" })
        }}
      >
        <i className="i-mingcute-minimize-line" />
      </button>

      <button
        type="button"
        className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-theme-item-active"
        aria-label={isMaximized ? t("words.restore") : t("words.maximize")}
        onClick={async () => {
          await tipcClient?.windowAction({ action: "maximum" })
          refetch()
        }}
      >
        {isMaximized ? (
          <i className="i-mingcute-restore-line" />
        ) : (
          <i className="i-mingcute-square-line" />
        )}
      </button>

      <button
        type="button"
        className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-red-500 hover:!text-white"
        aria-label={t("close")}
        onClick={() => {
          tipcClient?.windowAction({ action: "close" })
        }}
      >
        <i className="i-mingcute-close-line" />
      </button>
    </div>
  )
}
