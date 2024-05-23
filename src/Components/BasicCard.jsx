import { Link } from "react-router-dom";

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
          <Link to='/bigdata&analytics' >See more</Link>
        </button>
      </div>
      <div className="bg-[#f6f6f6] lg:bg-[#fff] p-4 lg:p-10">
        <p className="my-4 text-sm font-bold text-[#02427A]">OUR SERVICES</p>
        <h3 className=" text-2xl lg:text-3xl my-4 font-bold">
          Cloud-first
        </h3>
        <p className="my-4 text-sm lg:text-base">
        Want your infrastructure to run in the cloud or multi-cloud? We develop cloud-native solutions, coach your teams, assess the way of your working, in the end, we provide cloud services. We are up for any cloud challenge!
        </p>
        <button className="bg-[#E24077] text-sm lg:text-base text-white p-2 uppercase">
        <Link to='/cloud-integration' >See more</Link>
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
        <Link to='/agiletransformation' >See more</Link>
        </button>
      </div>
    </section>
  );
}

export default BasicCard;
