import { CardComp } from "@/components/card"
import { assets } from "@/config/assets"
import Image from "next/image"

export const News = () => {
  return (
    <section id={"content-4"} className={"grid grid-cols-1 gap-4"}>
      <Image src={assets.home.news.title} alt={""} className={"w-fit"} />
      <Image src={assets.home.news.subTitle} alt={""} className={"w-fit"} />
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
        {assets.home.news.children.map((item) => (
          <CardComp image={item.image} text={item.text} pos={"outer-bottom"} withKnowMoreButton={item.hasMore}>
            {item.hasMore && <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>}
          </CardComp>
        ))}
      </div>
    </section>
  )
}
