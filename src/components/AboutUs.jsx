import doctor2 from '../assets/doctor2.jpeg'
import d3 from '../assets/d3.jpeg'
import d4 from '../assets/d4.jpeg'
import React from "react";



const About1 = () => {
  return (
    <>
    <div id='about-us' className="bg-gradient-to-b from-green-200 to-green-300 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#14452F] dark:text-white py-12">
      
      <section className="overflow-hidden lg:pt-[10px] lg:pb-[90px] lg:px-3 ">
        <div className="container mx-auto">
          <h2 className=" font-bold text-4xl underline ml-14 decoration-orange-600">About Us</h2>
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 sm:w-8/12 sm:m-auto lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 lg:w-9/12">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={d4}
                      alt="p3"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={d3}
                      alt="p2"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                  
                    <img
                      src={doctor2}
                      alt="p1"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block text-lg font-semibold text-primary">
                  Why
                </span>
                <span className="mb-4 text-3xl font-semibold text-orange-600 dark:text-[#ADFF2F]">Choose Us</span>
                <h2 className="relative border-t-[2px] border-black mb-5 text-3xl font-bold dark:border-white text-dark sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color ">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
              </div>
            <button className="border border-black px-2 rounded-md hover:bg-black duration-300 hover:text-white py-2">Know more</button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About1;
