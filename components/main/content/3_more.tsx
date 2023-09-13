import { CardComp } from "@/components/card"
import Content3Image from "~/正文03 区/底图.png"
import Content3TextImage from "~/正文03 区/更多伙伴机构与组织.png"

export const More = () => (
  <section id={"content-3"} className={"grid grid-cols-1 gap-4"}>
    <CardComp image={Content3Image} text={Content3TextImage} pos={"inner-left-top"} withKnowMoreButton />
  </section>
)
