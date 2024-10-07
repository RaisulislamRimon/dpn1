import standard from "../../assets/images/umair/standard.jpeg";
import facebook from "../../assets/images/social/facebook.png";
import twitter from "../../assets/images/social/twitter.png";
import instagram from "../../assets/images/social/instagram.png";
import linkedin from "../../assets/images/social/linkedin.png";

const Banner = () => {
  return (
    <main>
      <div className="bg-gray-200 flex justify-center min-h-screen m-4">
        <div className="bg-white overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex-1 text-left">
            <small className="text-xs">Hi I am</small>
            <p className="text-orange-400 text-md font-semibold mb-2">
              Muhammed Umair
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
              UI & UX <span className="block ms-12 md:ms-20">Designer</span>
            </h2>
            <p className="text-gray-600 md:w-2/3 mb-6">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <a
              href="#hire"
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Hire Me
            </a>
          </div>
          <div className="grid place-content-center p-4 md:pe-12">
            <div className="relative w-60 h-60 overflow-hidden rounded-full">
              <img
                src={standard}
                alt="Muhammed Umair"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-auto w-auto min-w-full min-h-full object-cover"
              />
            </div>
            <div className="my-4 flex flex-wrap items-center justify-center">
              <a href="#" className="rounded-full">
                <img
                  src={facebook}
                  alt="Facebook Profile Link"
                  width="20"
                  height="20"
                />
              </a>
              <a href="#" className="rounded-full ms-3">
                <img
                  src={twitter}
                  alt="Twitter Profile Link"
                  width="20"
                  height="20"
                />
              </a>
              <a href="#" className="rounded-full ms-3">
                <img
                  src={instagram}
                  alt="Instagram Profile Link"
                  width="20"
                  height="20"
                />
              </a>
              <a href="#" className="rounded-full ms-3">
                <img
                  src={linkedin}
                  alt="LinkedIn Profile Link"
                  width="20"
                  height="20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
