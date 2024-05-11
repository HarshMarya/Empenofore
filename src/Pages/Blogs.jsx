import React from "react";
import blogImage from "../Images/blog_banner.png";
import Navbar from "../Components/Navbar";
import CSImage from "../Images/cyber-security-thumb.jpg";
import devOpsImage from "../Images/devops-blog-thumb.jpg";
import aglieImage from "../Images/agile-blog-thumb.jpg";
import domainTesting from "../Images/domain-testing-thumb.jpg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <div className="relative w-full h-full">
          <div className=" relative top-0 left-0 right-0">
            <img src={blogImage} className="d-block w-100" />
          </div>
          <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white">
            <h1 className="text-[40px] hidden md:block lg:text-[70px] font-extrabold mb-4">
              Blog
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" shadow-md rounded-md m-6 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-10/12 p-4">
            <strong>cyber security</strong>
            <h3 className="text-[20px] lg:text-[32px] my-2">The Jazz Around Cyber Security</h3>
            <span>November 1, 2021</span>
            <p className="my-2 text-[12px]">
              “How did we not see this coming?” is just one of the striking
              questions that Chief Security officers are subjected to by senior
              management and company boards across the world when addressing a
              cyber-attack or security breach.
            </p>
            <Link className="underline text-blue-800" to="/">
              Continue Reading
            </Link>
          </div>
          <div>
            <img src={CSImage} className="w-full h-full" />
          </div>
        </div>

        <div className="shadow-md rounded-md m-6 flex flex-col lg:flex-row justify-between">
          <div className="lg:pr-4">
            <img src={domainTesting} className="w-full h-full" />
          </div>
          <div className="lg:w-10/12 p-4">
            <strong>Finance Domain Testing</strong>
            <h3 className="text-[20px] lg:text-[32px] my-2">Starter Kit : Finance Domain Testing</h3>
            <span>July 7, 2021</span>
            <p className="my-2 text-[12px]">
            Becoming a QA testing expert for any fintech, starts with the basics in finance domain knowledge. One must know what a finance domain is, what challenges arise during testing, the importance of testing financial domains and the primary banking and financial application testing required to sufficiently support financial applications.
            </p>
            <Link className="underline text-blue-800" to="/">
              Continue Reading
            </Link>
          </div>
        </div>

        <div className="shadow-md rounded-md m-6 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-10/12 p-4">
            <strong>DevOps-CI/CD</strong>
            <h3 className="text-[20px] lg:text-[32px] my-2">DevOps -CI/CD- Best Patterns and Practices</h3>
            <span>February 8, 2021</span>
            <p className="my-2 text-[12px]">
            CI (Continuous Integration) and CD (Continuous Delivery) are the procedures to frequently deliver your shippable software to customers with the help of automation during the various stages of Software development. CI/CD methods address the solution to the challenges the teams face while integrating the new code in seamless fashion.
            </p>
            <Link className="underline text-blue-800" to="/">
              Continue Reading
            </Link>
          </div>
          <div>
            <img src={devOpsImage} className="w-full h-full" />
          </div>
        </div>

        <div className="shadow-md rounded-md m-6 flex flex-col lg:flex-row justify-between">
          <div className="lg:pr-4">
            <img src={aglieImage} className="w-full h-full" />
          </div>
          <div className="lg:w-10/12 p-4">
            <strong>Remote Agile Teams</strong>
            <h3 className="text-[20px] lg:text-[32px] my-2">Agile Teams: Innovation and Execution Culture in Remote Working</h3>
            <span>January 27, 2021</span>
            <p className="my-2 text-[12px]">
            From the past few quarters, the entire world is dealing with one of the biggest uncertainty due to COVID times. During this many teams have dealt with volatility and uncertainty, and most of the Lean/Agile teams have adapted to many new ways of working and everyone have “Remote working” as a new normal.
            </p>
            <Link className="underline text-blue-800" to="/">
              Continue Reading
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blogs;
