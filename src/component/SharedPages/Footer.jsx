import React from 'react';
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div>
                
            </div>
            {/* <footer className=" text-black py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-3xl">🌟</div>
            <h1 className="text-xl font-bold">
সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন</h1>
          </div>
          <p className="text-sm text-gray-600">
            আমাদের সর্বশেষ আপডেট, ছবি, ভিডিও ও কর্মসূচির খবর পেতে সোশ্যাল মিডিয়াতে আমাদের সাথে থাকুন। আপনার মতামত ও অংশগ্রহণ আমাদেরকে আরও অনুপ্রাণিত করে। আসুন, একসাথে ভালো কিছু করি!
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href='https://www.facebook.com/nssofficial2020' target='blank'><i><FaFacebook className='text-blue-600' /> </i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-telegram-plane"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

     
  

    
        <div>
          <h2 className="text-lg font-bold mb-4">যোগাযোগ করুন </h2>
          <div className="text-sm text-gray-600 flex flex-col gap-2">
            <p>
              📍 কাঞ্চন, কাঞ্চন বাজার ১৪৬১, রূপগঞ্জ, নারায়ণগঞ্জ।
            </p>
            <p>📞  01743402987</p>
            <p>📞  01580361432</p>
            <p>📞  01724161022</p>
            <p>📧 nsjsofficial2020@gmail.com</p>
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-4 text-center">আমাদের সদস্য হোন</h2>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="px-4 py-2 bg-transparent border border-gray-400 rounded text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="px-4 py-2 bg-transparent border border-gray-400 rounded text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="মন্তব্য করুন"
              rows="3"
              className="px-4 py-2 bg-transparent border border-gray-400 rounded text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
            >
              
               পাঠান
            </button>
          </form>
        </div>
      </div>
      <div className='text-center mt-8 shadow bg-blue-400'>
        স্বত্ব © 2025 নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন - সর্ব স্বত্ব সংরক্ষিত। কারিগরি সহায়তায় zayed khan।
        <br />পরিষেবার শর্তাবলী | গোপনীয়তা নীতি
      </div>
    </footer> */}
    <footer className="bg-gray-50 text-gray-800 pt-10">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Social Media Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="text-3xl">🌟</div>
        <h1 className="text-2xl font-semibold">
          সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন
        </h1>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        আমাদের সর্বশেষ আপডেট, ছবি, ভিডিও ও কর্মসূচির খবর পেতে সোশ্যাল মিডিয়াতে আমাদের সাথে থাকুন। আপনার মতামত ও অংশগ্রহণ আমাদেরকে আরও অনুপ্রাণিত করে। আসুন, একসাথে ভালো কিছু করি!
      </p>
      <div className="flex gap-3 mt-4 text-2xl">
        <a href="https://www.facebook.com/nssofficial2020" target="_blank" rel="noreferrer" >
          <FaFacebook className='text-blue-600' />
        </a>
        <a href="#" className="hover:text-sky-500 transition">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="#" className="hover:text-red-500 transition">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Contact Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-4 ">যোগাযোগ করুন</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <p>📍 কাঞ্চন, কাঞ্চন বাজার ১৪৬১, রূপগঞ্জ, নারায়ণগঞ্জ।</p>
        <p>📞 01743-402987</p>
        <p>📞 01580-361432</p>
        <p>📞 01724-161022</p>
        <p>📧 nsjsofficial2020@gmail.com</p>
      </div>
    </div>

    {/* Membership Form */}
    <div className=" rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800  mb-4">
        আমাদের সদস্য হোন
      </h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="আপনার নাম লিখুন"
          className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="আপনার ইমেইল"
          className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <textarea
          placeholder="মন্তব্য করুন"
          rows="3"
          className="px-4 py-2 border border-gray-300 rounded text-sm placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded shadow-sm text-sm transition"
        >
          পাঠান
        </button>
      </form>
    </div>
  </div>

  <div className="text-center mt-10 py-4 bg-blue-100 text-gray-700 text-sm shadow-inner">
    স্বত্ব © 2025 <span className="font-medium">নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন</span> - সর্ব স্বত্ব সংরক্ষিত। কারিগরি সহায়তায় <span className="font-semibold">Zayed Khan</span>।<br />
    <a href="#" className="underline hover:text-blue-600">পরিষেবার শর্তাবলী</a> | <a href="#" className="underline hover:text-blue-600">গোপনীয়তা নীতি</a>
  </div>
</footer>

            
        </div>
    );
};

export default Footer;