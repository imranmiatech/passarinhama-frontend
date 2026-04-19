import { Bottom } from "../../components/dashboards/Bottom"
import Top from "../../components/dashboards/Top"


export const Dashboard = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-y-6 overflow-auto p-4 md:p-6">
      <Top />
      <Bottom />
    </div>
  );
};
