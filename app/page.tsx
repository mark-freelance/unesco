import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import Content1RTImage from "~/正文01 区/“战争起源于人的思想，因此必须在人的思想中筑起保卫和平的屏障”， 这对于“通过教育、科学、文化、传播和信息促进建设和平、消除贫.png";
import Content1LImage from "~/正文01 区/画框区.png";
import Content2RTitleImage from "~/正文02 区/右 区/什么是模拟联合国_ 为什么要参加模拟联合国_.png";
import Content2RImage from "~/正文02 区/右 区/底图.png";
import Content2LImage from "~/正文02 区/左 区/底图.png";
import Content2LTitleImage from "~/正文02 区/左 区/欢迎你参与到 多元的联合国实习项目中来.png";
import Content3Image from "~/正文03 区/底图.png";
import Content3TitleImage from "~/正文03 区/更多伙伴机构与组织.png";
import Content4TImage from "~/正文04 区/NEWS.png";
import Content4B2Image from "~/正文04 区/中 区/02 NEWS (底图).png";
import Content4B2TitleImage from "~/正文04 区/中 区/中心成员参加菜鸟集团 的探索可持续经营管理培训。.png";
import Content4MImage from "~/正文04 区/关于我们的相关资讯可以 访问NEWS频道,我们会及时更新&发布。.png";
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png";
import Content4B1Image from "~/正文04 区/左 区/01 NEWS (底图).png";
import Content4B1TitleImage from "~/正文04 区/左 区/中心将访问菜鸟集团， 探索可持续发展的新合作形式。.png";
import Content5TImage from "~/正文05 区/导师展示.png";
import Content5MImage from "~/正文05 区/我们拥有强大且专业的导师 团队更多关于导师介绍可以点击访问。.png";
import Banner1Image from "~/顶部Banner 区/01 Banner/底图01.png";

export const KnowMoreButton = () => {
  return (
    <Button className={"w-fit"} size={"thin"}>
      {"了解更多 ->"}
    </Button>
  );
};

export const CardComp = ({
  image,
  titleImage,
  withKnowMoreButton,
  pos,
  children,
}: {
  image: StaticImageData;
  titleImage?: StaticImageData;
  withKnowMoreButton?: boolean;
  pos: "inner-left-bottom" | "inner-left-top" | "outer-bottom";
} & PropsWithChildren) => {
  return (
    <div className={"relative w-full flex flex-col gap-2"}>
      <div className={"relative"}>
        <Image src={image} alt={""} />
        <div className={"absolute inset-0 flex items-center justify-center"}>{children}</div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-4",
          pos !== "outer-bottom" && "absolute inset-0 p-8",
          pos === "inner-left-bottom" && "justify-end"
        )}
      >
        {titleImage && <Image src={titleImage} alt={""} className={"w-fit"} />}
        {withKnowMoreButton && <KnowMoreButton />}
      </div>
    </div>
  );
};

export default function IndexPage() {
  return (
    <>
      <section id={"banner"}>
        <Image src={Banner1Image} alt={""} />
      </section>

      <section className="w-full container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <section id={"content-1"} className={"w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-between"}>
          <Image src={Content1LImage} alt={""} className={"w-full h-auto"} />
          <div className={"p-4 md:p-8 | flex flex-col items-center gap-8"}>
            <Image src={Content1RTImage} alt={""} />
            <KnowMoreButton />
          </div>
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-2"} className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <CardComp image={Content2LImage} titleImage={Content2LTitleImage} pos={"inner-left-bottom"} withKnowMoreButton />
          <CardComp image={Content2RImage} titleImage={Content2RTitleImage} pos={"inner-left-bottom"} withKnowMoreButton />
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-3"} className={"grid grid-cols-1 gap-4"}>
          <CardComp image={Content3Image} titleImage={Content3TitleImage} pos={"inner-left-top"} withKnowMoreButton />
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-4"} className={"grid grid-cols-1 gap-4"}>
          <Image src={Content4TImage} alt={""} className={"w-fit"} />
          <Image src={Content4MImage} alt={""} className={"w-fit"} />
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
            <CardComp image={Content4B1Image} titleImage={Content4B1TitleImage} pos={"outer-bottom"} />
            <CardComp image={Content4B2Image} titleImage={Content4B2TitleImage} pos={"outer-bottom"} />
            <CardComp image={Content4B3Image} pos={"outer-bottom"} withKnowMoreButton>
              <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>
            </CardComp>
          </div>
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
          <Image src={Content5TImage} alt={""} className={"w-fit"} />
          <Image src={Content5MImage} alt={""} className={"w-fit"} />
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}></div>
        </section>
      </section>
    </>
  );
}
