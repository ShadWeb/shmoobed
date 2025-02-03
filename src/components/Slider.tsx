"use client";
import { useState, useEffect } from "react";

const slides = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLhEA-SKTksKyksOJKbk_SMVgNOrbvD7w2Q&s",
  "https://cdn.corporatefinanceinstitute.com/assets/marketing.jpeg",
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6raYLjyH11Umgs86wx3lNF/b54297568e758730aa65f2a1c92258c7/GettyImages-1211395020.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl h-full  mx-auto overflow-hidden rounded-lg ">
      <div className="flex transition-transform h-full duration-500 ease-in-out   items-stretch justify-evenly transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} className="w-full flex-shrink-0 rounded-lg" alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-1 rounded-full">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
}
