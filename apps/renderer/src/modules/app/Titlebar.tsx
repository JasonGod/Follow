import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { useUISettingKey } from "~/atoms/settings/ui"
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "~/components/ui/tooltip"
import { ElECTRON_CUSTOM_TITLEBAR_HEIGHT } from "~/constants"
import { tipcClient } from "~/lib/client"
import { stopPropagation } from "~/lib/dom"
import { cn } from "~/lib/utils"

export const Titlebar = () => {
  const { t } = useTranslation("common")
  const { data: isMaximized, refetch } = useQuery({
    queryFn: () => tipcClient?.getWindowIsMaximized(),
    queryKey: ["windowIsMaximized"],
  })

  const feedColWidth = useUISettingKey("feedColWidth")

  const buttonClass =
    "no-drag-region pointer-events-auto flex h-full w-[50px] items-center justify-center duration-200 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none"

  return (
    <div
      className="drag-region absolute right-0 flex items-center justify-end overflow-hidden"
      style={{
        height: `${ElECTRON_CUSTOM_TITLEBAR_HEIGHT}px`,
        left: `${feedColWidth}px`,
      }}
    >
      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <button
            className={cn(buttonClass, "hover:bg-theme-item-active")}
            type="button"
            aria-label={t("minimize")}
            onFocusCapture={stopPropagation}
            onClick={() => {
              tipcClient?.windowAction({ action: "minimize" })
            }}
          >
            <i className="i-mingcute-minimize-line" />
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>{t("minimize")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>

      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn(buttonClass, "hover:bg-theme-item-active")}
            aria-label={isMaximized ? t("restore") : t("maximize")}
            onFocusCapture={stopPropagation}
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
          <TooltipContent>{isMaximized ? t("restore") : t("maximize")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>

      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn(buttonClass, "hover:bg-red-500 hover:!text-white")}
            aria-label={t("close")}
            onFocusCapture={stopPropagation}
            onClick={() => {
              tipcClient?.windowAction({ action: "close" })
            }}
          >
            <i className="i-mingcute-close-line" />
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>{t("close")}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  )
}
