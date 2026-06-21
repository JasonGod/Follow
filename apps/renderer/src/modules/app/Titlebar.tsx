import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { useUISettingKey } from "~/atoms/settings/ui"
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "~/components/ui/tooltip"
import { ElECTRON_CUSTOM_TITLEBAR_HEIGHT } from "~/constants"
import { tipcClient } from "~/lib/client"

export const Titlebar = () => {
  const { t } = useTranslation("common")
  const { data: isMaximized, refetch } = useQuery({
    queryFn: () => tipcClient?.getWindowIsMaximized(),
    queryKey: ["windowIsMaximized"],
  })

  const feedColWidth = useUISettingKey("feedColWidth")

  return (
    <div
      className="drag-region absolute right-0 flex items-center justify-end overflow-hidden"
      style={{
        height: `${ElECTRON_CUSTOM_TITLEBAR_HEIGHT}px`,
        left: `${feedColWidth}px`,
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-theme-item-active focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 focus-visible:outline-none"
            type="button"
            aria-label={t("minimize")}
            onClick={() => {
              tipcClient?.windowAction({ action: "minimize" })
            }}
          >
            <i className="i-mingcute-minimize-line" />
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="bottom">{t("minimize")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={isMaximized ? t("restore") : t("maximize")}
            className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-theme-item-active focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 focus-visible:outline-none"
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
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="bottom">{isMaximized ? t("restore") : t("maximize")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={t("close")}
            className="no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 hover:bg-red-500 hover:!text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 focus-visible:outline-none"
            onClick={() => {
              tipcClient?.windowAction({ action: "close" })
            }}
          >
            <i className="i-mingcute-close-line" />
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="bottom">{t("close")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  )
}
