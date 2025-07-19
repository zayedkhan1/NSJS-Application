import React, { useState } from 'react';
const navItems = [
  {
    id: 1,
    title: "পরিচিতি",
    content: `🌟 নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন একটি স্বেচ্ছাসেবী, অরাজনৈতিক ও মানবিক সংগঠন। সমাজের অসহায় 🤝, সুবিধাবঞ্চিত ও পিছিয়ে পড়া মানুষের পাশে দাঁড়ানোই এ সংগঠনের মূল লক্ষ্য। তরুণদের উদ্যম ও শক্তিকে 💪 কাজে লাগিয়ে সমাজে মানবিকতা ❤️, সচেতনতা 🕊️ ও ন্যায়বোধ ⚖️ ছড়িয়ে দেওয়ার জন্য এ সংগঠন কাজ করছে।

📚 শিক্ষা, 🩺 স্বাস্থ্য, 🩸 রক্তদান, 🌳 বৃক্ষরোপণ, 🌊 বন্যা ও দুর্যোগকালীন ত্রাণ বিতরণ, 👶 এতিম শিশুদের সাহায্য, 🧹 পরিচ্ছন্নতা অভিযানসহ নানাভাবে সমাজের সেবা করে যাচ্ছেন এ সংগঠনের সদস্যরা। নিঃস্বার্থভাবে মানুষকে সাহায্য করা এবং একটি সুন্দর 🌈, সমৃদ্ধ ও মানবিক 🕊️ সমাজ গড়ে তোলাই এ সংগঠনের মূল আদর্শ।

🚀 এই সংগঠন বিশ্বাস করে—যুব সমাজই পরিবর্তনের মূল শক্তি। তাই “মানুষ মানুষের জন্য” ✨ এই মন্ত্রে উজ্জীবিত হয়ে তারা অবিরাম কাজ করে যাচ্ছে। তাঁদের লক্ষ্য একটি এমন সমাজ গড়া, যেখানে কেউ অবহেলিত বা অসহায় বোধ করবে না। 🌍`,
  },
  {
    id: 2,
    title: "নীতি ও আদর্শ",
    content:[
      '🕊️ মানবিকতা: মানুষের প্রতি ভালোবাসা ও সহানুভূতি নিয়ে অসহায় ও বিপদগ্রস্ত মানুষের পাশে দাঁড়ানো আমাদের প্রথম ও প্রধান নীতি।',
      '⚖️ ন্যায় ও সমতা: সমাজে সকলের প্রতি সমান দৃষ্টিভঙ্গি রেখে ন্যায়বিচার ও সমতার ভিত্তিতে কাজ করা আমাদের অঙ্গীকার।',
      '🤝 সহযোগিতা ও একতা: সদস্যদের মধ্যে পারস্পরিক সহযোগিতা 🤗 ও ঐক্য বজায় রেখে সমাজে শান্তি ও সৌহার্দ্য ছড়িয়ে দেওয়া আমাদের আদর্শ।',
      '🌱 পরিবেশ-সচেতনতা: প্রকৃতি ও পরিবেশ 🌳 রক্ষায় সচেতনতা বাড়ানো এবং পরিবেশবান্ধব কর্মকাণ্ডে অংশ নেওয়া আমাদের নৈতিক দায়িত্ব।',
      '📚 জ্ঞান ও শিক্ষা: শিক্ষার আলো 📖 সমাজের প্রতিটি মানুষের কাছে পৌঁছে দিতে কাজ করা এবং জ্ঞানচর্চায় উৎসাহিত করা আমাদের লক্ষ্য।',
      '💪 সাহস ও দৃঢ়তা: অন্যায়ের বিরুদ্ধে সাহসিকতার সাথে দাঁড়ানো ✊ এবং সমাজে ইতিবাচক পরিবর্তন আনার জন্য দৃঢ়ভাবে কাজ করা আমাদের অঙ্গীকার।',
    ]
  },
  {
    id: 3,
    title: "লক্ষ্য ও উদ্দেশ্য",
    content:
  [
    '🌈 মানবিক সমাজ গড়া: সমাজে মানবিকতা, সহমর্মিতা ও ন্যায়বোধ ছড়িয়ে দিয়ে একটি সুন্দর ও সমৃদ্ধ সমাজ গড়ে তোলা।',
    '🤝 অসহায় মানুষের পাশে দাঁড়ানো: সুবিধাবঞ্চিত, অসহায় ও বিপদগ্রস্ত মানুষের পাশে দাঁড়িয়ে তাদের জীবনযাত্রা সহজ করা।',
    '📚 শিক্ষা ও সচেতনতা বৃদ্ধি: শিক্ষা 📖 ও সামাজিক সচেতনতা বাড়িয়ে সমাজের অগ্রগতি নিশ্চিত করা।',
    '🩸 স্বাস্থ্যসেবা ও রক্তদান: স্বাস্থ্যসেবা 🩺 পৌঁছে দেওয়া, রক্তদান কর্মসূচি 🩸 ও স্বাস্থ্য সচেতনতা ছড়িয়ে দেওয়া।',
    '🌳 পরিবেশ রক্ষা ও বৃক্ষরোপণ: প্রকৃতি ও পরিবেশ 🌱 রক্ষায় কাজ করা এবং বেশি বেশি বৃক্ষরোপণ করা।',
    '🚀 যুব শক্তির উন্নয়ন: তরুণ সমাজকে 💪 মানবিক ও ন্যায়পরায়ণ করে গড়ে তোলা, যাতে তারা সমাজ পরিবর্তনের অগ্রদূত হয়। ',
    '🌊 দুর্যোগকালীন সহায়তা: বন্যা, অগ্নিকাণ্ড, ঘূর্ণিঝড়সহ যেকোনো প্রাকৃতিক দুর্যোগে দ্রুত ত্রাণ ও সহায়তা পৌঁছে দেওয়া।',
  ]
  },
  {
    id: 4,
    title: "কার্যক্রম",
    content:
      "প্রতিষ্ঠানের বিভিন্ন কার্যক্রম যেমন শিক্ষা, দাওয়াহ, মানবকল্যাণমূলক কাজ ইত্যাদি সম্পর্কিত বিস্তারিত তথ্য এখানে প্রদর্শিত হবে।",
  },
    {
    id: 5,
    title: "তহবিল ও আয়ের উৎস",
    content:
      "এই অংশে তহবিল সংগ্রহ এবং আয়ের বিভিন্ন উৎসগুলি সম্পর্কে তথ্য প্রদান করা হবে। এখানে স্বচ্ছতা এবং আর্থিক দায়িত্ব সম্পর্কে কথা বলা হবে।",
  },
  {
    id: 6,
    title: "ব্যয়ের নীতিমালা",
    content:
      "ব্যয় সম্পর্কে নীতিমালা এবং আর্থিক ব্যবহার সংক্রান্ত নিয়মাবলী এখানে থাকবে যাতে প্রতিষ্ঠানের আর্থিক শুদ্ধতা নিশ্চিত হয়।",
  },
  {
    id: 7,
    title: "অর্জনসমূহ",
    content:
      "প্রতিষ্ঠানের অর্জন এবং সাফল্যের বিবরণ এখানে প্রদর্শিত হবে, যা প্রতিষ্ঠানের বিশ্বস্ততা ও দক্ষতা প্রকাশ করে।",
  },
];
 
const AboutOurs = () => {
      const [activeId, setActiveId] = useState(1);


    return (
        <div>
            <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 w-full text-white p-5 text-center font-serif text-2xl md:text-3xl">
        আমাদের সম্পর্কে
      </header>
       {/* Main content */}
      <div className="flex w-full flex-1 flex-col md:flex-row max-w-7xl mx-auto">
        {/* Navigation */}
        <nav className="bg-white border-r border-gray-300 w-full md:w-64 min-h-[calc(20vh-64px)]">
          <ul className="divide-y divide-gray-200">
            {navItems.map(({ id, title }) => (
              <li key={id}>
                <button
                  onClick={() => setActiveId(id)}
                  className={`
                    w-full px-6 py-4 text-left
                    ${
                      activeId === id
                        ? "text-green-700 border-l-4 border-green-700 font-semibold bg-green-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                    transition-colors duration-200
                    focus:outline-none
                  `}
                  aria-current={activeId === id ? "page" : undefined}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Content */}
        {/* <main className="flex-1 p-6">
          <article className="bg-white rounded-lg shadow-lg p-6 prose max-w-none prose-lg">
            <h2 className="font-serif text-xl mb-4">
                {navItems.find(n => n.id === activeId)?.title}
            </h2>
            <p>{navItems.find(n => n.id === activeId)?.content}</p>
          </article>
        </main> */}
        <main className="flex-1 p-6">
            <article className="bg-white rounded-lg shadow-lg p-6 prose max-w-none prose-lg">
              <h2 className="font-serif text-xl mb-4">
                {navItems.find(n => n.id === activeId)?.title}
              </h2>
              {Array.isArray(navItems.find(n => n.id === activeId)?.content) ? (
                // <ul className="list-none pl-5 space-y-2">
                    
                //   {navItems.find(n => n.id === activeId)?.content.map((item, index) => (
                    
                //     <li key={index} class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:border-2 before:border-blue-500 before:flex before:items-center before:justify-center after:content-[''] after:absolute after:left-1 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-blue-500 after:rounded-full">{item}</li>
                //   ))}
                // </ul>
                <ul className="list-none pl-8 relative">
  {/* vertical line */}
  <div className="absolute left-10 top-0 bottom-2 w-0.5 bg-gray-300"></div>

  {navItems.find(n => n.id === activeId)?.content.map((item, index) => (
    <li
      key={index}
      className="relative pl-6 mb-4 last:mb-0"
    >
      {/* outer circle */}
      <span className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-green-500 bg-white flex items-center justify-center">
        {/* inner dot */}
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
      </span>
      {item}
    </li>
  ))}
</ul>
              ) : (
                <p>{navItems.find(n => n.id === activeId)?.content}</p>
              )}
            </article>
          </main>
      </div>
    </div>
        </div>
    );
};

export default AboutOurs;