import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="mt-20 mb-20">
      <div className="banner-info">
        <div className="caption">
          <h1 className="text-3xl md:text-3xl lg:text-6xl mb-10 leading-loose tracking-widest">
            Hi,<br></br>
            I'm Nishan Das<br></br>
            Web Developer
          </h1>
          <p className="text-gray-400 text-4xl tracking-widest ">
            Front end developer
          </p>
        </div>
        <button className="btn-one  mt-10">
          <div className="btn-content">
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">
              <a href="https://drive.google.com/file/d/1ljNpGT2d-GBMFbJpqD1h86sU7ujd3K0C/view?usp=sharing">
                My Resume
              </a>
            </span>
          </div>
        </button>
      </div>
      <div className="scroll-info mt-10">
        <div className="scroll-down scroll-left">
          <span>scroll down
          </span>
          <FaAngleDoubleDown className="s-icon"></FaAngleDoubleDown>
          
        </div>
        <div className="scroll-down scroll-right">
          <span className="relative">scroll down</span>
          <FaAngleDoubleDown className="s-icon absolute mb-0"></FaAngleDoubleDown>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
