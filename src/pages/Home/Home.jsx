import Contact from "../Contact/Contact"
import Experience from "../Experience/Experience"
import Hero from "../Hero/Hero"
import Footer from "../Navbar/Footer"
import Header from "../Navbar/Header"
import TravelInfo from "../TravelInfo/TravelInfo"
import TravelPlace from "../TravelPlace/TravelPlace"

const Home = () => {
  return (
    <div>
        <Header />
        <Hero/>
        <TravelInfo />
        <TravelPlace />
        <Experience />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home