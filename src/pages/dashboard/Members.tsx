import Top from "../../components/dashboards/member/Top"
import MembersPage from "./Memberspage"


export const Members = () => {
  return (
    <div className="w-full flex flex-col bg-[#f4f5f7] gap-y-6 justify-center">
      <Top/>
      <MembersPage />
    </div>
  )
}
