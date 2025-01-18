import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo.jpg'
import BlurText from './heroText/BlurText';

function Home() {

  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen(!isNavbarOpen);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  }

  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);  // Toggle between 'dark' and 'light'
  };

  return (

    <div id='home' className='bg-gradient-to-b from-green-50 to-green-100 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#212224] dark:text-white '>

      <header className="relative">
        <div className="flex justify-between">
          <div className="px-3 flex text-xl">
            <i className="mt-3 mr-1 ri-align-item-top-fill"></i>
            <span className="w-auto mt-3 h-8 font-bold">Tech</span>
            <span className="w-auto mt-3 h-8 font-bold text-green-500">Nova</span>
          </div>
          <div className="flex gap-4 mr-7">
            <div className="flex items-center">
              <button
                className="sm:hidden mt-3 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-lg transition-all"
                onClick={toggleNavbar}
              >
                <i className="ri-menu-line text-xl"></i>
              </button>
              <div className={`font-semibold mt-3 pt-3 sm:flex gap-4 ${isNavbarOpen ? 'block' : 'hidden'} sm:block`}>
                <a className="mr-4 hover:underline hover:decoration-orange-600 hover:text-gray-300" href="#home">Home</a>
                <a className="mr-4 hover:underline hover:decoration-orange-600 hover:text-gray-300" href="#services">Services</a>
                <a className="mr-4 hover:underline hover:decoration-orange-600 hover:text-gray-300" href="#about-us">About Us</a>
                <a className="mr-4 hover:underline hover:decoration-orange-600 hover:text-gray-300" href="#contact-us">Contact Us</a>
              </div>
            </div>
            <button className={`mt-3 inline-flex items-center justify-center ${isNavbarOpen ? 'hidden' : 'block'} px-5 py-2.5 text-base font-semibold text-black border-2 border-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white rounded-2xl transition-all duration-300`}>
              Get Started
            </button>
          </div>
        </div>
        
      </header>
      <button
            onClick={toggleTheme}
            className="fixed w-10 h-10 rounded-full bg-green-600 dark:bg-gray-800 text-black dark:text-white shadow-lg transition-all"
            style={{
              bottom: '1rem',
              right: '1rem',
              zIndex:50,  
            }}
          >
            {toggleTheme ? '🌙' : '☀️'}
          </button>
      <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>

              <BlurText
                text="Empowering Innovation, Shaping the Future."
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl font-bold dark:text-white text-black sm:text-6xl lg:text-7xl"
              />


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

    </div>
  )
}
export default Home
