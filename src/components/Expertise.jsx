import bannerBackground from "../assets/banner_wallpaper.svg";
import skills from "./skills";

export default function Expertise() {
  return (
    <>
      <div className="main-container mt-2">
        <h1 className="text-center mb-16 pb-14 text-5xl font-bold underline">
          My Expertise
        </h1>

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className=" box-container items-center flex py-16"
        >
          {/* text container */}
          <div className="flex justify-center w-full text-white">
            <div className="w-2/3 text-center">
              <h1 className="text-4xl font-bold space-y-4">
                I love these technologies
              </h1>
              <p>
                I am passionate about leveraging these technologies to create
                innovative solutions and drive impactful projects.
              </p>
              <button className="px-4 py-2 bg-orange-600 rounded-full shadow-lg text-2xl">
                Hire Me
              </button>
            </div>
          </div>
          {/* skills contaier */}
          <div className="flex justify-center w-full">
            <div className="h-fit flex w-2/3 space-x-3 flex-wrap">
              {skills.map((skill, index) => (
                <p
                  key={index}
                  className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-600 cursor-pointer"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
