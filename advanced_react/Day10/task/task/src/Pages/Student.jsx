import {useState} from "react"

const Student = () => {
  const [ studentdetail,setstudent]= useState([
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 }
])
  return (
    <>
 
    <div>
      {studentdetail.map((e,i)=>(
        <div key={i}className="bg-pink-200 my-1 p-2 h-20 flex justify-center gap-10">
        <h2>{e.id}</h2>
         <h2>{e.name}</h2>
          <h2>{e.marks}</h2>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Student