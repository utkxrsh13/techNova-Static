
import Contact from "./ContactFrom/Contact";

const ContactUs = () => {
  return (<>

<div
  id="contact-us"
  className="flex flex-col sm:flex-col lg:flex-row gap-4 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#212224] dark:text-white min-h-screen bg-gradient-to-b from-green-300 to-green-400"
>
  <div className="gap-2 flex flex-col sm:flex-col lg:flex-row justify-evenly w-full">
    <div className="rounded-l p-3 w-full">
      <h2 className="text-4xl dark:text-white inline-block font-bold mb-6 underline decoration-orange-600 ml-14 text-gray-800">
        Contact Us
      </h2>
      <Contact />
    </div>

    <div className="w-full mt-16 mr-16 max-w-xl">
      <iframe
        className="w-full h-96 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531785!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674099812345!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="TechNova Location"
      ></iframe>
    </div>
  </div>
</div>

    {/* <div
      id="contact-us"
      className="flex flex-row sm:flex-col lg:flex-row gap-4 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#212224] dark:text-white min-h-screen bg-gradient-to-b from-green-300 to-green-400"
    >
      <div className="gap-4 flex justify-evenly">
        <div className="rounded-l p-3 w-full ">
          <h2 className="text-2xl dark:text-white font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <Contact />
        </div>

        <div className="w-full max-w-xl">
         
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531785!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674099812345!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="TechNova Location"
          ></iframe>
        </div>
      </div>
    </div> */}


  </>
  );
};

export default ContactUs;

