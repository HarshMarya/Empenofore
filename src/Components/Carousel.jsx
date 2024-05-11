import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Images/banner1.jpg";
import Image2 from "../Images/banner2.jpg";
import Image3 from "../Images/banner3.jpg";
import { Link } from "react-router-dom";

function UncontrolledExample() {
  return (
    <>
    <Carousel className="">
      <Carousel.Item className=" ">
        <img className="d-block w-100" src={Image1} alt="banner-1" />
        <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white hidden md:block">
          <h3 className="lg:text-6xl lg:text-left sm:text-left font-extrabold mb-4 md:text-4xl sm:text-3xl">Stay on the top of the competition</h3>
          <p className="md:text-[20px] text-[12px]">Creating a broader understanding of your business needs,</p>
          <p className="lg:text-xl lg:text-left md:text-lg sm:text-sm sm:text-left mb-4">current challenges and future goals.</p>
        <Link to="/about-us" className="uppercase bg-[#E24077] p-2 text-white font-medium text-sm cursor-pointer ">Read more</Link>
        </div>
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block w-100 " src={Image3} alt="banner-1" />
        <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white hidden md:block">
          <h3 className="lg:text-6xl lg:text-left sm:text-left font-extrabold mb-4 md:text-4xl sm:text-3xl">Maximize your Investment</h3>
          <p className="lg:text-xl lg:text-left md:text-lg sm:text-sm sm:text-left">Increased efficiency and higher productivity to attract</p>
          <p className="lg:text-xl lg:text-left md:text-lg sm:text-sm sm:text-left mb-4"> maximum profits from your investment.</p>
          <Link to="/about-us" className="uppercase bg-[#E24077] p-2 text-white font-medium text-sm cursor-pointer ">Read more</Link>
        </div>
      </Carousel.Item>
      <Carousel.Item className="">
        <img className="d-block w-100 " src={Image2} alt="banner-1" />
        <div className=" absolute lg:w-1/3 w-1/2 mx-auto top-[30%] left-[14%] text-white hidden md:block">
          <h3 className="lg:text-6xl lg:text-left sm:text-left font-extrabold mb-4 md:text-4xl sm:text-3xl">Keep up with evolving Demands</h3>
          <p className="lg:text-xl lg:text-left md:text-lg sm:text-sm sm:text-left">Emphasis on developing customized strategies and creating an</p>
          <p className="lg:text-xl lg:text-left md:text-lg sm:text-sm sm:text-left mb-4"> agile cloud application architecture.</p>
          <Link to="/about-us" className="uppercase bg-[#E24077] p-2 text-white font-medium text-sm cursor-pointer ">Read more</Link>
        </div>
      </Carousel.Item>
    </Carousel>
    <div className="bg-[#121826] text-white p-6 lg:p-20">
      <h3 className="text-3xl lg:text-4xl text-center mb-4 font-semibold text-[#E24077]">Explore Empenofore</h3>
      <p className="leading-6 text-sm lg:text-base w-[80%] mx-auto">Empenofore with our technical expertise and expanding yet variant manpower, has been instrumental in building techonoligical teams, as well as supporting and delivering large programmes. Our core expertise lies in data analytics, cloud computing and Agile transformation among other services. Our driving factor is attributed to sharing an enthusiasm for comprehensive technologies.  Empenofore thrives on the belief of building partnerships with their clients which goes beyond transactional business.</p>
    </div>
    </>
  );
}

export default UncontrolledExample;
