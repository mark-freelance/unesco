import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { Intro } from "@/components/main/content/1_intro"
import { Welcome } from "@/components/main/content/2_welcome"
import { More } from "@/components/main/content/3_more"
import { News } from "@/components/main/content/4_news"
import { Teachers } from "@/components/main/content/5_teachers"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <>
      <Banner />
      <CenterContainer>
        {[Intro, Welcome, More, News, Teachers].map((Ele) => (
          <>
            <Separator orientation={"horizontal"} className={"first:hidden"} />
            <Ele />
          </>
        ))}
      </CenterContainer>
    </>
  )
}
