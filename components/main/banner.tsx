import { KnowMoreButton } from "@/components/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import Banner1Text from "~/顶部Banner 区/01 Banner/About us.png"
import Banner1Image from "~/顶部Banner 区/01 Banner/底图01.png"
import Banner2Image from "~/顶部Banner 区/02 Banner/底图02.png"
import Banner2Text from "~/顶部Banner 区/02 Banner/联合国实习项目.png"
import Banner3Image from "~/顶部Banner 区/03 Banner/底图03.png"
import Banner3Text from "~/顶部Banner 区/03 Banner/模拟联合国.png"

const banners = [
  { image: Banner1Image, textImage: Banner1Text },
  { image: Banner2Image, textImage: Banner2Text },
  { image: Banner3Image, textImage: Banner3Text },
]

export const Banner = () => (
  <section id={"banner"} className={"w-full"}>
    <div className="carousel w-full">
      {banners.map(({ image, textImage }, index) => (
        <div id={`slide-${index}`} className="carousel-item w-full relative">
          <AspectRatio ratio={16 / 5}>
            <Image src={image} alt={""} fill />
          </AspectRatio>

          <div className={"absolute flex flex-col h-full justify-end px-20 py-4 md:py-12 gap-4"}>
            <Image src={textImage} alt={""} className={"w-fit"} />
            <KnowMoreButton />
          </div>

          <div className="absolute flex justify-between -translate-y-1/2 inset-x-5 top-1/2">
            <a href={`#slide-${(index - 1 + banners.length) % banners.length}`} className="btn btn-circle bg-muted/25 border-none">
              {"<"}
            </a>
            <a href={`#slide-${(index + 1) % banners.length}`} className="btn btn-circle bg-muted/25 border-none">
              {">"}
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
)
