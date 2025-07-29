import React, { useEffect, useState } from 'react';
import News from '../Constant/ProjectData';

const RecentNews = () => {
 const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock fetching data
    setArticles(News );
  }, []);
    return (
        <div  className='shadow'>
            <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
            সাম্প্রতিক সংবাদ
      </header>
         
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
              <h2 className="text-xl  sm:text-2xl font-semibold mb-3">
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



        </div>
    );
};

export default RecentNews;