// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div className='pt-6 flex justify-evenly bg-gradient-to-b from-green-300 to-green-400 h-screen'>
//       <div className="contact-us gap-4" id="contact-us">
//         <h2 className='text-5xl font-bold mb-6'>Contact Us</h2>
//         <div className=''>
//           <div className="mb-9 flex flex-col text-black lg:ml-5 lg:mr-4 rounded-[20px] h-96 bg-green-50 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
//             <form className="contact-form gap-2 flex flex-col">
//               <label className='font-semibold '>
//                 Name:
//               </label>
//                 <input className='border-black border' type="text" name="name" required />
//               <label className='font-semibold'>
//                 Email:
//               </label>
//                 <input className='border border-black' type="email" name="email" required />
//               <label className='font-semibold'>
//                 Message:
//               </label>
//                 <textarea className='border-black border' name="message" required></textarea>
//               <button type="submit">Submit</button>
//             </form>

//           </div>
//         </div>

//       </div>
//       <div>
//         <div className="map">
//           {/* Google Maps Embed */}
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531785!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674099812345!5m2!1sen!2sus"
//             width="400"
//             height="250"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             title="TechNova Location"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here, e.g., sending data to a backend server.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id='contact-us' className="flex justify-evenly sm:flex-col lg:flex-row dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#212224] dark:text-white sm:gap-2 items-center min-h-screen bg-gradient-to-b from-green-300 to-green-400">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="">
           {/* Google Maps Embed */}
           <iframe
           className=""
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531785!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674099812345!5m2!1sen!2sus"
             width="600"
             height="450"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             title="TechNova Location"
           ></iframe>
         </div>
    </div>
  );
};

export default ContactUs;

