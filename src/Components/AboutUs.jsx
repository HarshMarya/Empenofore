import React from 'react'
import bgImage from '../Images/banner_ui.jpg'
import uiRight from '../Images/ui_right.png'
import empImage from '../Images/emp_banner.jpg'
function AboutUs() {
    return (
        <>
            <div className='relative'>
                <div className='relative w-full h-full'>
                    <div>
                        <img src={bgImage} className='d-block w-100' />
                    </div>
                    <div className='md:w-10/12 lg:w-1/2 mx-auto absolute top-10 md:top-20 lg:top-40 left-0 md:left-[10%] text-white px-10'>
                        <h1 className='text-2xl md:text-[70px] font-bold mb-4 md:mb-4'>About Us</h1>
                        <p className='text-[12px] md:text-[20px]'>Empenofore is an IT Consulting and Services, training, and enterprise
                            development company with a combined industry experience of over 10 years.</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-evenly items-center py-[3rem] gap-6 lg:px-20'>
                    <div className='w-10/12 md:w-1/2'> 
                        <p>EMPENOFOREAN</p>
                        <h2 className='text-[40px] font-bold my-4'>About Us</h2>
                        <p className='text-[14px] text-[#212529]'>We know how to twirl the latest technology as per the requirements of our customers. We are passionate about creating new solutions resulting in the shoot up of businesses and better functioning of their systems. We have been the agents of generating and providing manpower, building teams, supporting the deliveries for large programs at locations through technical and domain experts. At Empenofore, we believe that our success relies on the three pillars that are our customers, our experts, and our partners. Our functioning fields are cloud, big data, transformation, DevOps, AI/ML, and much more. We aim in building teams with our expanding networks of IT professionals. Our motto is to enable businesses in achieving operational excellence.</p>
                    </div>
                    <div>
                        <img src={uiRight} width={'500px'}/>
                    </div>
                </div>

                <div className='bg-emp-image w-screen'>

                </div>
            </div>
        </>
    )
}

export default AboutUs
