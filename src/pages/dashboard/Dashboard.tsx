import { Bottom } from "../../components/dashboards/Bottom"
import Top from "../../components/dashboards/Top"


export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col bg-[#f4f5f7] gap-y-6 justify-center">
      <Top/>
      <Bottom />
    </div>
  )
}
