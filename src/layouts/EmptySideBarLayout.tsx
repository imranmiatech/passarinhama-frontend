import { Outlet } from "react-router-dom"

const EmptySideBarLayout = () => {
  return (
   <div className="w-full flex h-screen">
   
  
        <main className="w-full">
          <Outlet /> {/* nested routes content render here */}
        </main>
      </div>

  )
}

export default EmptySideBarLayout