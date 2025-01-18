import React from "react";

const Service = () => {
  return (
    <div id="services" className="bg-gradient-to-b from-green-100 to-green-200 dark:bg-gradient-to-b dark:from-[#14452F] dark:to-[#14452F] dark:text-white">
      <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[10px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-xl font-semibold underline">
                  Our Services
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] dark:text-white text-black sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap dark:text-black">
            <ServiceCard
              icon={
                <img className="h-[300px] w-[500px]" src="https://imgs.search.brave.com/-9blWCOyuTSURR7l7n62beFsJZWT_I5M7vkTRUW8wUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzM3LzA1Lzk3/LzM2MF9GXzkzNzA1/OTc3OV9HWXp2WmhH/NHJ5MVRKTFFpUWFh/cEQ4Y01heEhVVGpY/ZC5qcGc"></img>
              }
              title="Web Development"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."

            />
            <ServiceCard
            icon={
              <img className="h-[300px] w-[500px]" src="https://imgs.search.brave.com/7v2MIuYDKtOVoGEf5wl0uKK9ByZSUIcsUEWxbjY2dOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9ja2hlZWRtYXJ0/aW4uY29tL2NvbnRl/bnQvZGFtL2xvY2to/ZWVkLW1hcnRpbi9l/by9waG90by9haS1t/bC9TeXN0ZW1zLU1h/Y2hpbmVMZWFybmlu/Zy5qcGcucGMtYWRh/cHRpdmUuZnVsbC5t/ZWRpdW0uanBn"></img>
            }
              title="AI/ML"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."

            />
            <ServiceCard
            icon={
              <img className="h-[300px] w-[500px]" src="https://imgs.search.brave.com/YThm5PUUCZr7U7ip_HyBvtvU3KBt5ukJ-YXi7mSZ5uM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA4/NjQ2MjUxMi9waG90/by9odW1vcm91cy1t/b2JpbGUtY2xvdWQt/Y29tcHV0aW5nLWNv/bmNlcHR1YWwtaW1h/Z2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXVldmE4UzFX/STVuWUpPRV9fTlRV/R0ZzWDFDaGluNWlz/R1pONUhkYVd4djg9"></img>
            }
              title="Cloud Computing"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-2 sm:w-1/2 md:w-1/2 lg:w-1/3">
        <div className="mb-9 lg:ml-5 lg:mr-4 rounded-[20px] bg-green-50 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
          <div className="mb-3 flex h-auto items-center justify-center rounded-2xl">
            {icon }
          </div>
          <h4 className="mb-[14px] underline text-2xl font-semibold text-dark">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
