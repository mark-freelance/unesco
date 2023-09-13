import { Banner } from "@/components/banner";
import { Intro } from "@/components/content/1_intro";
import { Welcome } from "@/components/content/2_welcome";
import { More } from "@/components/content/3_more";
import { News } from "@/components/content/4_news";
import { Teachers } from "@/components/content/5_teachers";
import { Separator } from "@/components/ui/separator";

export default function IndexPage() {
  return (
    <>
      <Banner />

      <section className="w-full max-w-[1400px] mx-auto container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {[Intro, Welcome, More, News, Teachers].map((Ele) => (
          <>
            <Separator orientation={"horizontal"} className={"first:hidden"} />
            <Ele />
          </>
        ))}
      </section>
    </>
  );
}
