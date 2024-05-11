import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div>
      <ul className='flex gap-4 items-center w-full'>
        <li className="cursor-pointer btn"><Link spy={true} smooth={true} to="/" >Home</Link></li>
        <li className="cursor-pointer btn"><Link spy={true} smooth={true} to="/about-us" >About Us</Link> </li>
        <li>
          <div className="btn dropdown">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Service
            </button>
            <ul className="dropdown-menu">
              <li><Link spy={true} smooth={true} className="dropdown-item" to="/bigdata&analytics">Big Data & Analytics</Link></li>
              <li><Link spy={true} smooth={true} className="dropdown-item" to="/agiletransformation">Agile Transformtion</Link></li>
              <li><Link spy={true} smooth={true} className="dropdown-item" to="/cloud-integration">Cloud-First</Link></li>
            </ul>
          </div>
        </li>
        <li className="cursor-pointer btn"><Link spy={true} smooth={true} to="/blog" >Blog</Link></li>
        <li className="cursor-pointer btn"><Link spy={true} smooth={true} to="/contact-us" >Contact Us</Link></li>
        <li className='bg-[#E24077] px-3 py-2 text-white uppercase text-sm cursor-pointer'><Link spy={true} smooth={true} to="/careers" >Careers</Link></li>
      </ul>
    </div>
  )
}

export default NavLinks
