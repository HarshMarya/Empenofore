import React from "react";
import bgImage from "../Images/banner_ui.jpg";
import uiRight from "../Images/ui_right.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <div className="relative w-full h-full">
          <div className=" relative top-0 left-0 right-0">
            <img src={bgImage} className="d-block w-100" />
          </div>
          <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white hidden md:block">
            <h1 className="lg:text-6xl lg:text-left sm:text-left font-extrabold mb-4 md:text-4xl sm:text-3xl">
              About Us
            </h1>
            <p className="lg:text-[20px] text-[12px]">
              Empenofore is an IT Consulting and Services, training, and
              enterprise development company with a combined industry experience
              of over 10 years.
            </p>
          </div>
        </div>

      <section className="flex justify-center items-center flex-col md:flex-row lg:flex-row md:gap-10 p-4 lg:p-10 lg:my-10 mx-auto">
        <div className="lg:w-1/2 p-4">
          <p className="text-sm font-semibold text-[#e24077]">EMPENOFOREAN</p>
          <h3 className="text-3xl lg:text-5xl font-extrabold my-4">
          About Us
          </h3>
          <p className="text-sm lg:text-base">
          We know how to twirl the latest technology as per the requirements of our customers. We are passionate about creating new solutions resulting in the shoot up of businesses and better functioning of their systems. We have been the agents of generating and providing manpower, building teams, supporting the deliveries for large programs at locations through technical and domain experts. At Empenofore, we believe that our success relies on the three pillars that are our customers, our experts, and our partners. Our functioning fields are cloud, big data, transformation, DevOps, AI/ML, and much more. We aim in building teams with our expanding networks of IT professionals. Our motto is to enable businesses in achieving operational excellence.
          </p>
        </div>
        <div>
          <img src={uiRight} className="w-[500px]" alt="banner-5" />
        </div>
      </section>

          <div className=" bg-empBg w-full h-full py-10">
                <div className=" text-white w-9/12 mx-auto md:py-6">
                    <div className=''>
                    <h3 className="text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77]">Who is an Empenoforean?</h3>
                        <ul className='md:px-4 list-disc text-[12px] md:text-[20px]'>
                            <li className='py-2'>Empenofore gives a warm reception to every talented individual.</li>
                            <li className='py-2'>An Empenoforean is acquainted with valuable experiences, training, and brings out best out of them. Serving the best and giving an unforgettable experience to our customers are the core values we teach to our employees.</li>
                            <li className='py-2'>We organize conferences, weekly knowledge exchanges, and tech rallies to brush up the talent and give a boost to the potential of our employees.</li>
                            <li className='py-2'>An Empenoforean learn, develop, and pool in creating new solutions to bridge challenges for our customers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        {/* Collaborations */}
        <div className="md:w-1/2 w-10/12 mx-auto py-6 lg:py-20 ">
          <h3 className="text-[28px] md:text-[40px] my-6 font-bold">Collaborations</h3>
          <p className="my-4 text-sm lg:text-base">
            Empenofore Technologies takes pride in forging partnerships with
            global companies to enhance our vision of providing operational
            excellence and facilitate in building teams comprising of niche
            resources. Collaborations with our national and foreign colleagues
            are essential to the success of our expansion plans and outreach.
          </p>
          <p className=" text-sm lg:text-base">
            Proven collaborative work within not only companies but teams is
            fundamental to the successful completion of any goal and we have a
            proven track record of the same. As we charter our presence now in
            the United Kingdom and Dublin, our approach to promote and ensure
            inclusivity, build and facilitate diverse teams is boosted. At the
            core of our value lies our effort to build and sustain long-lasting
            relationships with our partners and customers likewise and through
            mutual interest provide them with impeccable service.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
