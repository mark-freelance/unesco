import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { PropsWithChildren } from "react"
import ReactMarkdown from "react-markdown"

export const Hero = ({ name, avatar, desc }: { name: string; avatar: string; desc: string }) => {
  return (
    <div className={"w-full flex flex-col gap-2"}>
      <ReactMarkdown>{name}</ReactMarkdown>

      <div className={"w-full flex gap-4"}>
        <div className={"w-40 shrink-0"}>
          <AspectRatio ratio={3 / 4}>
            <Image src={avatar} alt={""} fill sizes={"width:120px;"} />
          </AspectRatio>
        </div>
        <ReactMarkdown className={"grow flex flex-col gap-4"}>{desc}</ReactMarkdown>
      </div>
    </div>
  )
}
