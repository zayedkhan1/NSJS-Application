import React from 'react';
import AboutLogo from '../../assets/Logos/roundedLogo.png'

const AboutUs = () => {
     const timelineItems = [
    { id: 1, text: 'শিক্ষা', },
    { id: 2, text: 'সেবা' },   
    { id: 3, text: 'সহযোগিতা' }  
  ];
    return (
        <div className='mt-10'>
    <div className="flex flex-col md:flex-row items-center justify-around   gap-6  shadow p-5">
  {/* Image Div */}
  <div className=" flex justify-center items-center p-4 w-full md:w-1/2">
    <img
      className="max-w-full md:max-w-[350px] h-auto rounded-full"
      src={AboutLogo}
      alt=""
    />
  </div>

  {/* Text Div */}
  <div className=" p-4 w-full md:w-1/2">
    <h2 className="text-xl font-bold mb-3 text-center md:text-left ">
      নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন
    </h2><hr  className='border-1 mb-3 border-gray-300' />

    <p className="text-sm leading-relaxed text-justify font-sans  ">
      নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন একটি অরাজনৈতিক, অলাভজনক ও সেবামূলক যুব
      সংগঠন। আমরা মানবতার সেবা, সমাজ সংস্কার, দরিদ্র ও অসহায় মানুষের পাশে
      দাঁড়ানো, শিক্ষা, স্বাস্থ্যসেবা ও সচেতনতা বৃদ্ধি সহ নানাবিধ কল্যাণমূলক
      কার্যক্রমের মাধ্যমে একটি ন্যায়ভিত্তিক ও মানবিক সমাজ গড়ার জন্য কাজ করে
      যাচ্ছি। আমাদের লক্ষ্য হলো মানুষের মধ্যে নৈতিকতা ও মানবিক মূল্যবোধ জাগ্রত
      করা, আর্তমানবতার সেবায় সবাইকে উদ্বুদ্ধ করা এবং সমাজের পিছিয়ে পড়া
      মানুষদের জন্য সহায়ক পরিবেশ তৈরি করা। আমরা কর্মসংস্থান সৃষ্টির উদ্যোগ,
      ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে চিকিৎসাসেবা, পরিচ্ছন্নতা ও স্বাস্থ্য
      সচেতনতামূলক কর্মসূচি এবং শিক্ষামূলক প্রকল্প পরিচালনার মাধ্যমে মানুষের পাশে
      থাকার চেষ্টা করছি।
    </p>

    {/* desgine */}

<div className="flex items-center  font-sans mt-6">
      <div className="relative">
        {/* Vertical line connecting the circles */}
        <div className="absolute left-1/8 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        {timelineItems.map((item) => (
          <div key={item.id} className="flex items-center mb-8 last:mb-0">
            {/* Circle marker */}
            <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-green-400  font-bold">
              {/* This is the small green dot */}
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>

            {/* Text content */}
            <div className="ml-4 text-sm text-green-600  ">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
        {/* desgine */}


  </div>
</div>

            
        </div>
    );
};

export default AboutUs;