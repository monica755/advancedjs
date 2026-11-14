import diwalivideo from "../assets/Images/diwalivideo.mp4"

const Home = () => {
  return (
    <>
<div className="bg-white shadow-2xl h-150 flex p-10 justify-center text-center">
<div className="">  
    <h2 className=" ">MY DIWALI CELEBRATION</h2>
    <video className="my-5 mx-80" src={diwalivideo} controls autoPlay muted loop> diwalivideo</video>
    <h2 className="font-semibold">Welcome to My Diwali Celebration! Diwali is one of the most beautiful and special festivals in India. It is known as the Festival of Lights. People celebrate this festival with happiness, love, and joy.</h2>
</div>
</div>




    </>
  )
}

export default Home