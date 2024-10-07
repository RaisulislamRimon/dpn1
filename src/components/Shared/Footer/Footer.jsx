// Suggested code may be subject to a license. Learn more: ~LicenseLog:128365885.
import facebook from "../../../assets/images/social/facebook.png";
import twitter from "../../../assets/images/social/twitter.png";
import instagram from "../../../assets/images/social/instagram.png";
import linkedin from "../../../assets/images/social/linkedin.png";

function Footer() {
  return (
    <footer className="bg-gray-200 shadow dark:bg-gray-800">
      <div className="grid place-content-center">
        <div className="grid place-content-center my-4">
          <a
            href="index.html"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="w-8 h-8 text-white bg-orange-500 italic text-center font-mono pt-1 rounded-full">
              MU
            </span>
            <span className="text-gray-400 text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="font-medium text-gray-800">M</span>umair
            </span>
          </a>
        </div>
        <div className="my-4">
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <a href="index.html" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="hover:underline me-4 md:me-6">
                About Me
              </a>
            </li>
            <li>
              <a href="services.html" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="projects.html" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a
                href="testimonials.html"
                className="hover:underline me-4 md:me-6"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="my-4 flex flex-wrap items-center justify-center">
          <a href="#" className="rounded-full">
            <img
              src={facebook}
              alt="Facebook Profile Link"
              width="26"
              height="26"
            />
          </a>
          <a href="#" className="rounded-full ms-3">
            <img
              src={twitter}
              alt="Twitter Profile Link"
              width="26"
              height="26"
            />
          </a>
          <a href="#" className="rounded-full ms-3">
            <img
              src={instagram}
              alt="Instagram Profile Link"
              width="26"
              height="26"
            />
          </a>
          <a href="#" className="rounded-full ms-3">
            <img
              src={linkedin}
              alt="LinkedIn Profile Link"
              width="26"
              height="26"
            />
          </a>
        </div>
      </div>

      <div className="w-full mx-auto bg-gray-700 max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-white">
          © 2023{" "}
          <a href="/" className="text-yellow-500 hover:underline">
            Mumair
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
