import React from 'react'

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[url('https://dp2414.github.io/Html-Css-Bootstrap-project/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
        {/* Hero Text */}
        <div className="text-center space-y-4 max-w-4xl">
          <h3 className="text-[#208a59] font-bold text-lg md:text-xl">
            Welcome to Moso Interior
          </h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Decorate a beautiful Interior for your space
          </h1>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-4xl bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-end">
            <div className="flex-1">
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                Product
              </label>
              <input
                type="text"
                id="product"
                className="w-full h-12 px-4 border-2 border-[#c7c7c9] rounded focus:outline-none focus:border-[#ffd854] transition-colors"
                placeholder="Books, Living Room"
              />
            </div>
            
            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <select
                id="price"
                className="w-full h-12 px-4 border-2 border-[#c7c7c9] rounded focus:outline-none focus:border-[#ffd854] transition-colors bg-white"
              >
                <option value="">$500 to $990</option>
                <option value="">$1000 to $2900</option>
                <option value="">$3000 - $5000</option>
              </select>
            </div>

            <button className="w-full md:w-auto bg-[#f65129] hover:bg-[#e04520] px-8 py-3 text-lg font-medium rounded text-white transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ffd74f] text-2xl md:text-3xl flex items-center justify-center text-white animate-bounce cursor-pointer hover:bg-[#ffcc00] transition-colors">
          ↓
        </div>
      </div>
    </section>
  );
}

export default Hero
