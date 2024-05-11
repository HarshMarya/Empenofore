import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Careers from "./Pages/Careers";
import BigDataAnalytics from "./Services/BigDataAnalytics";
import AgileTransformation from "./Services/AgileTransformation";
import CloudIntergration from "./Services/CloudIntergration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/bigdata&analytics' element={<BigDataAnalytics/>}/>
          <Route path='/agiletransformation' element={<AgileTransformation/>}/>
          <Route path='/cloud-integration' element={<CloudIntergration/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
