import React from "react";

function Business() {
  return (
    <div className="p-28 h-[1000px] bg-white text-black">
      <div className=" text-3xl font-semibold">
        <p className="text-start">
          We are passionate to create connected brands and campaigns to enable
          stable and successful
        </p>
        <p> relationships between businesses and customers.</p>
      </div>
      <div className="flex mt-24">
        <div className=" pr-32">
          <img src="https://thebrandbee.com/assets/imgs/home/DJB.webp" alt="" />
        </div>
        <div className="text-start text-lg space-y-7 text-black">
          <p>
            Our award-winning team uses strategy, design, SEO,
            <br />
            paid ads, and social media to connect with current and <br />
            potential customers, generate more leads, and prepare <br />
            your business for future growth.
          </p>
          <p>
            We can help you with the latest high tech solutions;
            <br />
            thanks to our company culture, which is built on <br />
            everyday learning and self-improvement from each <br />
            and every single task that we do.
          </p>
          <p className="font-extrabold text-lg">
            Deeptanshu Bansal - Director, The Brand Bee{" "}
            <img
              src="	https://thebrandbee.com/assets/imgs/sin.webp"
              alt=""
              className="h-20 mt-8"
            />
          </p>
          <div>
            <img
              src="	https://thebrandbee.com/assets/imgs/home/DJB-small.webp"
              alt=""
              className="ml-80"
            />
          </div>
        </div>
        <div>
          <img
            src="https://thebrandbee.com/assets/imgs/home/DJB-side.webp"
            alt=""
            className="mt-60 ml-24"
          />
        </div>
      </div>
    </div>
  );
}

export default Business;
