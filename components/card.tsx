import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const KnowMoreButton = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <Button className={"w-fit"} size={"thin"}>
        {"了解更多 ->"}
      </Button>
    </Link>
  )
}

export const CardComp = ({
  image,
  text,
  textCenter,
  pos,
  children,
  link,
}: {
  image: StaticImageData
  text?: StaticImageData
  textCenter?: boolean
  pos: "inner-left-bottom" | "inner-left-top" | "outer-bottom"
  link?: string
} & PropsWithChildren) => {
  return (
    <div className={"relative w-full flex flex-col gap-2"}>
      <div className={"relative"}>
        <Image src={image} alt={""} />
        <div className={"absolute inset-0 flex items-center justify-center"}>{children}</div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-4 w-full",
          pos !== "outer-bottom" && "absolute inset-0 px-8 py-16",
          pos === "inner-left-bottom" && "justify-end"
        )}
      >
        {text && <Image src={text} alt={""} className={cn("w-fit", textCenter && "mx-auto")} />}
        {link && <KnowMoreButton link={link} />}
      </div>
    </div>
  )
}
