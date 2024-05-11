import React from 'react'
import Navbar from '../Components/Navbar'
import AgileTransformationBg from '../Images/agile_transformation.jpg'
import AgileTransformationImage from '../Images/AGILE-TRANSFORMATION_image.png'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineInteraction } from "react-icons/ai";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import Footer from '../Components/Footer';





function AgileTransformation() {
    return (
        <>
            <Navbar />
            <div className="relative w-full">
                <div className="relative w-full h-full">
                    <div className=" relative top-0 left-0 right-0">
                        <img src={AgileTransformationBg} className="d-block w-100" />
                    </div>
                    <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white">
                        <h1 className="text-[20px] lg:text-[70px] font-extrabold mb-4">
                            Agile Transformation
                        </h1>
                    </div>
                </div>
            </div>
            <section className="flex lg:justify-around items-center flex-col lg:flex-row md:gap-10 p-4 lg:p-10">
                <div className="lg:w-1/2 p-4">
                    <p className='text-sm font-bold text-[#e24077] py-4'>Offer Services</p>
                    <h3 className="text-3xl lg:text-5xl font-extrabold mb-4">
                        Custom solutions for your business
                    </h3>
                    <p className="text-sm lg:text-base">
                        For business transformations empowered by digital technology, business domain experience is significant. Right business questions are asked by the experts in the domain to analyze and address. Our consultants inflame our digital excellence to build improved cloud solutions and leverage your domain expertise.
                    </p>
                </div>
                <div>
                    <img src={AgileTransformationImage} className="w-[500px]" alt="banner-5" />
                </div>
            </section>

            <div className='my-4'>
                <div className='w-1/2 mx-auto text-center my-4'>
                    <p>AGILE TRANSFORMATION</p>
                    <h3 className='text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77] mb-6'>Advantages</h3>
                </div>
                <div className="container grid lg:grid-cols-2 gap-6 px-20">
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <MdOutlineDashboardCustomize className='text-5xl' />
                        </div>
                        <div>
                            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">CUSTOMIZED STRATEGY</h3>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <AiOutlineInteraction className='text-5xl' />
                        </div>
                        <div>
                            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">INTERACTIVE USER EXPERIENCE</h3>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <SiGooglecontaineroptimizedos className='text-5xl' />
                        </div>
                        <div>
                            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">OPTIMIZED COST</h3>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <MdMiscellaneousServices className='text-5xl' />
                        </div>
                        <div>
                            <h3 className="text-center text-[#E24077] text-xl font-extrabold my-2 uppercase">SERVICE DELIVERY EXPERIENCE</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AgileTransformation
