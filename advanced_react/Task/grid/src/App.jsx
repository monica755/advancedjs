import { useState } from "react"


const App = () => {
 const[Todo,setTodo]=useState("")
 const[save,setSave]=useState([])
 const handleChange=(e)=>{
 setTodo(e.target.value)
}
  const handleClick=()=>{
  const copy=[...save]
  copy.push(Todo)
  setSave(copy)
  setTodo("")
}





  return (
    <>
  <div>
<input onChange={handleChange} type="text" placeholder="Enter the Name" value={Todo}  />
<button onClick={handleClick} className="bg-blue-300 gap-2">Add</button>
</div>
 {
  save.map((e,i)=>{
    <div key={i}>
    <p>{e}</p>
      </div>
  })




 }



    </>
  )
}

export default App