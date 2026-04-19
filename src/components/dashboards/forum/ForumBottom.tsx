import CategoriesList from "./CategoriesList"
import RightSidebarList from "./RightSidebarList"



export const ForumBottom = () => {
    return (
        <div>
            <div className="px-4 py-3 bg-[#FFFBEB] items-center border border-[#F59E0B40]/25 rounded-[10px] font-['DM_Sans'] font-bold text-[16px] leading-[100%] tracking-normal text-[#92400E]">
                ⚠️ 4 sujets <span className="font-normal">attendent votre validation</span>, 3 signalements <span className="font-normal">sont en cours de traitement.</span>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-6 mt-5">

                <div className="w-full lg:w-2/3 min-w-0 overflow-hidden">
                    <CategoriesList />
                </div>

                <div className="w-full lg:w-1/3 min-w-0">
                    <RightSidebarList />
                </div>

            </div>

        </div>
    )
}
