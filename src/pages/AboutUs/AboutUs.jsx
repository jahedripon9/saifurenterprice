import about from '../../assets/about.jpg'
import owner from '../../assets/owner.jpg'

const AboutUs = () => {
  return (
    <div className="container mx-auto" id="about">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
     <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={about} />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src={owner} alt="" />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Md Saifur Rahman Sabul </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">
            Oowner of Saifur Enterprise, recognized for his leadership and innovative approach in driving the company's success.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Saifur Enterprise is your trusted partner for seamless travel experiences. We offer personalized services including flight bookings, hotel reservations, tour packages, and visa assistance. Whether for leisure or business, our team ensures a smooth and hassle-free journey. Explore the world with confidence – we’ve got your travel covered!</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUs