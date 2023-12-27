import React from "react";
import ClickSoundWrapper from "../../Sound/ClickSoundWrapper";

const Footer = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <footer className="bg-custom bg-opacity-20 border-2 border-t-black dash_classes">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <p className="text-2xl font-semibold text-teal-600">SOUNDSCAPE</p>

              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

                <div>
                  <p className="mt-4 max-w-lg text-gray-800 font-medium text-base">If you have any confusion, please email us</p>
                </div>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="rounded-md border border-gray-100 focus-within:border-custom p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full focus:border-none focus:ring-transparent sm:text-sm p-5 outline-none"
                    />
                    <ClickSoundWrapper>
                    <button className="hover:bg-teal-400 bg-custom active:bg-teal-400 transition duration-500 px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold">
                      SEND
                    </button>
                    </ClickSoundWrapper>
                  </div>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-gray-900">Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        1on1 Coaching
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Company Review
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Accounts Review
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        HR Consulting
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        SEO Optimisation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        About
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Contact
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a  className="cursor-pointer text-gray-800 font-medium text-base transition hover:">
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a  className="cursor-pointer text-gray-800 text-sm font-medium transition hover:">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a  className="cursor-pointer text-gray-800 text-sm font-medium transition hover:">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a  className="cursor-pointer text-gray-800 text-sm font-medium transition hover:">
                      Cookies
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-600 font-medium">&copy; 2023. Soundscape. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
