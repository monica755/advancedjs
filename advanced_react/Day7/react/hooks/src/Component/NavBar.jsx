import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <>
    <div className="bg-amber-200 gap-3 flex justify-between items-center p-8">
        <div>
            logo

        </div>
        <div className="gap-8 flex">
            <Link to='/'>Hooks</Link>
            <Link to='/product'>Product</Link>
            <Link to='/productlist'>Productlist</Link>

        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default NavBar