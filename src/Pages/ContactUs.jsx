import React from 'react'
import Navbar from '../Components/Navbar'
import contactBanner from '../Images/banner1.jpg'
import { TfiEmail } from "react-icons/tfi";
import Footer from '../Components/Footer';
import Form from '../Components/Form';

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <div className="relative w-full">
          <div className=" relative top-0 left-0 right-0">
            <img src={contactBanner} className="d-block w-100" />
          </div>
          <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[50%] md:top-[30%] left-[14%] text-white">
            <h1 className="text-[40px] hidden md:block lg:text-[70px] font-extrabold mb-4">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      {/* map and contact form start */}
      <div className='flex items-center flex-col-reverse md:flex-row'>
      <Form/>
        <div className='md:w-1/2 w-full'>
          <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1753.2697967126667!2d77.088832!3d28.493409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19384219af0f%3A0x553028398b482d40!2sEmpenofore%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1714845321562!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* map and contact form end */}

      <section className="w-10/12 lg:w-1/2 mx-auto md:text-center text-left p-10">
        <div className="text-left md:text-center my-2">
          <h3 className="text-[#02427A] text-5xl font-extrabold">
            Cannot wait to <span className="text-5xl font-extrabold text-[#E24077]" >meet you!</span>
          </h3>
        </div>
        <p className="text-sm lg:text-base my-4">
          Give your business a boost and get ready to give your customers an
          exceptional experience. Drop a line and we will be back to you as soon
          as possible.
        </p>
        <span className="font-semibold my-2">Gurugram | Bengaluru</span>
        <div className="flex md:items-center md:justify-center my-2">
          <TfiEmail />
          <a href="mailto:info@empenofore.in" className="mx-2 font-bold hover:text-[#02427A] hover:underline">info@empenofore.in</a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ContactUs