import React from 'react'
import cloudIntegrationBg from '../Images/Cloud-first.jpg'
import Navbar from '../Components/Navbar'
import cloudIntegrationImage from '../Images/Cloud-Integration-Services_image.png'
import Footer from '../Components/Footer';

function CloudIntergration() {
    return (
        <>
            <Navbar />
            <div className="relative w-full">
                <div className="relative w-full h-full">
                    <div className=" relative top-0 left-0 right-0">
                        <img src={cloudIntegrationBg} className="d-block w-100" />
                    </div>
                    <div className=" absolute lg:w-1/3 w-9/12 mx-auto top-[30%] left-[14%] text-white">
                        <h1 className="text-[20px] lg:text-[70px] font-extrabold mb-4">
                            Cloud Integration Services
                        </h1>
                    </div>
                </div>
            </div>
            <div className=" bg-empBg w-full h-full py-10 mb-10">
                <div className=" text-white w-9/12 mx-auto md:py-6">
                    <div className=''>
                        <ul className='md:px-4 list-disc text-[16px] md:text-[20px]'>
                            <li className='py-2'>To deliver projects on time we have got a team of experienced cloud architects, engineers, test and account management.</li>
                            <li>To deliver value to our customers on Azure, AWS, and Pivotal cloud platforms we have the expertise.</li>
                            <li className='py-2'>Our service makes possible a coherent flow of information across systems within the hybrid environment.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="flex lg:justify-around items-center flex-col lg:flex-row md:gap-10 p-4 lg:p-10">
                <div className="lg:w-1/2 p-4">
                    <p className='text-sm font-bold text-[#e24077] py-4'>Offer Services</p>
                    <h3 className="text-3xl lg:text-5xl font-extrabold mb-4">
                        Leader of cloud services
                    </h3>
                    <p className="text-sm lg:text-base">
                        Want your infrastructure to run in the cloud or multi-cloud? We develop cloud-native solutions, coach your teams, assess the way of your working, in the end, we provide cloud services. We are up for any cloud challenge!
                    </p>
                </div>
                <div>
                    <img src={cloudIntegrationImage} className="w-[500px]" alt="banner-5" />
                </div>
            </section>
            <div className='my-4'>
                <div className='w-1/2 mx-auto text-center my-4'>
                    <p>CLOUD</p>
                    <h3 className='text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77] mb-6'>Highlights</h3>
                </div>
                <div className="container grid lg:grid-cols-2 gap-6 px-20">
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <p className='text-[#E24077] text-xl font-bold'>CLOUD FRAMEWORK</p>
                        </div>
                        <div>
                            <p className="text-center font-sm my-2 px-4 italic">Developing scalable infrastructures that are reliable as well</p>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <p className='text-[#E24077] text-xl font-bold'>CLOUD EVALUATION
                            </p>
                        </div>
                        <div>
                            <p className="text-center font-sm my-2 px-4 italic">Cloud operation assessment to check operational excellence
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <p className='text-[#E24077] text-xl font-bold'>CLOUD TRAINING
                            </p>
                        </div>
                        <div>
                            <p className="text-center font-sm my-2 px-4 italic">Training and re-skilling to flourish right competencies
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#02427A] py-10 text-white">
                        <div className="flex items-center flex-wrap justify-center">
                            <p className='text-[#E24077] text-xl font-bold'>SUPERVISED SERVICES
                            </p>
                        </div>
                        <div>
                            <p className="text-center font-sm my-2 px-4 italic">Managing cloud services and solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-empBg w-full h-full py-10">
                <div className=" text-white w-9/12 mx-auto md:py-6">
                    <div className=''>
                    <h3 className="text-[20px] lg:text-[40px] font-bold py-2 md:py-6 lg:py-10 text-[#E23F77]">BENEFITS OF CLOUD INTEGRATION SERVICES</h3>
                        <ul className='md:px-4 list-disc text-[12px] md:text-[20px]'>
                            <li className='py-2'>Better operational efficiency</li>
                            <li className='py-2'>Increment in flexibility and scalability</li>
                            <li className='py-2'>Faster time-to-market</li>
                            <li className='py-2'>Improved internal communication</li>
                            <li className='py-2'>Better customer service, support, and retention</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CloudIntergration
