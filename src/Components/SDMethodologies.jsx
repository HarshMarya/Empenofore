import React from "react";
import leftImg from "../Images/left.png";
import banner5 from "../Images/4.png";

function SDMethodologies() {
  return (
    <div className="relative p-4 md:p-20 overflow-hidden">
      <img
        src={leftImg}
        className=" absolute -z-10 -left-5 top-10"
        width={"210px"}
      />
      <img
        src={leftImg}
        className=" absolute -z-10 -right-5 rotate-180 bottom-[450px]"
        width={"210px"}
      />
      <section className=" ">
        <div className="container my-20">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-center">
            Software Development Methodologies
          </h3>
          <div className="flex lg:gap-10 sm:gap-4 lg:p-10 sm:p-4 flex-col lg:flex-row">
            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center justify-center text-4xl font-extrabold w-[170px] h-[170px] border-[#02427A] border-7 rounded-full">
                <span>99%</span>
              </div>
              <h4 className="text-sm my-3 text-center font-bold">
                SOFTWARE-AS-A-SERVICE
              </h4>
              <p className="text-center text-sm lg:text-base">
                Also known as cloud-based software. It can be customized for
                specific business uses.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center justify-center text-4xl font-extrabold w-[170px] h-[170px] border-[#02427A] border-7 rounded-full">
                <span>99%</span>
              </div>
              <h4 className="text-sm my-3 text-center font-bold">
                TEST AUTOMATION FOR CLOUD-NATIVE STACK
              </h4>
              <p className="text-center text-sm lg:text-base">
                It is critical for creating, reliable, and scalable
                applications. Uses resources found in the cloud. Finds the
                end-to-end solutions.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center justify-center text-4xl font-extrabold w-[170px] h-[170px] border-[#02427A] border-7 rounded-full">
                <span>99%</span>
              </div>
              <h4 className="text-sm my-3 text-center font-bold">
                FUNCTION-AS-A-SERVICE
              </h4>
              <p className="text-center text-sm lg:text-base">
                The Application can be managed by customers. The resource
                allocation is looked after by the cloud provider.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center justify-center text-4xl font-extrabold w-[170px] h-[170px] border-[#02427A] border-7 rounded-full">
                <span>99%</span>
              </div>
              <h4 className="text-sm my-3 text-center font-bold">
                MOBILE APPLICATION THAT CONNECT TO CLOUD SERVICES
              </h4>
              <p className="text-center text-sm lg:text-base">
                Is a combination of both desktop apps and web apps. Local
                components work together in a congruent manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex lg:justify-around items-center flex-col lg:flex-row md:gap-10 p-4 lg:p-10 my-10 bg-[#F6F6F6]">
        <div className="lg:w-1/2 p-4">
          <h3 className="text-3xl lg:text-5xl font-extrabold mb-4">
          Custom solutions for your business
          </h3>
          <p className="text-sm lg:text-base">
          For business transformations empowered by digital technology, business domain experience is significant. Right business questions are asked by the experts in the domain to analyze and address. Our consultants inflame our digital excellence to build improved cloud solutions and leverage your domain expertise.
          </p>
          <button className="text-sm lg:text-base bg-[#E24077] p-3 text-white uppercase mt-10">
            Read More
          </button>
        </div>
        <div>
          <img src={banner5} className="w-[500px]" alt="banner-5" />
        </div>
      </section>
    </div>
  );
}

export default SDMethodologies;
