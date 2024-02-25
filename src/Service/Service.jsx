import React from "react";

function Service() {
  return (
    <div className="">
      <div className="">
        <div className="h-[700px]  w-full">
          <div className=" flex space-x-[630px]  pt-20 ml-24 ">
            <div>
              <h6 className="text-start text-xl text-gray-400">Services</h6>
              <h1 className="text-4xl font-bold mt-4">
                What Can We Do Together?
              </h1>
            </div>
            <div className="">
              <p className="text-start">
                Trends, Technology and Tactics are <br />
                never stagnant and neither are we
              </p>
            </div>
          </div>
          <div className="flex mt-20">
            <div className="text-start  hover:bg-black h-[380px] p-20 w-3/6 ml-24 bg-yellow-300">
              <h1 className="text-7xl">
                BRAND <br /> SOLUTIONS
              </h1>
              <p className="text-base mt-6 font-medium">
                We are your trusted PAETNER IN BRANDING , offeringg tailored{" "}
                <br />
                solutions to build a STRONG BRAND IDENTITY that resonates with{" "}
                <br /> your audience.
              </p>
            </div>

            <div className="text-start  hover:bg-black h-[380px] p-20 w-3/6 mr-24 bg-yellow-300">
              <h1 className="text-7xl">
                DIGITAL <br /> SOLUTIONS
              </h1>
              <p className="text-base mt-6 font-medium">
                We guide your online presence toward success, meticulously{" "}
                <br />
                crafting and implementing our EXPERTLY TAILORED MARKETING <br />{" "}
                STRATEGIES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
