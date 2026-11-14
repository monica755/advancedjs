import { useNavigate } from "react-router-dom"


const Productlist = () => {

const navigate = useNavigate()

 const data =[{productName:"laptop",price:80000,BuyerName:"moni"},
  {productName:"Mouse",price:5200,BuyerName:"Fami"},
  {productName:"Watch",price:400,BuyerName:"Deeps"}]
   
const handleBuy =(click)=>{
  
  navigate(`/productlist/${click}`)

}



return (
    <>
    <div className=" p-10 flex gap-70 justify-center items-center h-100">
  {data.map((e,i)=>(

  <div key={i} className=" shadow p-10 w-50">
    <h2 className="text-2xl font-bold">{e.productName}</h2>
    <h2>{e.price}</h2>
    <h2>{e.BuyerName}</h2>
    <button onClick={()=>handleBuy(i)}className="bg-black text-white px-5 py-2 rounded mt-4"><b>Buynow</b></button>
  </div>






  ))}






    </div>
    
    
    
    
    </>



  )
}

export default Productlist