import image from '../assets/image/chennai.jpg'
const Home = () => {
  return (
    <>
    <title>IT COMPANIES IN CHENNAI</title>
    <img src={image} className="w-1120 h-100 object-cover center  " alt="image"/>
    <p className=" font-medium text-center text-sm p-5">Chennai is a major Indian technology hub and the second-largest exporter of IT and IT-enabled services in the country. The city's tech ecosystem spans global IT giants, prominent SaaS companies, and specialized local software firms</p>
    </>
  )
}

export default Home