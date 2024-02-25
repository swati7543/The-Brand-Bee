import React from "react";
import Marquee from "react-fast-marquee";
// import pic1 from "..//../publicebp";
function OurClient(props) {
  return (
    <div className="">
      <div className="h-[500px] mt-20  w-full bg-white text-black">
        <h1 className="text-5xl font-semibold mb-6">Our Clients</h1>
        <p className="text-base font-medium">
          WE DON'T BELIEVE IN MONOGAMY.WE KEEP ALL OUR CLIENTS HAPPY AT THE SAME
          TIME.
        </p>

        <div>
          <Marquee>
            {" "}
            <div className="snap-center ...">
              <img
                src={""}
                alt=""
                // className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>
            <div className="snap-center ...">
              <img
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                alt=""
                className="h-60 p-6"
              />
            </div>{" "}
          </Marquee>
        </div>

        <div className="pl-[680px] mt-6 ">
          <div className="h-14 w-36 hover:bg-black hover:text-white p-4 rounded-md font-bold bg-yellow-400">
            <h1>View More</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClient;
