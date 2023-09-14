import { CardComp } from "@/components/card"
import { assets } from "@/config/assets"
import Link from "next/link"

export const AllNews = () => (
  <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
    {assets.homePage.News.children.map(({ image, text, link, hasMore }, index) => (
      <Link href={link} key={index}>
        <CardComp image={image} text={text} pos={"outer-bottom"}>
          {hasMore && <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>}
        </CardComp>
      </Link>
    ))}
  </div>
)
