import React, { useState } from 'react';
import { navItems } from '../Constant/ProjectData';

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