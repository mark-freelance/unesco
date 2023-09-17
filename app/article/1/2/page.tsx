import { HeroInTeachersPage } from "@/components/Hero"
import { assets } from "@/config/assets"

export default function Page() {
  return (
    <div className={"flex flex-col gap-8"}>
      <h2 className={"text-2xl"}>专家团队</h2>

      {assets.general.teachers.map((props) => (
        <HeroInTeachersPage {...props} key={props.id} />
      ))}
    </div>
  )
}
