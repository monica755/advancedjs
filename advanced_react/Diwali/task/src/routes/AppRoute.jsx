import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import NavBar from "../Component/NavBar"
import SpecialMemories from "../Pages/SpecialMemories"

const AppRoute = () => {
  return (
    <>
     <NavBar/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      
      <Route path = "/SpecialMemories" element={<SpecialMemories/>}/>


    </Routes>
    
    
    </>
  )
}

export default AppRoute