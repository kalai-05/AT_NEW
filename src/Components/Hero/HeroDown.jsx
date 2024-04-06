import React from "react";
import computer from "../../assets/02.png";
import search from "../../assets/001.png";

const HeroDown = () => {
  return (
    <>
      <div className=" flex flex-col md:grid md:grid-cols-2 gap-4   items-center   container">
        <div className="">
          <img src={computer} alt="" className=" lg:ml-16 " />
        </div>
        <div className="hidden md:flex md:flex-col">
          <p className=" text-[#6B3CC9] h5 pb-3 font-semibold  md:text-left ">
            Web & Mobile App Development
          </p>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <p className="bg-[#F28D35] py-2 px-4 mt-2 font-semibold w-[155px] rounded-lg   text-white ">
            LEARN MORE
          </p>
        </div>
        <div className="md:hidden text-center">
          <p className=" text-[#6B3CC9] h5 pb-3 font-semibold  md:text-left ">
            Web & Mobile App Development
          </p>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <center>
            <p className="bg-[#F28D35] py-2 px-4 mt-2 font-semibold w-[155px] rounded-lg text-white ">
              LEARN MORE
            </p>
          </center>
        </div>

        <div className=" hidden md:flex md:flex-col">
          <p className=" text-[#6B3CC9] h5 pb-3 font-semibold">
            Digital Strategy Consulting
          </p>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <p className="bg-[#F28D35] py-2 px-4 mt-2 font-semibold w-[155px] rounded-lg text-white ">
            LEARN MORE
          </p>
        </div>
        <div className="">
          <img src={search} alt="" className="lg:ml-40" />
        </div>
        <div className=" md:hidden text-center ">
          <p className=" text-[#6B3CC9] h5 pb-3 font-semibold">
            Digital Strategy Consulting
          </p>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <center>
            <p className="bg-[#F28D35] py-2 px-4 mt-2 font-semibold w-[155px] rounded-lg text-white ">
              LEARN MORE
            </p>
          </center>
        </div>
      </div>
    </>
  );
};

export default HeroDown;
