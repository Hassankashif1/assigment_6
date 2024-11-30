import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="flex md:flex-col md:items-center ">
        <div className="my-[30px] mx-[30px]  p-4 h-[800px]  w-[50vw] justify-center items-center flex flex-col flex-start gap-[15px] lg:h-auto md:w-[90vw] md:h-auto">
          <h1 className="text-[56px] w-[90%] font-bold md:text-[40px] ">
            Learn new skills online with ease
          </h1>
          <p className="text-lg w-[90%] md:text-[18px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <span className="w-[90%] flex justify-start gap-3 md:flex-row md:items-center ">
            <button className="border-2 border-black bg-black text-white rounded-md w-[150px] md:w-[178px] h-[50px] hover:bg-white hover:text-black">
              Start learning now
            </button>
            <button className="border-2 border-black rounded-md w-[150px] md:w-[164px] h-[50px] hover:bg-black hover:text-white">
              Explore Courses
            </button>
          </span>
        </div>

        <div className=" w-[50vw]  h-auto flex justify-center md:h-auto md:w-[100vw]">
          <Image
            className=""
            src="/Image.jpg"
            alt="Image"
            width={640}
            height={800}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
