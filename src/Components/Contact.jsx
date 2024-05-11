import React from "react";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <>
      <section className="w-10/12 lg:w-1/2 mx-auto md:text-center text-left pb-20">
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
    </>
  );
}

export default Contact;
