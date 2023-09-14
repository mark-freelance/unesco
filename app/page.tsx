import { HeroInHomePage } from "@/components/Hero"
import { CardComp, KnowMoreButton } from "@/components/card"
import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { AllNews } from "@/components/news"
import { Separator } from "@/components/ui/separator"
import { assets } from "@/config/assets"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Banner />
      <CenterContainer>
        {[
          // 1. intro
          () => (
            <section id={"content-1"} className={"w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-between"}>
              <Image src={assets.homePage.modules.Intro.left.image} alt={""} className={"w-full h-auto"} />
              <div className={"p-4 md:p-8 | flex flex-col items-center gap-8"}>
                <Image src={assets.homePage.modules.Intro.right.image} alt={""} />
                <KnowMoreButton link={assets.homePage.modules.Intro.right.link} />
              </div>
            </section>
          ),
          // 2. 联合国
          () => (
            <section id={"content-2"} className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
              {assets.homePage.modules.UnitedNations.children.map((item, index) => (
                <CardComp {...item} pos={"inner-left-bottom"} key={index} />
              ))}
            </section>
          ),
          // 3. 更多
          () => (
            <section id={"content-3"} className={"grid grid-cols-1 gap-4"}>
              <CardComp {...assets.homePage.modules.More} pos={"inner-left-top"} />
            </section>
          ),
          // 4. 新闻
          () => (
            <section id={"content-4"} className={"grid grid-cols-1 gap-4"}>
              <Image src={assets.homePage.News.title} alt={""} className={"w-fit"} />
              <Image src={assets.homePage.News.subTitle} alt={""} className={"w-fit"} />
              <AllNews />
            </section>
          ),
          // 5. 导师
          () => (
            <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
              <Image src={assets.homePage.modules.Teachers.top} alt={""} className={"w-fit"} />
              <Image src={assets.homePage.modules.Teachers.middle} alt={""} className={"w-fit"} />

              <div className="w-full flex flex-wrap justify-around gap-4">
                {assets.general.teachers.map((props) => (
                  <HeroInHomePage {...props} key={props.id} />
                ))}
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
