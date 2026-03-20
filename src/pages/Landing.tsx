import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Integration from "../components/Landing/Integration";
import Footer from "../components/Landing/Footer";
import "../styles/landing.css";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Integration />
      <Footer />
    </>
  );
};

export default Landing;