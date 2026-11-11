import {Link} from "react-router-dom"
import image from "../assets/image/fox.jpg"


const NavBar = () => {
  return (
    <>
<div className = "flex items-center justify-between bg-blue-500 p-2">
    <div className="mx-10">
       <img src={image} className=" w-16 h-16 " alt="logo" />
       <p >CHENNAI IT COMPANIES</p>
    </div>

    <div className="flex gap-15 mx-10 text-white">
<Link to="./">Home</Link>
<Link to="./About">About</Link>
<Link to="./Contact">Contact</Link>
<button>Logout</button>
</div>
</div>
    </>
  )
}

export default NavBar