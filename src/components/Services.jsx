export default function Services() {
  return (
    <>
      <div className="main-container space-x-5 px-10 py-16">
        <h1 className="text-center pb-14 text-5xl font-bold underline">
          My Services
        </h1>
        <div className="services-container space-x-5 flex mt-12">
          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl service1 space-y-3">
            <i className="text-5xl fa-solid fa-web-awesome"></i>
            <h1 className="text-4xl">Frontend Development</h1>
            <p>
              I offer professional front-end development services, specializing
              in creating visually appealing and responsive user interfaces.
              Utilizing modern frameworks such as React.js, along with HTML,
              CSS, and JavaScript, I ensure seamless and engaging user
              experiences.
            </p>
            <button className="px-3 py-2 bg-orange-600 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl  service2 space-y-3">
            <i className="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              As a back-end developer, I provide robust and efficient
              server-side solutions, leveraging technologies like Java, Spring
              Boot, and MySQL. My services include API development, database
              management, and backend logic implementation.
            </p>
            <button className="px-3 py-2 bg-orange-600 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl  service3 space-y-3">
            <i className="text-5xl fa-solid fa-gears"></i>
            <h1 className="text-4xl">ML Developer</h1>
            <p>
              I specialize in machine learning development, offering expertise
              in data analysis, model training, and deployment using Python and
              popular ML frameworks. My services include developing intelligent
              systems for tasks such as data extraction, compression, and
              summarization.
            </p>
            <button className="px-3 py-2 bg-orange-600 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
