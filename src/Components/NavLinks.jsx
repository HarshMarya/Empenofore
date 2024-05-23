import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div>
      <ul className='flex gap-4 items-center w-full'>
      <Link to="/" ><li className="cursor-pointer btn">Home</li></Link>
      <Link to="/about-us" ><li className="cursor-pointer btn">About Us</li></Link> 
        <li>
          <div className="btn dropdown">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Service
            </button>
            <ul className="dropdown-menu">
            <Link className="dropdown-item" to="/bigdata&analytics"> <li>Big Data & Analytics</li></Link>
            <Link className="dropdown-item" to="/agiletransformation"><li>Agile Transformtion</li></Link>
            <Link className="dropdown-item" to="/cloud-integration"><li>Cloud-First</li></Link>
            </ul>
          </div>
        </li>
        <Link to="/blog" ><li className="cursor-pointer btn">Blog</li></Link>
        <Link to="/contact-us" ><li className="cursor-pointer btn">Contact Us</li></Link>
        <Link to="/careers" ><li className='bg-[#E24077] px-3 py-2 text-white uppercase text-sm cursor-pointer'>Careers</li></Link>
      </ul>
    </div>
  )
}

export default NavLinks
