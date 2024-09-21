const Hero = () => {
    return ( 
      <div className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/JkW6HZN/hero-img.png"
            className="h-full rounded-lg" alt="Travel"
          />
          <div>
            <h1 className="text-2xl font-bold">Join the travel</h1>
            <p className="py-6 text-5xl font-bold">
              <span className="text-2xl">Going to travel join with</span> <br />
              Saifur Enterprise..
            </p>
            <button className="rounded-xl px-16 py-5 text-white text-xl bg-red-600 font-bold">Join a Travel</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  