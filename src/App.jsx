import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Careers from "./Pages/Careers";
import BigDataAnalytics from "./Services/BigDataAnalytics";
import AgileTransformation from "./Services/AgileTransformation";
import CloudIntergration from "./Services/CloudIntergration";
import ScrollToTop from "./Components/ScrollToTop";

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/bigdata&analytics' element={<BigDataAnalytics />} />
          <Route path='/agiletransformation' element={<AgileTransformation />} />
          <Route path='/cloud-integration' element={<CloudIntergration />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
