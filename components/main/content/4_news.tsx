import { CardComp } from "@/components/card";
import Image from "next/image";
import Content4TImage from "~/正文04 区/NEWS.png";
import Content4B2Image from "~/正文04 区/中 区/02 NEWS (底图).png";
import Content4B2TextImage from "~/正文04 区/中 区/中心成员参加菜鸟集团 的探索可持续经营管理培训。.png";
import Content4MImage from "~/正文04 区/关于我们的相关资讯可以 访问NEWS频道,我们会及时更新&发布。.png";
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png";
import Content4B1Image from "~/正文04 区/左 区/01 NEWS (底图).png";
import Content4B1TextImage from "~/正文04 区/左 区/中心将访问菜鸟集团， 探索可持续发展的新合作形式。.png";

export const News = () => {
  return (
    <section id={"content-4"} className={"grid grid-cols-1 gap-4"}>
      <Image src={Content4TImage} alt={""} className={"w-fit"} />
      <Image src={Content4MImage} alt={""} className={"w-fit"} />
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
        <CardComp image={Content4B1Image} textImage={Content4B1TextImage} pos={"outer-bottom"} />
        <CardComp image={Content4B2Image} textImage={Content4B2TextImage} pos={"outer-bottom"} />
        <CardComp image={Content4B3Image} pos={"outer-bottom"} withKnowMoreButton>
          <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>
        </CardComp>
      </div>
    </section>
  );
};
