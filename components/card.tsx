import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export const KnowMoreButton = () => {
  return (
    <Button className={"w-fit"} size={"thin"}>
      {"了解更多 ->"}
    </Button>
  );
};

export const CardComp = ({
  image,
  textImage,
  textCenter,
  withKnowMoreButton,
  pos,
  children,
}: {
  image: StaticImageData;
  textImage?: StaticImageData;
  textCenter?: boolean;
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
          "flex flex-col gap-4 w-full",
          pos !== "outer-bottom" && "absolute inset-0 px-8 py-16",
          pos === "inner-left-bottom" && "justify-end"
        )}
      >
        {textImage && <Image src={textImage} alt={""} className={cn("w-fit", textCenter && "mx-auto")} />}
        {withKnowMoreButton && <KnowMoreButton />}
      </div>
    </div>
  );
};
