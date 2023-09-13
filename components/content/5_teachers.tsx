import { AspectRatio } from "@/components/ui/aspect-ratio";
import _ from "lodash";
import Image from "next/image";
import Content5TImage from "~/正文05 区/导师展示.png";
import Content5MImage from "~/正文05 区/我们拥有强大且专业的导师 团队更多关于导师介绍可以点击访问。.png";

export const Teachers = () => (
  <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
    <Image src={Content5TImage} alt={""} className={"w-fit"} />
    <Image src={Content5MImage} alt={""} className={"w-fit"} />

    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {_.range(1, 7).map(async (i) => {
        const { default: image } = await import(`~/正文05 区/导师/0${i}（导师头像）.png`);
        const { default: text } = await import(`~/正文05 区/导师/0${i}（导师名）.png`);
        return (
          <div className={"flex flex-col gap-4 w-full"}>
            <AspectRatio ratio={3 / 4} className={"w-full"}>
              <Image src={image} alt={""} fill />
            </AspectRatio>
            <Image src={text} alt={""} />
          </div>
        );
      })}
      {/*<CardComp image={Content5B1Image} textImage={Content5B1TextImage} pos={"outer-bottom"} />*/}
      {/*<CardComp image={Content5B2Image} textImage={Content5B2TextImage} pos={"outer-bottom"} />*/}
      {/*<CardComp image={Content5B3Image} textImage={Content5B3TextImage} pos={"outer-bottom"} />*/}
      {/*<CardComp image={Content5B4Image} textImage={Content5B4TextImage} pos={"outer-bottom"} />*/}
      {/*<CardComp image={Content5B5Image} textImage={Content5B5TextImage} pos={"outer-bottom"} />*/}
      {/*<CardComp image={Content5B6Image} textImage={Content5B6TextImage} pos={"outer-bottom"} />*/}
    </div>
  </section>
);
