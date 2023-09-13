import { AspectRatio } from "@/components/ui/aspect-ratio";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export const SubNavCard = ({ bg, fg }: { bg: StaticImport; fg: StaticImport }) => {
  return (
    <div className={"w-32 "}>
      <AspectRatio ratio={1} className={"relative"}>
        <Image src={bg} alt={""} fill sizes={"width:128px;"} />
        <div className={"absolute w-full h-full | flex items-center justify-center z-10"}>
          <Image src={fg} alt={""} className={"w-fit"} />
        </div>
      </AspectRatio>
    </div>
  );
};
