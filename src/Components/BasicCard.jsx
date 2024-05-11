import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TbDeviceAnalytics } from "react-icons/tb";

function BasicCard() {
  return (
    <section className="flex px-4 md:px-20 mb-20 container flex-col lg:flex-row sm:flex-col">
      <div className="bg-[#fff] lg:bg-[#f6f6f6] p-4 lg:p-10">
        <p className="my-4 text-sm font-bold text-[#02427A]">OUR SERVICES</p>
        <h3 className=" text-2xl lg:text-3xl my-4 font-bold">
          Business Intelligence and visualization
        </h3>
        <p className="my-4 text-sm ">
          One of the most common problems faced by organizations is Information
          overload. To endure the problem they turn to the automation of
          intuitive reports, scorecards, and visualizations.
        </p>
        <button className="bg-[#E24077] text-sm lg:text-base text-white p-2 uppercase">
          See more
        </button>
      </div>
      <div className="bg-[#f6f6f6] lg:bg-[#fff] p-4 lg:p-10">
        <p className="my-4 text-sm font-bold text-[#02427A]">OUR SERVICES</p>
        <h3 className=" text-2xl lg:text-3xl my-4 font-bold">
          UI/UX Development
        </h3>
        <p className="my-4 text-sm lg:text-base">
          Our multi-disciplinary team of UX/UX designers focuses on
          problem-solving, understanding the needs of users,and delivering
          unforgettable user experience.
        </p>
        <button className="bg-[#E24077] text-sm lg:text-base text-white p-2 uppercase">
          See more
        </button>
      </div>
      <div className="bg-[#fff] lg:bg-[#f6f6f6] p-4 lg:p-10">
        <p className="my-4 text-sm font-bold text-[#02427A] uppercase">
          OUR SERVICES
        </p>
        <h3 className=" text-2xl lg:text-3xl my-4 font-bold">
          Agile Transformation
        </h3>
        <p className="my-4 text-sm lg:text-base">
          Mobility roadmap is essential for digital experience transformation.
          Empenofore enables businesses to explore valuable transformation
          opportunities by implementing.
        </p>
        <button className="bg-[#E24077] text-sm lg:text-base text-white p-2 uppercase">
          See more
        </button>
      </div>
    </section>
  );
}

export default BasicCard;
