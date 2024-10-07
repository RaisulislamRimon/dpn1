import React, { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
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
          </div>
          {/* routes */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
            <a
              href="index.html"
              className="inline-flex items-center border-b-2 border-gray-800 px-1 pt-1 text-sm font-semibold text-gray-900"
            >
              Home
            </a>
            <a
              href="about.html"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
            >
              About Me
            </a>
            <a
              href="services.html"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
            >
              Services
            </a>
            <a
              href="projects.html"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
            >
              Projects
            </a>
            <a
              href="testimonials.html"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
            >
              Testimonials
            </a>
            <a
              href="contact.html"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
            >
              Contact
            </a>
            <a
              className="text-white bg-orange-500 px-2 py-1 rounded"
              href="/path/to/CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="mt-3 grid place-content-center space-y-1">
              <a
                href="index.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Home
              </a>
              <a
                href="about.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                About Me
              </a>
              <a
                href="services.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Services
              </a>
              <a
                href="projects.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Projects
              </a>
              <a
                href="testimonials.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Testimonials
              </a>
              <a
                href="contact.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Contact
              </a>
              <a
                className="text-white text-center bg-orange-500 px-2 py-1 rounded"
                href="/path/to/CV.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
