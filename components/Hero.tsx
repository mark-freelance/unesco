import { AspectRatio } from "@/components/ui/aspect-ratio"
import { assets, ITeacher } from "@/config/assets"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export const HeroInTeachersPage = ({ id, name, avatar, desc }: ITeacher) => {
  return (
    <>
      <a className="anchor" id={id}></a>
      <div className={"w-full flex flex-col gap-2"}>
        <p className={"font-bold"}>
          {name.zh} ({name.en})
        </p>

        <div className={"w-full flex gap-4"}>
          <div className={"w-40 shrink-0"}>
            <AspectRatio ratio={3 / 4}>
              <Image src={avatar} alt={""} fill sizes={"width:120px;"} />
            </AspectRatio>
          </div>
          <div>
            <ReactMarkdown>{desc}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export const HeroInHomePage = ({ avatar, name, id }: ITeacher) => {
  return (
    <Link className={"flex flex-col gap-2 w-[160px]"} href={`/article/4/1#${id}`}>
      <AspectRatio ratio={3 / 4}>
        <Image src={avatar} alt={""} fill sizes={"width:160px;"} />
      </AspectRatio>
      <p>{name.zh}</p>
      <p>{name.en}</p>
    </Link>
  )
}

export const HeroesInTeachersPage = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      {assets.general.teachers.map((props) => (
        <HeroInTeachersPage {...props} key={props.id} />
      ))}
    </div>
  )
}
