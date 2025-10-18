import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Gallery } from "./components/gallery";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Gallery data={landingPageData.Gallery} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
