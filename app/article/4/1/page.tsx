import data from "./data.json"
import { Hero } from "@/components/Hero"

export default function Page() {
  return (
    <div className={"flex flex-col gap-8"}>
      <h2 className={"text-2xl"}>专家团队</h2>
      {data.map(({ name, avatar, desc }, index) => (
        <Hero key={index} name={name} avatar={avatar || `/core/img_${index + 1}.png`} desc={desc} />
      ))}
    </div>
  )
}
