import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo.jpg'
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";


function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (

    <div id='home' className='bg-gradient-to-b from-green-50 to-green-100 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#212224] dark:text-white '>
      <header>
        <div className='flex justify-between'>
          <div className='px-3 flex text-xl'>
            <i className="mt-3 mr-1 ri-align-item-top-fill"></i>
            <span className='w-auto mt-3 h-8 font-bold'>Tech</span>
            <span className='w-auto mt-3 h-8 font-bold text-green-500'>Nova</span>
          </div>
          <div className='flex gap-4 mr-7'>
            <div className='flex'>
              <div className='font-semibold mt-3 pt-3'>
                <a className='mr-4 hover:underline hover:text-gray-600' href="#home">Home</a>
                <a className='mr-4 hover:underline hover:text-gray-600' href="#services">Services</a>
                <a className='mr-4 hover:underline hover:text-gray-600' href="#about-us">About Us</a>
                <a className='mr-4 hover:underline hover:text-gray-600' href="#contact-us">Contact Us</a>
              </div>
              <button className="mt-3 inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white rounded-2xl transition-all duration-300">Get Started</button>
            </div>
            <button
              onClick={toggleDarkMode}
              className="flex items-center mt-3 justify-center w-10 h-10 rounded-full"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

        </div>

      </header>

      <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 class="text-4xl font-bold dark:text-white text-black sm:text-6xl lg:text-7xl">
                Empowering Innovation,
                <div class="relative inline-flex">
                  <span class="absolute inset-x-0 bottom-0 lg:border-b-[20px] border-b-[25px] border-[#20a952]"></span>
                  <h1 class="relative text-4xl font-bold text-black dark:text-white sm:text-6xl">Shaping the Future.</h1>
                </div>
              </h1>

              <p class="mt-8 sm:text-xl dark:text-white text-black ">TechNova is a cutting-edge technology solutions provider, dedicated to driving digital transformation across industries. From building dynamic web applications to implementing smart AI and ML systems, TechNova is your partner in navigating the future of technology.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8 ">
                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button">Get Started <i className="ri-arrow-right-line ml-1"></i> </a>
              </div>
            </div>
            <div>
              <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <InfiniteMovingCardsDemo />
    </div>
  )
}
export default Home
