import { CardComp, KnowMoreButton } from "@/components/card"
import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { assets } from "@/config/assets"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Banner />
      <CenterContainer>
        {[
          () => (
            <section id={"content-1"} className={"w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-between"}>
              <Image src={assets.homePage.modules.Intro.left.image} alt={""} className={"w-full h-auto"} />
              <div className={"p-4 md:p-8 | flex flex-col items-center gap-8"}>
                <Image src={assets.homePage.modules.Intro.right.image} alt={""} />
                <KnowMoreButton link={assets.homePage.modules.Intro.right.link} />
              </div>
            </section>
          ),
          () => (
            <section id={"content-2"} className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
              {assets.homePage.modules.UnitedNations.children.map((item, index) => (
                <CardComp {...item} pos={"inner-left-bottom"} key={index} />
              ))}
            </section>
          ),
          () => (
            <section id={"content-3"} className={"grid grid-cols-1 gap-4"}>
              <CardComp {...assets.homePage.modules.More} pos={"inner-left-top"} />
            </section>
          ),
          () => (
            <section id={"content-4"} className={"grid grid-cols-1 gap-4"}>
              <Image src={assets.homePage.News.title} alt={""} className={"w-fit"} />
              <Image src={assets.homePage.News.subTitle} alt={""} className={"w-fit"} />
              <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                {assets.homePage.News.children.map((item) => (
                  <CardComp image={item.image} text={item.text} pos={"outer-bottom"}>
                    {item.hasMore && <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>}
                  </CardComp>
                ))}
              </div>
            </section>
          ),
          () => (
            <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
              <Image src={assets.homePage.modules.Teachers.top} alt={""} className={"w-fit"} />
              <Image src={assets.homePage.modules.Teachers.middle} alt={""} className={"w-fit"} />

              <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                {assets.teachersPage.children.map((i, index) => {
                  return (
                    <div className={"flex flex-col gap-4 w-full"} key={index}>
                      <AspectRatio ratio={3 / 4} className={"w-full"}>
                        <Image src={i.avatar} alt={""} fill sizes={"width:160px;"} />
                      </AspectRatio>
                      <Image src={i.name} alt={""} className={"w-fit"} />
                    </div>
                  )
                })}
              </div>
            </section>
          ),
        ].map((Ele) => (
          <>
            <Separator orientation={"horizontal"} className={"first:hidden"} />
            <Ele />
          </>
        ))}
      </CenterContainer>
    </>
  )
}
