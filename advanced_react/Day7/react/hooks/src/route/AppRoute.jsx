import { Route,Routes } from "react-router-dom"
import Product from "../Pages/Product"
import Hooks from "../Pages/Hooks"
import Productlist from "../Pages/Productlist"

const AppRoute = () => {
  return (
   <>

 <Routes>
<Route path="/Productlist" element={<Productlist/>}/>
<Route path="/Hooks" element={<Hooks/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/productlist/:productid" element={<Product/>}/>




 </Routes>
</>
  )
}

export default AppRoute