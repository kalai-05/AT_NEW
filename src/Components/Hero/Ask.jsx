import React from "react";

const Ask = () => {
  return (
    <div>
      <div className=" container mx-auto w-full  lg:w-2/3 my-10">
        <div className=" text-center  text-[#6B3CC9] text-3xl pb-3 font-semibold">
          Frequently asked questions
        </div>
        <div className="bg-[#FAF8FF] rounded-lg flex flex-row py-3 px-4 justify-between my-2 gap-4">
          <div className="flex flex-col">
            {" "}
            <p className=" text-[#6B3CC9] justify-between  text-xl items-center">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?{" "}
            </p>
            <p className="text-[#6F6C90]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
          <div className=" font-extrabold text-2xl">-</div>
        </div>
        <div className="bg-[#FAF8FF] rounded-lg flex flex-row py-3 px-4 items-center justify-between my-3">
          <div>
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?{" "}
          </div>
          <div className=" font-extrabold text-2xl">+</div>
        </div>
        <div className="bg-[#FAF8FF] rounded-lg flex flex-row py-3 px-4 items-center justify-between my-3">
          <div>
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?{" "}
          </div>
          <div className=" font-extrabold text-2xl">+</div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
