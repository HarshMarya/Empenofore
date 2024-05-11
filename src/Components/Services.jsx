import React from "react";
import about from "../Images/about.png";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoMdCloudDone } from "react-icons/io";
import { SiAzuredevops } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import leftImg from "../Images/left.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="relative overflow-hidden">
      <img
        src={leftImg}
        className=" absolute -z-10 -right-5 rotate-180 top-20"
        width={"210px"}
      />
      <img
        src={leftImg}
        className=" absolute -z-10 -left-5 top-[770px]"
        width={"210px"}
      />
      <div className="lg:p-20 sm:p-6">
        <h3 className="text-3xl lg:text-5xl text-center font-bold text-[#121826] mt-10">
          Our Services
        </h3>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-center md:my-10">
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <TbDeviceAnalytics className="text-7xl text-[#02427A]" />
            <div className="mt-2">
              <Link
                to="/bigdata&analytics"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer py-4"
              >
                Big Data & Analytics
              </Link>
              <p className="text-sm lg:text-base my-4">
                Our analytics through a set of processes and technologies
                transform raw data into an informative one so that it can be
                used to enable operational insights and decision making.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <GiTeamIdea className="text-7xl text-[#02427A] mx-4" />
            <div className="mt-2">
              <Link
                to="/agiletransformation"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                Agile transformation
              </Link>
              <p className="text-sm lg:text-base my-4">
                Agile transformation requires the business to be reviewed and
                reorganized whose product is an increment in revenue.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <IoMdCloudDone className="text-7xl text-[#02427A] mx-4" />
            <div className="mt-2">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                Cloud First
              </Link>
              <p className="text-sm lg:text-base my-4">
                We mutate and deploy cloud-native solutions by training your
                teams, assessing your way of working, and providing managed
                cloud services. We are up for any cloud challenge.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <SiAzuredevops className="text-7xl text-[#02427A] mx-4" />
            <div className="mt-2">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                DevSecOps
              </Link>
              <p className="text-sm lg:text-base my-4">
                We are practitioners of continuous delivery and integration. We
                follow shift-left practices of placing security at each stage of
                DevSecOps from deployment automation to source code management.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <GiArtificialIntelligence className="text-7xl text-[#02427A] mx-4" />

            <div className="mt-2">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                AI/ML
              </Link>
              <p className="text-sm lg:text-base my-4">
                To implement solutions that leverage artificial intelligence and
                machine learning, we work with our data science consultantsant
                work that results in the renovation of your business offerings
                and workflows.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <MdOutlineSecurity className="text-7xl text-[#02427A] mx-4" />
            <div className="mt-2">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                Security Testing
              </Link>
              <p className="text-sm lg:text-base my-4">
                Through techniques, we deliver the continuous delivery pipeline
                and speed up your go-to-market.
              </p>
            </div>
          </div>
          <div className=" flex bg-[#F6F6F6] flex-col items-center p-4 max-w-sm mx-2 my-4 shadow-lg overflow-hidden">
            <FaComputer className="text-7xl text-[#02427A] mx-4" />
            <div className="mt-2">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-semibold hover:underline cursor-pointer text-center"
              >
                UI/UX
              </Link>
              <p className="text-sm lg:text-base my-4">
                Increases user interaction and drive sales. We provide an
                enjoyable experience for your targeted audience.
              </p>
            </div>
          </div>
        </div>

        <section className="flex justify-around items-center lg:gap-10 flex-col lg:flex-row sm:gap-0 md:gap-10 p-4 lg:p-10 bg-[#F6F6F6]">
          <div>
            <img src={about} alt="" className="lg:w-[500px] w-[450px]" />
          </div>
          <div className="lg:w-1/2 p-6">
            <h3 className="text-3xl lg:text-5xl font-extrabold mb-4">
              Cloud based Excellence
            </h3>
            <p className="text-sm lg:text-base">
              We work across an oodles of technology paradigms through several
              software development methodologies, have a glance at our focus and
              experience in the following.
            </p>
            <button className="bg-[#E24077] p-2 text-white uppercase text-sm mt-10">
              Read More
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services;
