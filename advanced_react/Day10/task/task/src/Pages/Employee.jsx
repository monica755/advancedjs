import { useState } from "react"


const Employee = () => {
 const [Emp,setEmp]=useState(
  [{id:1,name:"Moni",salary:30000},
    {id:2,name:"Dhanu",salary:60000},
    {id:3,name:"Fami",salary:40000}
  ]
 )
 const click=()=>{
  let copy =[...Emp]
  const process = copy.filter((e,i)=>e.salary>40000)
  setEmp(process)
 }


  return (
    <>
   <div className="bg-blue-300  h-100 flex justify-center items-center ">
     {Emp.map((e,i)=>(
      <div key={i}>
        <div className="bg-amber-50 flex flex-col h-50 w-50 mx-5 p-4 justify-center items-center gap-4">
  <h2>{e.id}</h2>
  <h2>{e.name}</h2>
  <h2>{e.salary}</h2>
   </div>
   </div>
  ))}
  
  <button onClick={click} className="bg-emerald-500 items-center flex justify-around my-20 rounded p-2 text-bold">clickme</button>




   </div>







    </>
  )
}

export default Employee