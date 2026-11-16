

const Home = () => {
const arrobj=[{name:"dhanu",age:20,job:"developer"},
    {name:"moni",age:22,job:"web developer"},
    {name:"thanuja",age:24,job:"mern developer"}
]


  return (
    <>
   <div>
   {
   arrobj.map((e,i)=>(
    <div key={i}>
     <h3>{e.name}</h3>
     <h3>{e.age}</h3>
     <h3>{e.job}</h3>
     
    </div>

   ))
   }





   </div>




    </>
  )
}

export default Home