import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    
    
    <>
 <div className="bg-blue-400 flex p-5 justify-between">
   <div>
         DIWALI CELEBRATION
   </div>
   <div className="flex gap-8 text-white">
    <Link to="/">Home</Link>
    <Link to="/SpecialMemories">Special Memories</Link>



   </div>










    </div>
    
    
    
    
    
    
    </>
  )
}

export default NavBar