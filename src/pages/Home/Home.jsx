import AboutUs from "../AboutUs/AboutUs"
import Contact from "../Contact/Contact"
import Experience from "../Experience/Experience"
import Testimonial from "../Experience/Testimonial"
import Hero from "../Hero/Hero"
import Footer from "../Navbar/Footer"
import Header from "../Navbar/Header"
import PackageSection from "../Package/PackageSection.jsx"
import ServicesSection from "../Service/ServicesSection.jsx"
// import PackageTab from "../Package/PackageTab.jsx"
import TravelInfo from "../TravelInfo/TravelInfo"
import TravelPlace from "../TravelPlace/TravelPlace"


const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <TravelInfo />
      <PackageSection />
      {/* <PackageTab /> */}
      <ServicesSection />
      <TravelPlace />
      <Testimonial />
      <Experience />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home