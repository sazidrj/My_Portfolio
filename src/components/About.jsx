import { useState } from "react";
import bannerImage from "../assets/1.jpg";

export default function About() {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Web Developer",
    desc1:
      "I am a skilled Java Developer with a solid foundation in Java programming and Spring Boot. My experience includes developing and maintaining high-performance web applications, integrating with databases, and implementing complex backend solutions. I am adept at solving challenging problems and delivering efficient, scalable applications.",
    desc2:
      "As a proficient Web Developer, I specialize in creating responsive and interactive web applications using HTML, CSS, JavaScript, and modern frameworks like React.js. I have a strong focus on both front-end aesthetics and backend functionality, ensuring secure, user-friendly, and robust web solutions.",
    actionButton: {
      title: "Read more...",
      link: "readmore",
    },
  });

  return (
    <>
      <div className="main-container bg-gray-100 py-16">
        <h1 className="text-center pb-16 text-5xl font-bold underline">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              src={data.image}
              alt=""
              className="w-96 h-96 rounded-full shadow-lg"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-600 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
