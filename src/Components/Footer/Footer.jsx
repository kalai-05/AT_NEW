import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="shadow  bg-[#6B3CC9] text-white ">
        <div className=" mx-auto py-5 flex flex-col container ">
          <div className="lg:flex lg:justify-between ">
            <div className="  lg:pr-20 ">
              <a href="/" className="p-0 ">
                <img src={logo} alt="" className="p-0 md:w-56 lg:w-64 w-64 " />
              </a>
              <p className="text-md md:w-[600px] sm:w-[340px] lg:w-[450px] text-left">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
            <div className="md:flex gap-56 md:mt-10 ">
              <div className="sm:col-12  ">
                <p className="h5 md:mt-5  font-semibold">Our Technologies</p>
                <div className="flex flex-col p-0  gap-3 cursor-pointer">
                  <a href="/">ReactJS</a>
                  <a href="/">Gatsby</a>
                  <a href="/">NextJS</a>
                  <a href="/">NodeJS</a>
                </div>
              </div>
              <div className="sm:col-12  ">
                <p className="h5 md:mt-5 font-semibold">Our Services</p>
                <div className="flex flex-col p-0 gap-3 cursor-pointer">
                  <a href="/">Social media Marketing</a>
                  <a href="/">Web & Mobile App Development</a>
                  <a href="/">Data & Analytics</a>
                </div>
              </div>
            </div>
          </div>
          <center className=" mt-4 text-white ">
            <hr className=" lg:w-[50%]  md:w-[70%] sm:w-[90%] font-extrabold" />
          </center>
          <div className="mt-4 justify-center flex">
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
