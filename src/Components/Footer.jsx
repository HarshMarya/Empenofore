import React from "react";
import logo from "../Images/logo.jpg";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date()
    const year = date.getFullYear()

  return (
  <>
    <footer className="flex justify-evenly bg-[#02427A] w-full lg:p-20 text-white flex-col lg:flex-row p-10">
      <div className="lg:w-1/3 sm:w-full md:w-full md:wx-auto">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <p className="my-6 text-gray-300">
          We get a wiggle on your business transformation by leveraging best-fit
          CLOUD NATIVE technologies. We are digital consultants to solve &
          deliver.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-xl my-2 lg:my-6">Site Map</h4>
        <div className="flex gap-20 md:gap-20">
          <ul>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/bigdata&analytics">Big Data & Analytics</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/agiletransformation">Agile transformation</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/cloud-integration">Cloud-First</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/">DevSecOps</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/">Mobile Development</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="/">UI/UX</Link>
            </li>
          </ul>
          <ul>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="#">Platform Architect</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="#">AI/Ml</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="#">Security Testing</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="#">Automation</Link>
            </li>
            <li className="hover:bg-white hover:text-black lg:py-2 lg:pr-4">
              <Link to="#">Security</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h4 className="my-2 lg:my-6 font-bold text-xl">Reach Us</h4>
        <div className="flex flex-col">
          <Link className="hover:underline lg:py-2" to="/about-us">About Us</Link>
          <Link className="hover:underline lg:py-2" to="/blog">Blog</Link>
          <Link className="hover:underline lg:py-2" to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </footer>
    <div className="bg-[#1C2146] text-gray-400 p-1 lg:p-2">
    <div className="flex items-center justify-center">Copyright Empenofore {year}</div>
    </div>
    </>
  );
}

export default Footer;
