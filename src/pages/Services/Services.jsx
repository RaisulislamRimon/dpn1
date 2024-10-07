import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Services</h2>
        <p className="text-md w-auto md:w-3/5 mx-auto text-gray-600 mb-12">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* UI/UX Design */}
          <div className="text-left bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faPencilRuler} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">UI/UX</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>

          {/* Web Design */}
          <div className="text-left bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl text-green-500 mb-4">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>

          {/* App Design */}
          <div className="text-left bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl text-red-500 mb-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">App Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>

          {/* Graphic Design */}
          <div className="text-left bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl text-yellow-500 mb-4">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
