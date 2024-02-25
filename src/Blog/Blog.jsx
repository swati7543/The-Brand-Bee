import React from "react";

function Blog() {
  return (
    <div className="p-24 h- flex ">
      <div>
        {" "}
        <div className="h-8 w-32 mb-5 p-0.5 rounded-2xl  bg-white text-black border-2  ">
          <p className="text-sm">Recent Blog</p>
        </div>
        <div>
          <p className="text-start text-4xl font-bold mb-5 ">
            Whats New? <br /> News and Blogs
          </p>

          <p className="text-start mb-9">
            We don't mind sharing the secret. Read our <br /> blogs and stay
            updated about the latest <br /> trends of the digital world
          </p>
        </div>
        <div className="h-14 rounded-md  w-44 mb-5 p-2.5  hover:bg-black hover:text-white bg-yellow-400 text-black border-2  ">
          <p className=" text-xl text-start ml-3 font-medium ">All Articles</p>
        </div>
      </div>
      <div className="ml-24 ">
        <div>
          <img
            src="https://thebrandbee.com/admin/images/posts/Facebook_advertising_agencies_in_Delhi_.webp"
            alt=""
            className="h-60 w-[450px]"
          />
        </div>
        <div className="mt-6">
          <div className="h-8 w-32 mb-5 p-0.5 rounded-2xl  bg-white text-black border-2  ">
            <p className="text-sm">23/01/2024</p>
          </div>
          <div>
            <p className="text-start text-2xl font-bold hover:text-blue-800">
              Navigating The Corporate <br /> Landscape with LinkedIn and <br />{" "}
              Facebook Advertising Agencies
            </p>
          </div>
        </div>
      </div>

      <div className="ml-5">
        <div className="">
          <div>
            <img
              src="https://thebrandbee.com/admin/images/posts/Google_advertising_agencies.webp"
              alt=""
              className="h-60 w-[450px]"
            />
          </div>
          <div className="mt-6 ">
            <div className="h-8 w-32 mb-5 p-0.5 rounded-2xl  bg-white text-black border-2  ">
              <p className="text-sm">18/01/2024</p>
            </div>
            <div>
              <p className="text-start text-2xl font-bold hover:text-blue-800">
                Navigating The Digital Frontier: The <br />
                Art of Google Advertising Agencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
