import { ForumBottom } from "../../components/dashboards/forum/ForumBottom"
import Top from "../../components/dashboards/forum/Top"

export const Forums = () => {
    return (
        <div className="w-full flex flex-col p-5 lg:p-10 bg-[#f4f5f7] gap-y-6 justify-center ">
            <Top />
            <ForumBottom />
        </div>
    )
}
