import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Shopify from "./projects/shopify/Shopify";
import ContactPage from "./pages/ContactPage";



const App = () => {
  const location = useLocation();
  return (
    <div className="">
      {location.pathname === "/" && <Hero />}
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage/> } />
        <Route path="/project1" element={<Shopify />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
