import React from "react";
import Image from "next/image"; 

function Header() {
  return (
    <div className="w-[100vw]">
      <div className="sm:hidden flex justify-around h-[54px] items-center border-b-black border-b-[1.5px] npm mb-5">
        <div className="lg:text-[14px]">
          Phone Number: 956 742 455 678 | Email:info@ddsgnr.
        </div>
        <div className=" flex gap-1 md:hidden ">
          <Image
            src="/Icon/Facebook.png"
            alt="Facebook"
            width={18}
            height={18}
          />
          <Image
            src="/Icon/Instagram.png"
            alt="Instagram"
            width={18}
            height={18}
          />
          <Image src="/Icon/Twitter.png" alt="Twitter" width={18} height={18} />
          <Image
            src="/Icon/Linkedin.png"
            alt="Linkedin"
            width={18}
            height={18}
          />
        </div>
      </div>

      <div className="flex justify-between w-[100vw]">
        <div className=" h-[72px] w-screen  p-2 flex justify-between items-center border-b-[#676767] border-b-[1.5px] bg-[#F7F7F7]   ">
          <div className="flex items-center m-2 w-1/6 justify-center gap-x-4">
            <Image width={32.58} height={30.38} src="/logo.png" alt="logo" />
            <span className="text-2xl">Ddsgnr</span>
          </div>

          <div className="hidden  md:block">
            <Image src="/lines.svg" alt="image" width={24} height={24}/>
          </div>

          <div className="h-[44px] w-[850px] p-2 bg-[#ffffff] items-center flex md:hidden  lg:w-auto  ">
            <div className="flex gap-9  items-center justify-center lg:gap-6 ">
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                Home
              </span>
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                Courses
              </span>
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                Services
              </span>
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                Acheivements
              </span>
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                About Us
              </span>
              <span className="hover:underline hover:cursor-pointer lg:w-auto">
                Testimonial
              </span>
              <button className="border-[1.5px] border-black rounded-md w-[80px]  h-[40px]  hover:bg-black hover:text-white lg:h-auto lg:w-auto">
                Login
              </button>
              <button className="border-2 border-black bg-black text-white rounded-md w-[80px] h-[40px] hover:bg-white hover:text-black lg:w-auto lg:h-auto ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
