import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between items-start h-[160px] lg:flex-col lg:items-center md:flex-col md:items-center ">
          <div className="  flex justify-center items-start flex-col lg:items-center md:items-center">
            <h1 className="  font-bold text-xl ">
              Subscribe to our newsletter
            </h1>
            <p className="    text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="flex gap-2 ">
              <input
                className="border-[1.5px] border-black h-[49px] rounded-md lg:w-auto"
                type="text"
                placeholder="   Enter Your Email"
              />
              <Link href="">
                {" "}
                <button className="border-[1.5px] border-black rounded-md w-[155px] lg:w-auto h-[49px] hover:bg-black hover:text-white">
                  Subscribe
                </button>
              </Link>
            </span>
            <div>
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 justify-items-center gap-8  h-[300px] mt-10 mb-10  lg:grid-cols-2 lg:h-auto content-center md:grid-cols-2 md:h-auto ">
          <div className="flex gap-3 items-start justify-start w-[204px] ">
            <Image src="/logo.jpg" alt="Image" width={32.58} height={30.38}/>
            <span className="font-bold text-[]">Ddsgnr</span>
          </div>

          <div className="flex flex-col gap-3 items-start justify-start w-[204px]">
            <span className="font-bold">Courses</span>
            <span>Business</span>
            <span>Development</span>
            <span>Technology</span>
            <span>Design</span>
            <span>Programming</span>
          </div>

          <div className="flex flex-col gap-3 items-start justify-start w-[204px]">
            <span className="font-bold">Resources</span>
            <span>Career</span>
            <span>Resume</span>
            <span>Learning</span>
            <span>Interview Preparation</span>
            <span>Jobs</span>
          </div>

          <div className="flex flex-col gap-3 items-start justify-start w-[204px]">
            <span className="font-bold">About Us</span>
            <span>Contact</span>
            <span>Help/Support</span>
            <span>FAQ</span>
            <span>Terms and Conditions</span>
            <span>Partners</span>
          </div>
        </div>

        <div className="border-t-2 border-t-black ">
          <div className="flex justify-between mt-10 ">
            <div className="flex gap-4 text-sm ">
              <span>2023 Ddsgnr. All right reserved.</span>
              <span className="underline ">Privacy Policy</span>
              <span className="underline">Terms of Service</span>
              <span className="underline">Cookies Settings</span>
            </div>
            <div className="flex gap-2 md:hidden">
              <Image className="" src="/Icon/Facebook.png" alt="Image" width={18} height={18}/>
              <Image className="" src="/Icon/Instagram.png" alt="Image" width={18} height={18}/>
              <Image className="" src="/Icon/Twitter.png" alt="Image" width={18} height={18}/>
              <Image className="" src="/Icon/Linkedin.png" alt="Image" width={18} height={18}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
