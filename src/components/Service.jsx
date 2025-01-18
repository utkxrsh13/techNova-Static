import React from "react";
import Card1 from "./cards/card1";

const Service = () => {
  return (
    <div id="services" className="bg-gradient-to-b h-screen from-green-100 to-green-200 dark:bg-gradient-to-b dark:from-[#212224] dark:to-[#14452F] dark:text-white">
      <section className="pb-14 pt-20 lg:pb-[90px] lg:pt-[10px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-5 block text-xl font-semibold underline">
                  Our Services
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] lg:text-5xl dark:text-white text-black sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 m-auto sm:grid-cols-2 mx-auto lg:ml-8 lg:grid-cols-3 dark:text-black">
            <Card1 src={"https://imgs.search.brave.com/4xetkNz0EId7bNIhJCr5IYJg2qJwofgbZgj96EfKwS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjMw/MDE5NzIwL3Bob3Rv/L2Nsb3VkLWNvbXB1/dGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WlBqaDl0/R3JGZTZLcXdBcUww/NlNTWTc2cjV0b3h3/cGFJOEVPZHZMMFNj/RT0"} title ={"Cloud Computing"} desc = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}/>
            <Card1 src={"https://imgs.search.brave.com/AgQ39c1NKOZpXXF_MdLi6KZmmGzGcCACKWQBQdN0-H0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzY1LzI1LzQ5/LzM2MF9GXzI2NTI1/NDkxNV9SRjNjQ1hy/VVhkNzUyVGxDRTA2/R2dYZkxEcHh4ZjVn/eC5qcGc"} title={"Artificial Inteligence"} desc = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}/>
            <Card1 src={"https://imgs.search.brave.com/UE9fxyzuRQOqIdpyeVzex038udhcEWCzkENB3aSfkUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzE0Lzg3Lzk2/LzM2MF9GXzIxNDg3/OTY4Nl9SM0hGSmxr/NldMcjFrY2R2eTZR/OXJ0TkFTS04wQlpC/Uy5qcGc"} title={"Web Development"} desc = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}/>
            <Card1 src={"https://imgs.search.brave.com/g2n_kSi0HAEpK8u6ZB2Gu-eo0HU1-6PVuF2B6MFAsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXJp/bmctcm9ib3QtbGVh/cm5pbmctbWFjaGlu/ZS1sZWFybmluZy13/aXRoLWVkdWNhdGlv/bi1odWQtaW50ZXJm/YWNlXzQ5MzgwNi01/OTgwLmpwZz9zZW10/PWFpc19oeWJyaWQ"} title={"Machine Learning"} desc = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
