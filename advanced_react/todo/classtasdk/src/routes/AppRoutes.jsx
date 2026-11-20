import { Route,Routes } from "react-router-dom"
import Todo from "../Pages/Todo"
import NavBar from "../Component/NavBar"

const AppRoutes = () => {
  return (
    <>
   
    <Routes>
   <Route path="/" element={<Todo/>}/>

    </Routes>
    
     <NavBar/>
    
    </>
  )
}

export default AppRoutes