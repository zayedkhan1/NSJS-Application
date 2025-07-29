import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';

import RecentNews from './RecentNews';
import { Link } from 'react-router-dom';
import News, { Project } from '../Constant/ProjectData';
import PreFooter from './PreFooter';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const featuredProjects = Project.slice(0, 6);
  const featuredNews = News.slice(0, 2);
  const [selected, setSelected] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock fetching data
    setArticles(featuredNews);
  }, []);



  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      {/* project */}

      <section>
        <h2 className='text-3xl text-center font-bold mb-5 mt-5'>আমাদের প্রকল্পসমূহ</h2>

        <div className="bg-gray-100 min-h-screen py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              >
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-green-700">{item.title}</h2>
                  <p className="text-sm text-gray-600 mt-2 flex-1">{item.short}</p>
                  <button
                    onClick={() => setSelected(item)}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded"
                  >
                    সম্পূর্ণ দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selected && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
                <h2 className="text-xl font-semibold text-green-700 mb-4">{selected.title}</h2>
                <img src={selected.image} alt={selected.title} className="h-40 w-full object-cover rounded mb-4" />
                <p className="text-sm text-gray-700">{selected.full}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* project */}
      {/* <RecentNews></RecentNews> */}
      {/* Recent news */}

      <section className='shadow'>
        <h2 className='text-3xl font-bold text-center mt-5 mb-5'>সাম্প্রতিক সংবাদ</h2>

        <div>
          {articles.map((article, idx) => (
            <div
              key={idx}
              className={`max-w-6xl mx-auto my-8 bg-white shadow-md rounded overflow-hidden flex flex-col sm:space-y-3 md:flex-row
    transform transition duration-300 hover:scale-[1.02] hover:shadow-lg ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
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
          <Link to='/news'>
            <button
              className="inline-flex items-center px-5 py-2 border-2 bg-green-500 hover:bg-green-600 border-green-600 text-white font-medium rounded-lg hover:shadow-lg active:scale-95 active:bg-green-700 active:border-green-700 active:shadow-inner transition transform duration-150 mb-5"
            >
              আরও
              <IoIosArrowDown className='text-xl' />
            </button>
          </Link>
        </div>
      </section>

      <PreFooter></PreFooter>


    </div>
  );
};

export default Home;