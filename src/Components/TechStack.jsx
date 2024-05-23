import React from "react";
import docker from "../Images/docker.png";
import jenkins from "../Images/jenkins.png";
import slatstacks from "../Images/slatstack.png";
import puppet from "../Images/puppet.png";
import ansible from "../Images/ansible.png";
import apigee from "../Images/apigee.png";
import chef from "../Images/chef.png";
import github from "../Images/github.png";
import amazonweb from "../Images/amazonweb.png";
import microsoftazure from "../Images/microsoftazure.png";
import ibmapi from "../Images/ibmapi.png";
import kong from "../Images/kong_white.png";
import hadoop from "../Images/hadoop.png";
import spark from "../Images/spark.png";
import python from "../Images/python.png";
import golang from "../Images/golang.png";
import java from "../Images/java.png";

function TechStack() {
  return (
    <>
      <div className="lg:w-1/2 w-full mx-auto">
        <p className="text-[#E24077] font-extrabold uppercase text-center text-sm">
          Architecture inspection
        </p>
        <h3 className="text-3xl lg:text-5xl text-center font-extrabold my-4">
          Technology Stack
        </h3>
        <p className="w-8/12 text-center mx-auto text-sm lg:text-base my-4">
          From application code to data services, different layers are managed
          by scheduling and organizing services that are organized by the cloud
          provider and run on low-level infrastructure.
        </p>
      </div>

      {/* Technology Stack start */}
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">CI/CD</h3>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            <img src={docker} alt="tech-image" className="w-[145px]" />
            <img src={jenkins} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">plan</h3>
          </div>
          <div className="flex items-center justify-center">
            <img src={slatstacks} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">Monitor</h3>
          </div>
          <div className="flex items-center justify-center">
            <img src={puppet} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">operate</h3>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            <img src={ansible} alt="tech-image" className="w-[145px]" />
            <img src={chef} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">deploy</h3>
          </div>
          <div className="flex items-center justify-center">
            <img src={github} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">cloud</h3>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            <img src={amazonweb} alt="tech-image" className="w-[145px]" />
            <img src={microsoftazure} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">api first</h3>
          </div>
          <div className="flex items-center justify-center flex-wrap md:gap-0">
            <img src={ibmapi} alt="tech-image" className="lg:w-[125px] w-[100px]" />
            <img src={apigee} alt="tech-image" className="lg:w-[125px] w-[100px]" />
            <img src={kong} alt="tech-image" className="lg:w-[125px] w-[100px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">big data</h3>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            <img src={hadoop} alt="tech-image" className="w-[145px]" />
            <img src={spark} alt="tech-image" className="w-[145px]" />
          </div>
        </div>
        <div className="bg-[#02427A] py-8 text-white">
          <div>
            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">code</h3>
          </div>
          <div className="flex items-center justify-center flex-wrap  md:gap-0">
            <img src={python} alt="tech-image" className="lg:w-[125px] w-[100px]" />
            <img src={golang} alt="tech-image" className="lg:w-[125px] w-[100px]" />
            <img src={java} alt="tech-image" className="lg:w-[125px] w-[100px]" />
          </div>
        </div>

      </div>
      {/* Technology Stack end */}
      
      {/* our central values */}
      <section className="p-10 lg:p-20 bg-[#F6F6F6] container">
        <p className=" text-[#E24077] font-extrabold uppercase text-sm mx-4">our central values</p>
        <div className="container grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center mx-auto">

          <div className="">
            <h3 className="text-3xl lg:text-5xl font-extrabold my-4">Knowledge Sharing</h3>
            <p className="text-sm lg:text-base">
              Our disciplined, repetitive, and self motivated efforts result in
              giving the community knowledge in the form of one-to-one
              interaction and blogs.
            </p>
          </div>

          <div className="">
            <h3 className="text-3xl lg:text-5xl font-extrabold my-4">Customer Authenticity</h3>
            <p className="text-sm lg:text-base">
              One of our mottos is to serve our customer's genuine interest and
              authentic inputs with a mission to deliver tactile impact.
            </p>
          </div>

          <div className="">
            <h3 className="text-3xl lg:text-5xl font-extrabold my-4">Quality First</h3>
            <p className="text-sm lg:text-base">
              We are a firm believer of consistency in quality without any
              compromise. We work in the direction of continuous innovation and
              five-star effort.
            </p>
          </div>

          <div className="">
            <h3 className="text-3xl lg:text-5xl my-4 font-extrabold">Our Ethics</h3>
            <p className="text-sm lg:text-base">
              We walk on the path of openness& honesty in all forms of
              communication, both internally and externally. We despise
              discrimination against languages, complexion, gender, or religion.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default TechStack;
