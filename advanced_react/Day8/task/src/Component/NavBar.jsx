import { Link } from "react-router-dom"


const NavBar = () => {
  return (
<>
<div className="bg-blue-300 p-10 flex justify-between">
<div>
    logo
</div>
<div className="gap-6 flex">
 <Link to ="/">Home</Link>
  <Link to ="/about">About</Link>
   

</div>
</div>
</>
  )
}

export default NavBar