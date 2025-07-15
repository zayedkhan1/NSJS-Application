import React, { useState } from 'react';
const images = [
  {
    src: "https://i.ibb.co/5W6QNg1F/slide1.jpg",
    title: "বৃক্ষরোপণ কর্মসূচি",
    description: "স্কুল শিক্ষার্থীদের মাঝে হাজারো গাছের চারা বিতরণ এবং পরিবেশ সচেতনতা বৃদ্ধি।",
  },
  {
    src: "https://i.ibb.co/WvSg3XXZ/slide2-1.jpg",
    title: "স্বাস্থ্য ও রক্তদান",
    description: "ফ্রি মেডিকেল ক্যাম্প, ব্লাড ডোনেশন এবং স্বাস্থ্য সচেতনতা প্রোগ্রাম।",
  },
  {
    src: "https://i.ibb.co/p6mRw695/slide3.jpg",
    title: "মানবিক সহায়তা",
    description: "ত্রাণ বিতরণ, ঈদ উপহার, দুঃস্থদের সহায়তা ও দুর্যোগকালীন কার্যক্রম।",
  },
//   {
//     src: "https://source.unsplash.com/random/800x400?mountain",
//     title: "Majestic Mountains",
//     description: "Reach the heights of adventure.",
//   },
];
const OurProject = () => {
    const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
    
    return (
    <div>
             <div className='mt-8 p-4'>

                <h2 className='text-2xl text-center font-bold mb-5 '>আমাদের প্রকল্পসমূহ</h2>
                {/* carasoule */}
                <div className=''>
                      <div className="
      relative w-full mx-auto overflow-hidden rounded-xl shadow-lg
      max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]
      h-[200px]  sm:h-[250px] md:h-[300px] lg:h-[400px]
    ">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="
              relative w-full flex-shrink-0
              h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]
            "
          >
            <img
              src={img.src}
              alt={img.title}
              className="
                w-[800px] h-[400px] object-cover
              "
            />

            {/* 🔷 NEW: Details Div */}
            <div
              className="
                absolute bottom-0 left-0 w-full
                bg-black/50 text-white p-2 sm:p-4
              "
            >
              <h2 className="text-sm sm:text-base md:text-lg font-bold">{img.title}</h2>
              <p className="text-xs sm:text-sm md:text-base">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`
              w-3 h-3 rounded-full
              ${idx === current ? "bg-white" : "bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
                   
                </div>

            </div>
    </div>

        
    );
};

export default OurProject;