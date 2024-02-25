import React from "react";

function BeeEvery() {
  return (
    <div className=" fiexd h-[1000px]  w-full text-white  bg-black">
      <div className=" ">
        <div className="flex pt-10 ">
          <p className=" ml-24 mt-8 absolute  text-5xl font-extrabold">BEE</p>
          <p className="text-[220px]  ml-[86px] fixed-h-16 font-extrabold float-start   text-yellow-400">
            EVERY
          </p>
        </div>
        <div className=" flex space-x-40">
          <div className="h-10 w-[400px] ml-24  font-semibold text-lg text-start">
            <h1 className="underline text-start font-bold  text-xl">
              Digital Marketing Agency in Gurgaon
            </h1>
            <p className="mt-4">
              Our innovative brand and digital solutions Define the Blueprint |
              Ignite the New | Refresh the Old | Tell your Story | Create the
              right Buzz | and Gets you the right ROI | So that you can Bee
              Relevant. We are The Brand Bee and we buzz together to get
              everyone talking so you can&nbsp;Bee&nbsp;Everything.
            </p>
          </div>

          <div>
            {" "}
            <div className="float-right  ">
              {/* <p className="absolute  text-5xl font-extrabold">BEE</p> */}
              <p className="text-[220px]  justify-center  font-extrabold    text-white">
                THING
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[500px]">
          <div className="  ">
            <img
              src="https://thebrandbee.com/assets/imgs/home/section-1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeeEvery;
