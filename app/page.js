import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Services"
import Packages from "./components/PopularPackages.jsx"
import Quickresponse from "./components/Quickresponse"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Whatsapp from "./components/Whatsapp";
import GoldSparkleBackground from "./components/GoldSparkleBackground"
const Home = () => {
  return (
    <div className="min-h-screen w-full size-18  bg-gray-950">
      <GoldSparkleBackground/>
      <Navbar/>
      <Hero/>
      <Features/>
      <Packages/>
      <Quickresponse/>
      <Testimonials/>
      <Whatsapp />
      <Footer/>
    </div>
  )
}

export default Home