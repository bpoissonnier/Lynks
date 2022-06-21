import React from "react";
import Footer from '../components/Footer'
import Contact from "../components/Contact"
import Cont from "../components/Cont";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Cont />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;