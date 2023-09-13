import { CENTER_LIMITER_CLASS } from "@/config/ui"
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const CenterContainer = ({ children }: PropsWithChildren) => (
  <section className={cn("w-full grid items-center gap-6 pb-8 ", CENTER_LIMITER_CLASS)}>{children}</section>
)
