import { assets } from "@/components/assets";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Content5TImage from "~/正文05 区/导师展示.png";
import Content5MImage from "~/正文05 区/我们拥有强大且专业的导师 团队更多关于导师介绍可以点击访问。.png";

export const Teachers = () => (
  <section id={"content-5"} className={"grid grid-cols-1 gap-4"}>
    <Image src={Content5TImage} alt={""} className={"w-fit"} />
    <Image src={Content5MImage} alt={""} className={"w-fit"} />

    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {assets.teachers.items.map((i, index) => {
        return (
          <div className={"flex flex-col gap-4 w-full"} key={index}>
            <AspectRatio ratio={3 / 4} className={"w-full"}>
              <Image src={i.avatar} alt={""} fill sizes={"width:160px;"} />
            </AspectRatio>
            <Image src={i.name} alt={""} className={"w-fit"} />
          </div>
        );
      })}
    </div>
  </section>
);
