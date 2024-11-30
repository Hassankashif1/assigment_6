import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      {/* Section - 1 */}
      <div className=" h-[228px] w-full p-3 flex justify-between items-center bg-[#F7F7F7]  ">
        <div className="flex items-center m-2 w-1/4 justify-center">
          <p className="text-2xl font-bold ">
            Trusted by 2000+ companies worldwide.
          </p>
        </div>

        <div className="flex items-center p-2  ">
          <div className="flex gap-9 items-center md:flex-col ">
            <Image
              className="lg:hidden md:hidden"
              src="/logo/5.png"
              alt="Logo"
              width={123.8}
              height={38.52}
            />
            <Image
              className="md:hidden"
              src="/logo/3.png"
              alt="Logo"
              width={123.8}
              height={38.52}
            />
            <Image src="/logo/1.png" alt="Logo" width={123.8} height={38.52} />
            <Image src="/logo/2.png" alt="Logo" width={123.8} height={38.52} />

            <Image
              className="lg:hidden md:hidden"
              src="/logo/6.png"
              alt="Logo"
              width={123.8}
              height={38.52}
            />
            <Image
              className="lg:hidden md:hidden"
              src="/logo/4.png"
              alt="Logo"
              width={123.8}
              height={38.52}
            />
          </div>
        </div>
      </div>
      {/* Section - 2 */}
      <div className=" h-[300px] flex justify-center items-center flex-col">
        <h1 className="m-5 text-[48px] font-bold md:text-center md:text-[32px]">Explore Courses By Category</h1>
        <p className="m-3 text-[18px] md:text-center">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="gap-x-6 gap-y-12 grid grid-cols-3 grid-rows-3 justify-self-center items-center lg:grid-cols-2 md:grid-cols-1  ">
        <div>
          <div className="md:p-4 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/pen.png"
                alt="Iamge"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Design & Development</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className=" bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/volume-high.png"
                alt="Iamge"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Marketing</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/group.png"
                alt="Image"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Development</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className=" bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/microphone.png"
                alt="Omage"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Communication</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className=" bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/link.png"
                alt="pen"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Digital Marketing</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className=" bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/arrow-2.png"
                alt="Image"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Self Development</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className=" bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden lg:hidden">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/briefcase.png"
                alt="Image"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Business</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden  lg:hidden">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/Book.png"
                alt="Image"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Finance</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>

        <div>
          <div className="bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden lg:hidden ">
            <span className="bg-white w-[100px] h-[100px] flex justify-center items-center">
              <img
                className="self-center"
                width={"32px"}
                src="/Team/book2.png"
                alt="Image"
              />
            </span>
            <span className="flex flex-col ">
              <span className="font-semibold text-xl">Consulting</span>
              <span>50+ Courses Available</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center m-24 mt-12">
        <Link href="">
          {" "}
          <button className="border-[1.5px] border-black rounded-md w-[155px] h-[49px] hover:bg-black hover:text-white">
            view All Course
          </button>
        </Link>
      </div>

      {/* Section - 3 */}
      <div className="flex flex-col">
        <div className="h-[50vh] mt-10 mb-10">
          <div className=" h-[300px] flex justify-center items-center flex-col md:h-auto">
            <h1 className="m-5 text-[48px] font-bold text-center">Our Achivements</h1>
            <p className="m-3 w-[90vw] text-center text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="grid grid-cols-4 justify-center place-items-center items-center gap-10 w-screen md:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl">+200</div>
              <div>Courses</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl">50k </div>
              <div>Members</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl">370k</div>
              <div>Students</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl">100+</div>
              <div>Recognition</div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - 4 */}
      <div className=" mt-20    flex justify-center items-center flex-col">
        <h1 className="m-5 text-5xl">Courses</h1>
        <p className="m-3 w-[90vw] text-center text-lg ">
          Your Ultimate Guide to learning
        </p>

        <div className="mt-10 mb-10 flex gap-10">
          <span>Popular</span>
          <span>Recommended</span>
          <span>Best Price</span>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 justify-center place-items-center items-center gap-10 lg:grid-cols-2 md:grid-cols-1">
        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:w-auto lg:w-auto ">
          <span>
            <img width={"416px"} src="/Card/Card1.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Design</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">UX/UI Design 201</span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>

        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:w-auto lg:w-auto  ">
          <span>
            <img width={"416px"} src="/Card/Card4.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Programmimg</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">Introduction to Python </span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>

        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col lg:w-auto  ">
          <span>
            <img width={"416px"} src="/Card/Card6.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Business</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">
              Data Analysis for Beginners
            </span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>

        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:w-auto">
          <span>
            <img width={"416px"} src="/Card/Card5.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Art</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">Art Specialization</span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>

        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:hidden">
          <span>
            <img width={"416px"} src="/Card/Card2.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Law</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">Rule of Law</span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>

        <div className="m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:hidden  ">
          <span>
            <img width={"416px"} src="/Card/Card3.png" alt="image" />
          </span>

          <span className="flex justify-between w-[100%] items-center  ">
            <span className="font-light text-sm">Tech</span>
            <span className="flex justify-around gap-2 ">
              <img src="/blog/star.png" alt="Image" />
              <span className="font-bold items-center">5.0</span>
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-bold text-2xl">Introduction to webflow</span>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </span>
          </span>

          <span className="flex items-center justify-start w-[100%] gap-8">
            <button className="font-normal border-[1.5px] border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white">
              Enroll Now
            </button>
            <span>$400</span>
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center m-24 mt-12">
        <button className="border-[1.5px] border-black rounded-md w-[155px] h-[49px] hover:bg-black hover:text-white">
          view All Course
        </button>
      </div>
      {/* Section - 5 */}
      <div className="bg-[#F7F7F7] h-[895px] lg:h-auto md:h-auto ">
        <div className=" h-[300px] flex justify-center items-center flex-col">
          <h1 className="m-5 text-[48px] font-bold">Our team</h1>
          <p className="m-3 w-[90vw] text-center text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 justify-center items-center gap-10 md:grid-cols-2 md:w-full md:flex md:flex-wrap md:justify-center">
          <div className="flex justify-center items-center flex-col gap-4 md:w-96">
            <img src="/Person/Person1.png" alt="Image" />
            <div className="text-[20px] font-semibold">James Nduku</div>
            <div>Marketing Coordinator</div>

            <div className="mt-10 flex items-center justify-center">
              <img src="/Icon/linkedin.png" alt="Image" />
              <img src="/Icon/Twitter.png" alt="Image" />
              <img src="/Icon/Dribble.png" alt="Image" />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-4 md:w-96 ">
            <img src="/Person/Person2.png" alt="Image" />
            <div className="text-[20px] font-semibold">Joseph Munyambu</div>
            <div>Nursing Assistant</div>

            <div className="mt-10 flex items-center justify-center">
              <img src="/Icon/linkedin.png" alt="Image" />
              <img src="/Icon/Twitter.png" alt="Image" />
              <img src="/Icon/Dribble.png" alt="Image" />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-4  md:w-96">
            <img src="/Person/Person3.png" alt="Image" />
            <div className="text-[20px] font-semibold">Joseph Ngumbau</div>
            <div>Medical Assistant</div>

            <div className="mt-10 flex items-center justify-center">
              <img src="/Icon/linkedin.png" alt="Image" />
              <img src="/Icon/Twitter.png" alt="Image" />
              <img src="/Icon/Dribble.png" alt="Image" />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-4 md:hidden">
            <img src="/Person/Person4.png" alt="Image" />
            <div className="text-[20px] font-semibold">Erick Kipkemboi</div>
            <div>Web Designer</div>

            {/* <div className='mt-10 flex items-center justify-center'>
            <img src="/Icon/linkedin.png" alt="Image" />
            <img src="/Icon/Twitter.png" alt="Image" />
            <img src="/Icon/Dribble.png" alt="Image" />
        </div> */}
          </div>

          <div className="flex justify-center items-center flex-col gap-4  md:hidden">
            <img src="/Person/Person5.png" alt="Image" />
            <div className="text-[20px] font-semibold">Stephen Kerubo</div>
            <div>President of Sales</div>

            {/* <div className='mt-10 flex items-center justify-center'>
            <img src="/Icon/linkedin.png" alt="Image" />
            <img src="/Icon/Twitter.png" alt="Image" />
            <img src="/Icon/Dribble.png" alt="Image" />
        </div> */}
          </div>

          <div className="flex justify-center items-center flex-col gap-4 md:hidden">
            <img src="/Person/Person6.png" alt="Image" />
            <div className="text-[20px] font-semibold">John Leboo</div>
            <div>Dog Trainer</div>

            {/* <div className='mt-10 flex items-center justify-center'>
                <img src="/Icon/linkedin.png" alt="Image" />
                <img src="/Icon/Twitter.png" alt="Image" />
                <img src="/Icon/Dribble.png" alt="Image" />
            </div> */}
          </div>
        </div>
      </div>
      {/* Section - 6 */}
      <div className="bg-[#F7F7F7]">
        <div className=" h-[300px] flex justify-center items-start flex-col lg:mt-[170px]">
          <h1 className="mb-5  ml-10 text-[48px] font-bold md:hidden">Customer testimonials</h1>
          <h1 className="mb-5  ml-11 text-[32px] font-bold text-center lg:hidden">What our Student Say</h1>
          <p className="   ml-5 w-[90vw] text-lg md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 justify-items-center items-center lg:grid-cols-2 md:grid-cols-1">
          <div className="m-3 border-[1.5px] border-black h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto">
            <img className="w-[35%]" src="/Testimonial/Stars.png" alt="image" />
            <div>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </div>
            <div className="flex gap-5">
              <img
                className="rounded-full"
                src="/person/person3.png"
                alt="Image"
              />
              <div className="flex flex-col">
                <div className="">James Nduku</div>
                <div>Software Developer</div>
              </div>
            </div>
          </div>

          <div className="md:hidden m-3 border-[1.5px] border-black h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto">
            <img className="w-[35%]" src="/Testimonial/Stars.png" alt="image" />
            <p >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="flex gap-5">
              <img
                className="rounded-full"
                src="/person/person1.png"
                alt="Image"
              />
              <div className="flex flex-col">
                <div className="">Erick Kipkemboi</div>
                <div>Scrum Master</div>
              </div>
            </div>
          </div>

          <div className="md:hidden m-3 border-[1.5px] border-black h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto">
            <img className="w-[35%]" src="/Testimonial/Stars.png" alt="image" />
            <div>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </div>
            <div className="flex gap-5">
              <img
                className="rounded-full"
                src="/person/person6.png"
                alt="Image"
              />
              <div className="flex flex-col">
                <div>Stephen Kerubo</div>
                <div>UI/UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
