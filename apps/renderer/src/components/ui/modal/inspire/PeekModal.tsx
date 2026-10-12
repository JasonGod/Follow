import type { PropsWithChildren } from "react"
import { createContext, useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { m } from "~/components/common/Motion"

import { microReboundPreset } from "../../constants/spring"
import { useModalStack } from "../stacked"

const InPeekModal = createContext(false)
export const useInPeekModal = () => useContext(InPeekModal)
export const PeekModal = (
  props: PropsWithChildren<{
    to: string
  }>,
) => {
  const { dismissAll, dismissTop } = useModalStack()
  const { to, children } = props
  const { t } = useTranslation(["app", "common"])

  return (
    <div className="relative mx-auto mt-[10vh] max-w-full overflow-auto px-2 scrollbar-none lg:max-w-[65rem] lg:p-0">
      <m.div
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={microReboundPreset}
        className="scrollbar-none"
      >
        <InPeekModal.Provider value={true}>{children}</InPeekModal.Provider>
      </m.div>

      <m.div
        initial={true}
        exit={{
          opacity: 0,
        }}
        className="fixed right-3 top-2 flex items-center gap-4"
      >
        <Link
          className="center flex size-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 dark:ring-neutral-800"
          to={to}
          aria-label={t("player.full_screen", { ns: "app" })}
          onClick={dismissAll}
        >
          <i className="i-mgc-fullscreen-2-cute-re text-lg" />
          <span className="sr-only">{t("player.full_screen", { ns: "app" })}</span>
        </Link>

        <button
          type="button"
          className="center flex size-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 dark:ring-neutral-800"
          aria-label={t("close", { ns: "common" })}
          onClick={dismissTop}
        >
          <i className="i-mgc-close-cute-re text-lg" />
          <span className="sr-only">{t("close", { ns: "common" })}</span>
        </button>
      </m.div>
    </div>
  )
}
