import { CardComp } from "@/components/card"
import Content2RTextImage from "~/正文02 区/右 区/什么是模拟联合国_ 为什么要参加模拟联合国_.png"
import Content2RImage from "~/正文02 区/右 区/底图.png"
import Content2LImage from "~/正文02 区/左 区/底图.png"
import Content2LTextImage from "~/正文02 区/左 区/欢迎你参与到 多元的联合国实习项目中来.png"

export const Welcome = () => (
  <section id={"content-2"} className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
    <CardComp image={Content2LImage} text={Content2LTextImage} pos={"inner-left-bottom"} withKnowMoreButton />
    <CardComp image={Content2RImage} text={Content2RTextImage} pos={"inner-left-bottom"} withKnowMoreButton />
  </section>
)
