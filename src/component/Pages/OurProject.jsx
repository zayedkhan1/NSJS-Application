import React, { useState } from 'react';
import { Project } from '../Constant/ProjectData';

const OurProject = () => {
  const [selected, setSelected] = useState(null);

   
    
    return (
    <div>
      {/* <h2 className='text-3xl text-center font-bold mb-5 mt-5'>আমাদের প্রকল্পসমূহ</h2> */}
      <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
       আমাদের প্রকল্পসমূহ
      </header>
 <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Project.map((item) => (
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
    </div>

        
    );
};

export default OurProject;