import reaction from "../../assets/images/umair/reaction.png";

const AboutMe = () => {
  return (
    <section>
      <div className="bg-gray-200 flex justify-center min-h-screen">
        <div className="bg-white overflow-hidden flex flex-col md:flex-row">
          <div className="grid place-content-center p-4 md:pe-12">
            <div className="relative w-60 h-60 overflow-hidden rounded-full">
              <img
                src={reaction}
                alt="Muhammed Umair"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-auto w-auto min-w-full min-h-full object-cover"
              />
            </div>
          </div>
          <div className="p-6 md:px-12 flex-1">
            <h2 className="text-xl font-bold text-gray-700 mb-4">About Me</h2>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>
            <div className="mb-2">
              <label className="block font-semibold">UX Design</label>
              <div className="relative pt-1">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">80%</span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Web Design</label>
              <div className="relative pt-1">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">90%</span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label className="block font-semibold">App Design</label>
              <div className="relative pt-1">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">80%</span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Graphic Design</label>
              <div className="relative pt-1">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
