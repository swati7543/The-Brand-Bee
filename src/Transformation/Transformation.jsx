import React from "react";

function Transformation(props) {
  return (
    <div className="h-[350px] bg-gray-100 rounded-xl mr-24 pt-5 m-24">
      <div className="flex space-x-16">
        <div className="">
          <img
            src="	https://thebrandbee.com/assets/imgs/home/CTA.webp"
            alt=""
            className="m-10 ml-16 h-72 w-72"
          />
        </div>
        <div className="mt-16">
          <p className="text-5xl text-start font-bold">
            Let's make <br /> something great <br />
            together
          </p>
        </div>
        <div className="mt-16 text-start">
          <p className="text-xl">
            Still,wating for us to make the first MOVE? <br /> Don't BEE shy,
            get in TOUCH.
          </p>
          <div className="h-16 w-72 p-4 rounded-md  mt-6 bg-yellow-400 ">
            <p>Begin Your Transformation Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transformation;
