import{ Route, Routes } from "react-router-dom"
import NavBar from "../Component/NavBar"
import StableID  from "../Pages/StableID"
import Formdetail from "../Pages/Formdetail"


const AppRoutes = () => {
  return (
   <>
   <NavBar/>
   <Routes>
   
   <Route path="/" element={<Formdetail/>}/>
   <Route path="/StableID" element={<StableID/>}/>
   
   </Routes>
   </>
  )
}

export default AppRoutes