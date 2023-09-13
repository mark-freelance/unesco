import { assets } from "@/components/assets";
import { SubNavCard } from "@/components/main/nav/index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Nav1LDesc from "~/导航 区/关于我们/二级展开/左侧简介.png";

export const AboutUS = () => (
  <div className={cn("fixed left-0", "w-screen flex items-center h-fit bg-cyan-500 p-4 gap-4")}>
    <Image src={Nav1LDesc} alt={""} className={"w-fit"} />
    {assets.nav.items[0].children.map((props, index) => (
      <SubNavCard {...props} key={index} />
    ))}
    {/*<SubNavCard cat={"关于我们"} name={"使命&目标"} />*/}
    {/*<SubNavCard cat={"关于我们"} name={"机构简介"} />*/}
  </div>
);
