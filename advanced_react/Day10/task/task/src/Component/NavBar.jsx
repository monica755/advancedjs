import {Link} from "react-router-dom"

const NavBar = () => {
  return (
   <>
<div className="bg-blue-500 justify-center p-6">
 <div>logo</div>
<div className="justify-center gap-6 flex font-bold ">
 <Link to ="/">Employee</Link>
 <Link to="/Product">Product</Link>
 <Link to="/Student">Student</Link>
</div>
</div>
   
   
   
   
   
   
   </>
  )
}

export default NavBar