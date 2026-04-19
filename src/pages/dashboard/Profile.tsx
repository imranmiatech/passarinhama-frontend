import { Outlet } from "react-router-dom"
import LeftNav from "../../components/dashboards/Profile/Leftnav"
// import ProfilePage from "../../components/dashboards/Profile/Profilepage"


function Profile() {
  return (
    <div className="w-full flex flex-col  md:flex-row">
      <LeftNav />
      <Outlet/>
    </div>
  )
}

export default Profile