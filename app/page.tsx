import { CardComp, KnowMoreButton } from "@/components/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Content1RTImage from "~/正文01 区/“战争起源于人的思想，因此必须在人的思想中筑起保卫和平的屏障”， 这对于“通过教育、科学、文化、传播和信息促进建设和平、消除贫.png";
import Content1LImage from "~/正文01 区/画框区.png";
import Content2RTextImage from "~/正文02 区/右 区/什么是模拟联合国_ 为什么要参加模拟联合国_.png";
import Content2RImage from "~/正文02 区/右 区/底图.png";
import Content2LImage from "~/正文02 区/左 区/底图.png";
import Content2LTextImage from "~/正文02 区/左 区/欢迎你参与到 多元的联合国实习项目中来.png";
import Content3Image from "~/正文03 区/底图.png";
import Content3TextImage from "~/正文03 区/更多伙伴机构与组织.png";
import Content4TImage from "~/正文04 区/NEWS.png";
import Content4B2Image from "~/正文04 区/中 区/02 NEWS (底图).png";
import Content4B2TextImage from "~/正文04 区/中 区/中心成员参加菜鸟集团 的探索可持续经营管理培训。.png";
import Content4MImage from "~/正文04 区/关于我们的相关资讯可以 访问NEWS频道,我们会及时更新&发布。.png";
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png";
import Content4B1Image from "~/正文04 区/左 区/01 NEWS (底图).png";
import Content4B1TextImage from "~/正文04 区/左 区/中心将访问菜鸟集团， 探索可持续发展的新合作形式。.png";
import Content5B1TextImage from "~/正文05 区/导师/01（导师名）.png";
import Content5B1Image from "~/正文05 区/导师/01（导师头像）.png";
import Content5B2TextImage from "~/正文05 区/导师/02（导师名）.png";
import Content5B2Image from "~/正文05 区/导师/02（导师头像）.png";
import Content5B3TextImage from "~/正文05 区/导师/03（导师名）.png";
import Content5B3Image from "~/正文05 区/导师/03（导师头像）.png";
import Content5B4TextImage from "~/正文05 区/导师/04（导师名）.png";
import Content5B4Image from "~/正文05 区/导师/04（导师头像）.png";
import Content5B5TextImage from "~/正文05 区/导师/05（导师名）.png";
import Content5B5Image from "~/正文05 区/导师/05（导师头像）.png";
import Content5B6TextImage from "~/正文05 区/导师/06（导师名）.png";
import Content5B6Image from "~/正文05 区/导师/06（导师头像）.png";
import Content5TImage from "~/正文05 区/导师展示.png";
import Content5MImage from "~/正文05 区/我们拥有强大且专业的导师 团队更多关于导师介绍可以点击访问。.png";
import Banner1Text from "~/顶部Banner 区/01 Banner/About us.png";
import Banner1Image from "~/顶部Banner 区/01 Banner/底图01.png";
import Banner2Image from "~/顶部Banner 区/02 Banner/底图02.png";
import Banner2Text from "~/顶部Banner 区/02 Banner/联合国实习项目.png";
import Banner3Image from "~/顶部Banner 区/03 Banner/底图03.png";
import Banner3Text from "~/顶部Banner 区/03 Banner/模拟联合国.png";

const banners = [
  { image: Banner1Image, textImage: Banner1Text },
  { image: Banner2Image, textImage: Banner2Text },
  { image: Banner3Image, textImage: Banner3Text },
];

export default function IndexPage() {
  return (
    <>
      <section id={"banner"} className={"w-full"}>
        <div className="carousel w-full">
          {banners.map(({ image, textImage }, index) => (
            <div id={`slide-${index}`} className="carousel-item w-full relative">
              <AspectRatio ratio={16 / 5}>
                <Image src={image} alt={""} fill />
              </AspectRatio>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide-${(index - 1) % banners.length}`} className="btn btn-circle bg-muted/25 border-none">
                  {"<"}
                </a>
                <a href={`#slide-${(index + 1) % banners.length}`} className="btn btn-circle bg-muted/25 border-none">
                  {">"}
                </a>
              </div>
              <div className={"absolute flex flex-col h-full justify-end px-20 py-4 md:py-12 gap-4"}>
                <Image src={textImage} alt={""} className={"w-fit"} />
                <KnowMoreButton />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <section id={"content-1"} className={"w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-between"}>
          <Image src={Content1LImage} alt={""} className={"w-full h-auto"} />
          <div className={"p-4 md:p-8 | flex flex-col items-center gap-8"}>
            <Image src={Content1RTImage} alt={""} />
            <KnowMoreButton />
          </div>
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-2"} className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <CardComp image={Content2LImage} textImage={Content2LTextImage} pos={"inner-left-bottom"} withKnowMoreButton />
          <CardComp image={Content2RImage} textImage={Content2RTextImage} pos={"inner-left-bottom"} withKnowMoreButton />
        </section>

        <Separator orientation={"horizontal"} />

        <section id={"content-3"} className={"grid grid-cols-1 gap-4"}>
          <CardComp image={Content3Image} textImage={Content3TextImage} pos={"inner-left-top"} withKnowMoreButton />
        </section>

        <Separator orientation={"horizontal"} />

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

        <Separator orientation={"horizontal"} />

        <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
          <Image src={Content5TImage} alt={""} className={"w-fit"} />
          <Image src={Content5MImage} alt={""} className={"w-fit"} />

          <div className="carousel w-full grid grid-cols-2 md:grid-cols-3 gap-4">
            <CardComp image={Content5B1Image} textImage={Content5B1TextImage} pos={"outer-bottom"} />
            <CardComp image={Content5B2Image} textImage={Content5B2TextImage} pos={"outer-bottom"} />
            <CardComp image={Content5B3Image} textImage={Content5B3TextImage} pos={"outer-bottom"} />
            <CardComp image={Content5B4Image} textImage={Content5B4TextImage} pos={"outer-bottom"} />
            <CardComp image={Content5B5Image} textImage={Content5B5TextImage} pos={"outer-bottom"} />
            <CardComp image={Content5B6Image} textImage={Content5B6TextImage} pos={"outer-bottom"} />
          </div>
        </section>
      </section>
    </>
  );
}
