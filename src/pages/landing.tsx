import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faDownload,
  faInfoCircle,
  faMicrochip,
  faCarBurst,
  faBell,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function landing() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <div>
      {/*Header*/}
      <header className="sticky top-0 flex justify-between items-center px-14 py-5 bg-[whitesmoke] z-1 shadow-2xl">
        <div className="text-orange-600 text-2xl font-extrabold items-center">
          <FontAwesomeIcon icon={faCar} /> JEFFIX
        </div>
        {/*Navigation*/}
        <nav className="flex items-center gap-8">
          <a
            href=""
            className="
          relative text-lg font-semibold text-black transition-colors duration-300
          hover:text-orange-600
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-0 after:bg-orange-600
          after:transition-all after:duration-300
          hover:after:w-full
          "
          >
            About Us
          </a>
          <a
            href=""
            className="
          relative text-lg font-semibold text-black transition-colors duration-300
          hover:text-orange-600
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-0 after:bg-orange-600
          after:transition-all after:duration-300
          hover:after:w-full
          "
          >
            Features
          </a>
          <a
            href=""
            className="
          relative text-lg font-semibold text-black transition-colors duration-300
          hover:text-orange-600
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-0 after:bg-orange-600
          after:transition-all after:duration-300
          hover:after:w-full
          "
          >
            Contact
          </a>
          <button
            className="
          bg-orange-600 text-[whitesmoke] font-semibold py-3 px-5 rounded-2xl transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-md
          "
            onClick={toggleModal}
          >
            Sign In
          </button>
        </nav>
      </header>
      <main>
        {/*Download Application*/}
        <section
          className="
          bg-[linear-gradient(rgba(33,33,33,0.9),rgba(33,33,33,0.85)),url('https://wallpaperaccess.com/full/4444487.jpg')] bg-center bg-cover bg-fixed
          flex p-[20%] flex-col items-center justify-center text-center
          animate-[fadeIn] duration-1000 
        "
        >
          <h1
            className="
          text-6xl text-orange-600 mb-5 font-bold
          "
          >
            Advance AI Car Diagnostics
          </h1>
          <p
            className="
          p-2xl text-2xl text-[whitesmoke] mb-5
          "
          >
            Instantly identify issues with your Toyota Vios Gen 3 — powered by
            <br />
            cutting-edge AI technology for accurate results.
          </p>
          <div className="flex justify-center font-semibold gap-6">
            <a
              href=""
              className="
            border-orange-600 border-2 rounded-2xl py-5 px-12 text-[whitesmoke] transition-all duration-300
            hover:bg-orange-600 hover:-translate-y-0.5
            "
            >
              <FontAwesomeIcon icon={faInfoCircle} /> Learn More
            </a>
            <button
              className="
            font-semibold rounded-2xl py-5 px-12 bg-orange-600 text-[whitesmoke] transition-all duration-300
            hover:shadow-2xl hover:-translate-y-2
            "
            >
              <FontAwesomeIcon icon={faDownload} /> Download
            </button>
          </div>
        </section>

        {/*about*/}
        <section
          className="
        bg-black text-center justify-items-center p-36
        "
        >
          <h1
            className="
          text-orange-600 text-5xl font-bold relative pb-7
          after:content-[''] after:h-1 after:w-20 after:bg-orange-600
          after:absolute after:left-[calc(50%-40px)] after:-bottom-2
          after:mb-5 after:rounded-0.5
          "
          >
            About JEFFIX Diagnostics
          </h1>
          <p
            className="
          text-[whitesmoke] text-xl max-w-200
          "
          >
            JEFFIX Car Diagnostics is built specifically for Toyota Vios Gen 3
            owners who want fast, reliable, and AI-powered insights into their
            vehicle's damage. Our system combines automotive expertise with
            artificial intelligence to provide accurate diagnostics. Whether
            your car won't start, makes strange noises, or shows warning lights,
            our system helps you understand the cause before stepping into the
            repair shop, saving you time and money.
          </p>
        </section>
        {/*features*/}
        <section
          className="
        bg-[whitesmoke] text-center py-25 px-37
        "
        >
          <h1
            className="
          text-orange-600 text-4xl font-bold relative pb-25 z-0
          after:content-[''] after:h-1 after:w-20 after:bg-orange-600 after:absolute
          after:left-[calc(50%-40px)] after:-bottom-2 after:mb-20 rounded-xl
          "
          >
            Why Choose JEFFIX?
          </h1>
          <div
            className="
          flex justify-center gap-10
          "
          >
            <div
              className="
            bg-white rounded-xl w-80 p-10 relative shadow-2xl transition-all duration-300 hover:-translate-y-2
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-0
            before:bg-orange-600 before:transition-all before:duration-300 hover:before:h-full
            "
            >
              <FontAwesomeIcon
                icon={faMicrochip}
                className="
              text-orange-600 text-4xl pb-5 transition-all duration-300
              hover:text-6xl
              "
              />
              <h2
                className="
              text-2xl font-semibold pb-5
              "
              >
                AI-Powered Analysis
              </h2>
              <p>
                Our advanced system uses machine learning to analyze your input
                and predict car issues with 95% accuracy.
              </p>
            </div>
            <div
              className="
            bg-white rounded-xl w-80 p-10 relative shadow-2xl transition-all duration-300 hover:-translate-y-2
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-0
            before:bg-orange-600 before:transition-all before:duration-300 hover:before:h-full
            "
            >
              <FontAwesomeIcon
                icon={faCarBurst}
                className="
              text-orange-600 text-4xl pb-5 transition-all duration-300
              hover:text-6xl
              "
              />
              <h2
                className="
              text-2xl font-semibold pb-5
              "
              >
                Detailed Issue Reports
              </h2>
              <p>
                Receive comprehensive breakdowns of problems, severity levels,
                and recommended fixes with estimated costs.
              </p>
            </div>
            <div
              className="
            bg-white rounded-xl w-80 p-10 relative shadow-2xl transition-all duration-300 hover:-translate-y-2
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-0 
            before:bg-orange-600 before:transition-all before:duration-300 hover:before:h-full
            "
            >
              <FontAwesomeIcon
                icon={faBell}
                className="
              text-orange-600 text-4xl pb-5 transition-all duration-300
              hover:text-6xl
              "
              />
              <h2
                className="
              text-2xl font-semibold pb-5
              "
              >
                Maintenance Alerts
              </h2>
              <p>
                Receive timely reminders for upcoming services, repairs, and
                checkups to keep your vehicle in top condition.
              </p>
            </div>
          </div>
        </section>
        {/*disclaimer*/}
        <section
          className="
        bg-[linear-gradient(rgba(33,33,33,0.9),rgba(33,33,33,0.85)),url('https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover
        py-25 px-37 justify-items-center text-center
        "
        >
          <h3
            className="
          text-[whitesmoke] text-5xl pb-8 font-semibold
          "
          >
            Disclaimer
          </h3>
          <p
            className="
          text-[whitesmoke] text-xl pb-8 max-w-175
          "
          >
            This page is only for school or learning purposes. It does not copy
            or break any copyrights.
          </p>
          <button
            className="
          bg-orange-600 text-[whitesmoke] rounded-xl font-semibold py-5 px-8
          transition-ease duration-300 hover:-translate-y-1 hover:shadow-2xl
          "
          >
            <FontAwesomeIcon icon={faBoltLightning} />
            Learn More
          </button>
        </section>
      </main>
      {/*Footer*/}
      <footer className="bg-black text-[whitesmoke] justify-items-center text-left py-20 px-37">
        <div className="flex">
          <div className="text-[whitesmoke] max-w-125 p-10">
            <h1 className="text-orange-600 text-2xl font-bold pb-5">JEFFIX</h1>
            <p>
              Advanced AI-powered car diagnostics for Toyota Vios Gen 3 owners.
            </p>
            <div className="flex">
              <a href="" className="transition-all duration-300">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="bg-gray-600 p-3 rounded-[50%] mt-2.5 mr-4 transition-all hover:bg-orange-600 text-[white]"
                />
              </a>
              <a href="" className="transition-all duration-300">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="bg-gray-600 p-3 rounded-[50%] mt-2.5 mr-4 transition-all hover:bg-orange-600 text-[white]"
                />
              </a>
              <a href="" className="transition-all duration-300">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="bg-gray-600 p-3 rounded-[50%] mt-2.5 mr-4 transition-all hover:bg-orange-600 text-[white]"
                />
              </a>
              <a href="" className="transition-all duration-300">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="bg-gray-600 p-3 rounded-[50%] mt-2.5 mr-4 transition-all hover:bg-orange-600 text-[white]"
                />
              </a>
            </div>
          </div>
          <div className="text-[whitesmoke] max-w-125 p-10">
            <h1 className="text-orange-600 text-2xl font-bold pb-5">
              Quick Links
            </h1>
            <ul>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  About Us
                </a>
              </li>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  Features
                </a>
              </li>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="text-[whitesmoke] max-w-125 p-10">
            <h1 className="text-orange-600 text-2xl font-bold pb-5">Support</h1>
            <ul>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  Help Center
                </a>
              </li>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  Terms of Service
                </a>
              </li>
              <li className="pb-2.5">
                <a
                  href=""
                  className="transition-all duration-300 hover:text-orange-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full justify-items-center mt-8 pt-6 border-t-gray-600 border-t">
          <p>
            © 2025 JEFFIX Car Diagnostics. All rights reserved. Academic
            Purposes Only.
          </p>
        </div>
      </footer>
        {modalOpen && (
          <div onClick={toggleModal} className="z-2 fixed w-full h-full justify-center items-center top-0 left-0 flex transition bg-[#000000cc]">
            <div className="py-12 px-24 bg-[whitesmoke] text-center rounded-xl">
              <h1 className="text-3xl font-bold text-orange-600 mb-8">Select Login Type</h1>
              <div className="flex  flex-col mb-8">
                <Link to="/staff-login" className="p-4  mb-4 bg-orange-600 text-[whitesmoke] rounded-xl font-bold hover:bg-orange-950">Staff Login</Link>
                <button className="p-4 bg-orange-900 text-[whitesmoke] rounded-xl font-bold hover:bg-orange-950">Admin Login</button>
              </div>
              <button onClick={toggleModal} className="text-orange-900 underline hover:text-orange-950">Cancel</button>
            </div>
          </div>
        )}
    </div>
  );
}
