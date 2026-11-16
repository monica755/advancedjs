import { Route, Routes } from "react-router-dom"
import Employee from '../Pages/Employee'
import  Product from '../Pages/Product'
import Student from '../Pages/Student'
import NavBar from "../Component/NavBar"

const Approutes = () => {
  return (
    <>
    <NavBar/>
    
    <Routes>
<Route path="/" element={<Employee/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/Student" element={<Student/>}/>
</Routes>
    
    </>
  )
}

export default Approutes