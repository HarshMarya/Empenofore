import React from 'react'
import BasicExample from "../Components/Carousel.jsx";
import Navbar from "../Components/Navbar.jsx";
import Services from "../Components/Services.jsx"
import BasicCard from "../Components/BasicCard.jsx"
import TechStack from "../Components/TechStack.jsx";
import SDMethodologies from "../Components/SDMethodologies.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
    return (
        <>
            <Navbar />
            <BasicExample />
            <Services />
            <BasicCard />
            <TechStack />
            <SDMethodologies />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
