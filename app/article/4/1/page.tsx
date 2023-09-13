import data from "./data.json"
import { Hero } from "@/components/Hero"

export default function Page() {
  return (
    <div className={"flex flex-col gap-8"}>
      {data.map(({ name, avatar, desc }, index) => (
        <Hero key={index} name={name} avatar={avatar || `/img_${index + 1}.png`} desc={desc} />
      ))}
    </div>
  )
}
