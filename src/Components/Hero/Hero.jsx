import React from "react";
import hero_img from "../../assets/hero_img.jpeg";

const Hero = () => {
  return (
    <div>
      <div>
        <img src={hero_img} alt="" className="w-[100%] max-h-[720px] " />
      </div>
      <div className=" lg:w-[35%]  lg:mt-[-22%]  lg:ml-20 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] py-3 px-7 lg:absolute">
        <p className="text-4xl font-semibold text-white capitalize">
          {" "}
          We crush your competitors, goals, and sales records - without the B.S.
        </p>

        <p>
          <button className="bg-[#F28D35] p-2 mt-2 font-semibold  text-white">
            GET FREE CONSULTATION
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
