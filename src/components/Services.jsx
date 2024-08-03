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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              totam amet soluta deserunt repellat reiciendis quasi quae
              voluptate obcaecati adipisci?
            </p>
            <button className="px-3 py-2 bg-orange-600 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl  service2 space-y-3">
            <i className="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              totam amet soluta deserunt repellat reiciendis quasi quae
              voluptate obcaecati adipisci?
            </p>
            <button className="px-3 py-2 bg-orange-600 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl  service3 space-y-3">
            <i className="text-5xl fa-solid fa-gears"></i>
            <h1 className="text-4xl">Artificial Intelligence</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              totam amet soluta deserunt repellat reiciendis quasi quae
              voluptate obcaecati adipisci?
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
