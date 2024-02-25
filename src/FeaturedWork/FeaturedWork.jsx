import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FeaturedWork(props) {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div className="h-[3500px] p-2  bg-black text-white ">
      <div
        className=" absolute flex  justify-center items-start flex-wrap"
        data-aos="zoom-in-down"
      >
        <h1 className="pt-32 text-6xl p-[500px] font-medium">FEATURED WORK</h1>
      </div>
      <div className="  mt-80 space-y-10 flex justify-center items-start flex-wrap gap-x-10">
        <div className=" space-y-40" data-aos="zoom-in-up">
          {" "}
          <img
            src="	https://thebrandbee.com/assets/imgs/home/work-1.webp"
            alt=""
            className="h-[700px] w-[650px]"
          />
          <div data-aos="zoom-in-up">
            {" "}
            <img
              src="https://thebrandbee.com/assets/imgs/home/work-3.webp"
              alt=""
              className="h-[700px] w-[650px]"
            />{" "}
          </div>{" "}
          <div data-aos="zoom-in-up">
            {" "}
            <img
              src="	https://thebrandbee.com/assets/imgs/home/work-5.webp"
              alt=""
              className="h-[700px] w-[650px]"
            />{" "}
          </div>
        </div>
        <div className="float-right pt-80 space-y-40" data-aos="zoom-in-up">
          {" "}
          <img
            src="	https://thebrandbee.com/assets/imgs/home/work-2.webp"
            alt=""
            className="h-[700px] w-[650px]"
          />
          <div className="" data-aos="zoom-in-up">
            {" "}
            <img
              src="	https://thebrandbee.com/assets/imgs/home/work-4.webp"
              alt=""
              className="h-[700px] w-[650px]"
            />
          </div>
          <div className="" data-aos="zoom-in-up">
            <img
              src="	https://thebrandbee.com/assets/imgs/home/work-6.webp"
              alt=""
              className="h-[700px] w-[650px]"
            />{" "}
          </div>
        </div>
      </div>
      <div className="h-40  w-40 mt-[200px] ml-[650px] bg-white text-black  p-10 pt-16 rounded-full">
        <h6>Contact Us</h6>
      </div>
    </div>
  );
}

export default FeaturedWork;
