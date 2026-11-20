import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-cyan-200 p-5 flex justify-center gap-8 font-bold">
    <Link to="/">Formdetail</Link>
    <Link to="/StableID">StableId</Link>
<div>
   <form>
      <select name="Status" id="Status">
        <option value="status">Status</option>
        <option value="In progress">In progress</option>  
        <option value="Pending">Pending</option>    
        <option value="Completed">Completed</option>     
    </select>
</form>
</div>
</div>
    </>
  )
}

export default NavBar