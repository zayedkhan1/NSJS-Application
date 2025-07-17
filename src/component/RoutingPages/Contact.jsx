import React from 'react';
const googleMapsEmbedSrc=`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d493.59427260059465!2d90.55622584933718!3d23.830765989137536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1752756907494!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`

const Contact = () => {
    return (
        <div>
            
             <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Header */}
      <header className="bg-green-700 py-4 md:py-6 text-center shadow-md">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          যোগাযোগ
        </h1>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              যোগাযোগ ফর্ম
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  <span className="text-red-500 mr-1">*</span>আপনার নাম:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  <span className="text-red-500 mr-1">*</span>আপনার ইমেইল:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                  <span className="text-red-500 mr-1">*</span>যোগাযোগের বিষয়:
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  <span className="text-red-500 mr-1">*</span>বার্তা:
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-y"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300"
                >
                  প্রেরণ করুন
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Address and Map */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
                আমাদের ঠিকানা?
              </h2>
              <div className="relative w-full h-64 md:h-72 bg-gray-200 rounded-md overflow-hidden shadow-inner">
                {/* Placeholder for Google Map - In a real application, you'd embed an iframe */}
               
           <iframe
                    src={googleMapsEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title=" নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন ঠিকানা "
                  ></iframe>
                {/* Overlay for map details as seen in the screenshot */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-3 text-sm md:text-base">
                  <p className="font-semibold text-gray-900">নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন </p>
                  <p className="text-gray-700">৩ রাস্তা মোড়, কাঞ্চন বাজার</p>
                  <div className="flex items-center justify-between mt-2 text-xs md:text-sm">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-1 text-gray-600">4.8 (23 reviews)</span>
                    </div>
                    <a
                      href='#'
                      className="text-blue-600 hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View larger map
                    </a>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium mt-1 block text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Detailed Address Section */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
                বিস্তারিত ঠিকানা
              </h2>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
                <p><span className="font-semibold">ঠিকানা:</span></p>
                <p>নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন </p>
                <p>৩ রাস্তা মোড়, কাঞ্চন বাজার (ডিশের অফিসের  বিপরীতে),</p>
                <p>কাঞ্চন বাজার , রূপগঞ্জ , নারায়ণগঞ্জ</p>

                <p className="pt-3"><span className="font-semibold">মোবাইল:</span></p>
                <p>
                  <a href="tel:+8801743-402987" className="text-blue-600 hover:underline">
                     01743-402987
                  </a>
                </p>

                <p className="pt-3"><span className="font-semibold">ইমেইল:</span></p>
                <p>
                  <a href="mailto:nsjsofficial2020@gmail.com" className="text-blue-600 hover:underline">
                    nsjsofficial2020@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;