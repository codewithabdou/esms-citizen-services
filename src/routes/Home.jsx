import React,{useEffect} from "react";
import { About, Hero } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
