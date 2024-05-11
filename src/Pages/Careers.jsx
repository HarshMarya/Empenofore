import React from 'react'
import Navbar from '../Components/Navbar'
import careerBg from "../Images/career_bg.png"
import careerBanner from "../Images/career_banner.jpg"
import Footer from '../Components/Footer'

function Careers() {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <div className="relative w-full h-full">
          <div className=" relative top-0 left-0 right-0">
            <img src={careerBanner} className="d-block w-100" />
          </div>
          <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white">
            <h1 className="text-[40px] hidden md:block lg:text-[70px] font-extrabold mb-4">
              Careers
            </h1>
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center flex-col md:flex-row lg:flex-row md:gap-10 p-4 lg:p-10 lg:my-10 mx-auto">
        <div className="lg:w-1/2 p-4">
          <p className="text-sm font-semibold text-[#e24077]">CAREEERS</p>
          <h3 className="text-3xl lg:text-5xl font-extrabold my-4">
            Why a candidate will join Empenofore?
          </h3>
          <h3>An exceptional experience is a key to success</h3>
          <p className="text-sm lg:text-base">
            Empenofore extends the opportunity to work alongside outstanding leaders with a scope of exceptional opportunities with growth. We cater to candidates with cutting-edge technologies and learning possibilities. At Empenofore, we help candidates to deliver the best.

            We have rigid leave policies with maternity leaves and sick leaves with zero compromises of salary. We cultivate a culture of inclusiveness and openness. We prohibit discrimination based on any ground. Understanding our responsibility we aim at creating a technological future that remains human.
          </p>
        </div>
        <div>
          <img src={careerBg} className="w-[500px]" alt="banner-5" />
        </div>
      </section>
      <div className=" bg-empBg w-full h-full py-10">
        <div className=" text-white w-9/12 lg:w-10/12 mx-auto text-center py-10">
          <h3 className="text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77] mb-6">If you are ready for a new challenge we would like to hear from you, send in your details below.</h3>
          <a href='mailto:info@empenofore.in' className='text-gray-200 underline'> info@empenofore.in</a>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Careers
