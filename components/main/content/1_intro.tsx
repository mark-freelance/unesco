import { KnowMoreButton } from "@/components/card";
import Image from "next/image";
import Content1RTImage from "~/正文01 区/“战争起源于人的思想，因此必须在人的思想中筑起保卫和平的屏障”， 这对于“通过教育、科学、文化、传播和信息促进建设和平、消除贫.png";
import Content1LImage from "~/正文01 区/画框区.png";

export const Intro = () => (
  <section id={"content-1"} className={"w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-between"}>
    <Image src={Content1LImage} alt={""} className={"w-full h-auto"} />
    <div className={"p-4 md:p-8 | flex flex-col items-center gap-8"}>
      <Image src={Content1RTImage} alt={""} />
      <KnowMoreButton />
    </div>
  </section>
);
