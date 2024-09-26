import AboutUs from "../AboutUs/AboutUs"
import Contact from "../Contact/Contact"
import Experience from "../Experience/Experience"
import Hero from "../Hero/Hero"
import Footer from "../Navbar/Footer"
import Header from "../Navbar/Header"
import PackageSection from "../Package/PackageSection.jsx"
// import PackageTab from "../Package/PackageTab.jsx"
import TravelInfo from "../TravelInfo/TravelInfo"
import TravelPlace from "../TravelPlace/TravelPlace"


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TravelInfo />
      <PackageSection />
      {/* <PackageTab /> */}
      <TravelPlace />
      <Experience />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home