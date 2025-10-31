import React from 'react'
import Hero from './components/Hero';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <div className="px-4 py-8 md:py-16">
        <iframe
          className="w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-video lg:aspect-[3/2] overflow-hidden rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App
