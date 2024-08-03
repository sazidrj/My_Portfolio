import { useEffect, useRef } from "react";
import bannerImage from "../assets/2.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

export default function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Passionate Programmer",
        "Problem Solver",
      ], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    //Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      <div className="w-full flex justify-center items-center text-white">
        <div className="w-2/3 space-y-2 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Sazid Ali</h1>
          <h2 className="text-3xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            MTech AI 2024 student from IIT Ropar. I have a very deep
            understanding of Data structure and Algorithms. I can adapt myself
            according to new technology and the environment.
          </p>

          <div className="icons-container space-x-5 flex">
            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center bg-gray-800 px-4 py-4 rounded-full"
              href=""
            >
              <i className="fa-brands fa-facebook text-4xl"></i>
            </a>
            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center bg-gray-800 px-4 py-4 rounded-full"
              href=""
            >
              <i className="fa-brands fa-instagram text-4xl"></i>
            </a>
            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center bg-gray-800 px-4 py-4 rounded-full"
              href=""
            >
              <i className="fa-brands fa-youtube text-4xl"></i>
            </a>
            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 flex justify-center items-center bg-gray-800 px-4 py-4 rounded-full"
              href=""
            >
              <i className="fa-brands fa-linkedin text-4xl"></i>
            </a>
          </div>

          <br />

          <a
            href="/contact"
            className="text-2xl px-3 py-2 bg-orange-600 rounded-full shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          src={bannerImage}
          alt=""
          className="w-96 h-96 rounded-full shadow-lg w-fit my-2"
        />
      </div>
    </div>
  );
}
