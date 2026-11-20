import {useState} from "react"

const Student = () => {
  const [ studentdetail,setStudentdetail]= useState([
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 }
])
 const handleadd=()=>{
   const copy =[...studentdetail]
   const add ={ id:4,name:'Dhanush',marks:'95'}
   copy.push(add)
   setStudentdetail(copy)
 }
 const handleupdate=(eid)=>{
  setStudentdetail((p)=>[...p].map((e,i)=>i==eid?{...e,marks:86}:e))
}
 
    
  return (
    <>
 
    <div>
      {studentdetail.map((e,i)=>(
        <div key={i}className="bg-pink-200 my-1 p-2 h-20 flex justify-center gap-10">
        <h2>{e.id}</h2>
         <h2>{e.name}</h2>
          <h2>{e.marks}</h2>
         <button onClick={()=>handleupdate(i)} className="bg-green-600 flex justify-between  text-white p-2 rounded w-30 mx-3">Update</button>
      <button onClick={()=>handleadd(i)} className="bg-rose-400 flex justify-between text-white p-2 rounded w-30 mx-3 ">Add</button>
    </div>
     ))}

        </div>
     
     
    
    </>
  )
}

export default Student