import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../Images/logo.jpg"
import NavLinks from "./NavLinks";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const content = <>
  <div className='lg:hidden block absolute top-[68px] w-1/2 right-0 bg-[#160026] transition z-50'>
      <ul className="text-center text-xl lg:p-20 p-2">
          <li className="my-2 lg:my-4 py-2 lg:py-4 hover:underline hover:rounded"><Link spy={true} smooth={true} to="/" >Home</Link></li>
          <li className="my-4 py-2 hover:underline hover:rounded"><Link spy={true} smooth={true} to="/about-us" >About Us</Link> </li>
          <div className="my-4 py-2 dropdown hover:underline hover:rounded">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Service
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/bigdata&analytics">Big Data & Analytics</Link></li>
              <li><Link className="dropdown-item" to="/agiletransformation">Agile Transformtion</Link></li>
              <li><Link className="dropdown-item" to="/cloud-integration">Cloud-First</Link></li>
            </ul>
          </div>
          <li className="my-4 py-2 hover:underline hover:rounded"><Link spy={true} smooth={true} preventScrollReset={true} to="/blog" >Blog</Link></li>
          <li className="my-4 py-2 hover:underline hover:rounded"><Link spy={true} smooth={true} to="/contact-us" >Contact Us</Link></li>
          <li className="my-4 py-2 hover:underline hover:rounded"><Link spy={true} smooth={true} to="/careers" >Careers</Link></li>
          
      </ul>
  </div>
</>
  return (
    <>
    <div className="w-full absolute z-10 bg-transparent top-0 left-0 right-0">
      <nav className=' w-full flex p-2 lg:p-4 justify-around lg:bg-transparent bg-[#160026] items-center text-white '>
      <div>
        <Link to="/" className='cursor-pointer'>
        <img src={logo} className="w-[200px]"/>
        </Link>
        </div>
        <div className="hidden lg:block">
        <NavLinks />
        </div>
        <div>
          {isOpen && content}
        </div>
        <div className="flex lg:hidden">
          <button  onClick={()=>setIsOpen(!isOpen)}>{isOpen ? <IoClose className="text-4xl md:text-5xl bg-[#E24077] p-1 cursor-pointer" />: <FaBars className="text-4xl md:text-5xl bg-[#E24077] p-2 cursor-pointer"/>}</button>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;


