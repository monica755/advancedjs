import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
  <div className='bg-amber-200 p-2 flex justify-around items-center'>
       <div >Logo</div>
       <div className='mx-15 flex gap-15'>
        <Link to={"/"}>Todo</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar