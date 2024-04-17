import { useState } from 'react'
import fontFamily from './assets/Montserrat-VariableFont_wght.ttf'
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './Components/Carousel'
import BasicExample from './Components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav className='flex justify-between items-center mx-4 p-4 bg-transparent'>
        <a className='bg-blue-700 text-white p-2 text-3xl'><img src=''></img>Empenofore</a>
        <div className=''>
          <ul className='flex gap-10 items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <button className='bg-amber-400 p-2 text-white'>Careers</button>
          </ul>
        </div>
      </nav>
      {/* <UncontrolledExample/> */}
      <BasicExample/>
    </div>
    </>
  )
}

export default App
