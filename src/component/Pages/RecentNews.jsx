import React, { useEffect, useState } from 'react';

const RecentNews = () => {
 const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock fetching data
    const data = [
      {
        image: "https://i.ibb.co/5W6QNg1F/slide1.jpg",
        title: " ৪র্থ বর্ষপূর্তি উপলক্ষে বৃক্ষ বিতরণ ও আলোচনা সভা অনুষ্ঠিত",
        description:
          "নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠনের ৪র্থ বর্ষপূর্তি উপলক্ষে এক বর্ণাঢ্য আয়োজনের মাধ্যমে বৃক্ষ বিতরণ ও আলোচনা সভার আয়োজন করা হয়। অনুষ্ঠানে অতিথিরা সংগঠনের মানবকল্যাণমূলক কার্যক্রমের প্রশংসা করেন এবং পরিবেশ সংরক্ষণে গাছ লাগানোর গুরুত্ব তুলে ধরেন। বৃক্ষ বিতরণ কার্যক্রমের মাধ্যমে পরিবেশবান্ধব সমাজ গঠনে সংগঠনের ভূমিকা আরও এক ধাপ এগিয়ে যায়। আলোচনা সভায় সংগঠনের ভবিষ্যৎ পরিকল্পনা ও যুবসমাজের অংশগ্রহণের গুরুত্ব নিয়েও আলোচনা করা হয়।",
        moreLink: "#",
        date: "July 1, 2025",
        author: "zayed",
      },
      {
        image: "https://i.ibb.co/yBFRz6YL/medical-camp.jpg",
        title: "স্বাস্থ্যসেবা ও ব্লাড ক্যাম্পে অংশগ্রহণ",
        description:
          " নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন মানবিক উদ্যোগের অংশ হিসেবে স্বাস্থ্যসেবা ও ব্লাড ক্যাম্পে অংশগ্রহণ করে। এই আয়োজনের মাধ্যমে অসহায় ও দরিদ্র মানুষের মাঝে বিনামূল্যে চিকিৎসা সেবা, ওষুধ বিতরণ এবং স্বেচ্ছায় রক্তদানের গুরুত্ব তুলে ধরা হয়। যুব সমাজের স্বতঃস্ফূর্ত অংশগ্রহণে ক্যাম্পটি সফলভাবে সম্পন্ন হয় এবং সমাজে মানবিক সচেতনতা বৃদ্ধিতে বিশেষ ভূমিকা রাখে।এছাড়া উপস্থিত চিকিৎসকরা বিভিন্ন স্বাস্থ্যবিষয়ক পরামর্শ প্রদান করেন এবং রক্তদাতাদের সনদপত্র বিতরণ করা হয়। এ ধরনের কার্যক্রম আগামীতেও অব্যাহত রাখার অঙ্গীকার ব্যক্ত করা হয়। ",
        moreLink: "#",
        date: "July 2, 2025",
        author: "Riden",
      },
      {
        image: "https://i.ibb.co/twsV4Hch/Nobin-Kormoshala.jpg",
        title: "নবীনদের নিয়ে মানবিকতা বিষয়ক প্রশিক্ষণ কর্মশালা",
        description:
          " নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠনের উদ্যোগে নবীন সদস্যদের নিয়ে মানবিকতা বিষয়ক একটি প্রশিক্ষণ কর্মশালার আয়োজন করা হয়। কর্মশালায় মানবিক মূল্যবোধ, সমাজসেবার গুরুত্ব ও স্বেচ্ছাসেবীর দায়িত্ব নিয়ে আলোচনা করা হয়। নতুনদের মধ্যে মানবিকতা ও সহমর্মিতা জাগ্রত করতে অভিজ্ঞরা বাস্তব উদাহরণ ও দিকনির্দেশনা প্রদান করেন।এছাড়া, অংশগ্রহণকারীদেরকে বিভিন্ন সামাজিক কর্মকাণ্ডে সম্পৃক্ত হওয়ার জন্য উদ্বুদ্ধ করা হয় এবং তাদেরকে একটি সনদপত্র প্রদান করে সম্মানিত করা হয়।",
        moreLink: "#",
        date: "July 3, 2025",
        author: "shahed",
      },
    ];
    setArticles(data);
  }, []);
    return (
        <div  className='shadow'>
            <h2 className='text-3xl font-bold text-center mt-5 mb-5'>সাম্প্রতিক সংবাদ</h2>
         
{/*  */}
             <div>
      {articles.map((article, idx) => (
        <div
          key={idx}
           className={`max-w-6xl mx-auto my-8 bg-white shadow-md rounded overflow-hidden flex flex-col sm:space-y-3 md:flex-row
    transform transition duration-300 hover:scale-[1.02] hover:shadow-lg ${
      idx % 2 === 1 ? "md:flex-row-reverse" : ""
  }`}
            style={{ height: "350px" }}
        >
          {/* Image */}
          <div className="md:w-1/2 relative h-64 md:h-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between h-full overflow-y-auto scroll-hidden">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-3 text-sm sm:text-base">
                {article.description}
              </p>
              <a
                href={article.moreLink}
                className="text-blue-600 hover:underline text-sm"
              >
                More...
              </a>
            </div>

            {/* Footer */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1">📅 {article.date}</div>
              <div className="flex items-center gap-1">👤 {article.author}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

<div className='text-center'>
       {/* <button>আরো</button> */}
 <button
  className="
    inline-flex items-center px-5 py-2 border-2 bg-blue-500 hover:bg-blue-600 border-blue-600 text-white font-medium rounded-lg
     hover:shadow-lg
    active:scale-95 active:bg-blue-700 active:border-blue-700 active:shadow-inner
    transition transform duration-150 mb-5
  "
>
আরও
  <svg
    className="w-5 h-5 ml-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
  </svg>
</button>
</div>

        </div>
    );
};

export default RecentNews;