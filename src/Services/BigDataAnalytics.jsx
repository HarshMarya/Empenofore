import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import dataAnalysisImage from '../Images/data_analytics.jpg'
import BasicCard from '../Components/BasicCard'


function BigDataAnalytics() {
  return (
    <>
      <Navbar/>
      <div className="relative w-full">
        <div className="relative w-full h-full">
          <div className=" relative top-0 left-0 right-0">
            <img src={dataAnalysisImage} className="d-block w-100" />
          </div>
          <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white">
            <h1 className="text-[20px] lg:text-[70px] font-extrabold mb-4">
              Big Data Analytics
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-empBg w-full h-full py-10 mb-10">
        <div className=" text-white w-9/12 mx-auto md:py-10 grid md:grid-cols-2">
          <div className=''>
            <ul className='md:px-4 list-disc text-[16px] md:text-[20px]'>
              <li className='py-4'>Our services include Data Management, Business intelligence& Visualization, and Data Science.</li>
              <li>Our service deals in solution deployment, integration, and monitoring of platforms.</li>
            </ul>
          </div>
          <div>
          <ul className='md:px-4 list-disc text-[16px] md:text-[20px]'>
            <li className='py-4'>Our Big Data Technical support provides a helping hand to enterprises to resolve issues with troubleshooting.</li>
            <li>We provide our services through a team of professionals rich in the experience in applications in some of the renowned IT infrastructure.</li>
            </ul>
          </div>
        </div>
      </div>
      <BasicCard/>
      <div className=" bg-empBg w-full h-full p-10 md:py-20">
        <div className=" text-white w-9/12 mx-auto text-center">
        <h3 className='text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77]'>How do we take you forward?</h3>
        <p className='text-[12px] lg:text-[20px]'>We top-up data foundation to build a range of analytics solutions. Develop economic storage for loading data in a near-native format.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default BigDataAnalytics
