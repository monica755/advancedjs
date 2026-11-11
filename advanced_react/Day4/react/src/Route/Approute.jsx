import {Route,Routes} from "react-router-dom"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import About from "../Pages/About"


const Approute = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
</>
  )
}

export default Approute