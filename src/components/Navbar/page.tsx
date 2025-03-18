"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../images/Logo_gold.png";
import About from "../About/page";
import Practice from "../Practice/page";
import Principal from "../Principal/page";
import Accolades from "../Accolades/page";
import Consult from "../Consult/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = [
      { id: "home", offset: 0 },
      { id: "about", offset: document.getElementById("about")?.offsetTop },
      {
        id: "practice",
        offset: document.getElementById("practice")?.offsetTop,
      },
      {
        id: "principal",
        offset: document.getElementById("principal")?.offsetTop,
      },
      {
        id: "accolades",
        offset: document.getElementById("accolades")?.offsetTop,
      },
      { id: "consult", offset: document.getElementById("consult")?.offsetTop },
      { id: "contact", offset: document.getElementById("contact")?.offsetTop },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 30); // Change navbar color when scrolled down 50px

      for (let i = sections.length - 1; i >= 0; i--) {
        if (
          sections[i].offset !== undefined &&
          scrollPosition >= sections[i].offset!
        ) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="relative w-full h-screen bg-[#41708f] flex flex-col items-center justify-center text-white"
        id="home"
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full flex justify-center py-3 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white shadow-lg text-[#6e94c1]"
              : "bg-[#41708f] bg-opacity-80 text-white backdrop-blur-md"
          }`}
        >
          <div className="w-full max-w-[1400px] flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Image src={Logo} alt="Logo" width={120} height={120} />
              <h3
                className={`text-[26px] tracking-wide leading-none ${
                  scrolled ? "text-[#41708f]" : "text-white"
                }`}
              >
                <span className="font-bold">W.K.</span>
                <span className="font-normal"> Shittu & Co.</span>
              </h3>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center gap-x-8 text-[15.5px] uppercase">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "practice", label: "Practice Areas" },
                { id: "principal", label: "Meet the Principal" },
                { id: "accolades", label: "Accolades" },
                { id: "consult", label: "Consult" },
              ].map(({ id, label }) => (
                <li
                  key={id}
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeSection === id
                      ? scrolled
                        ? "text-[#6e94c1] font-bold"
                        : "text-white font-bold"
                      : scrolled
                      ? "text-gray-500 hover:text-blue-600"
                      : "text-[#85a3b7] hover:text-white"
                  }`}
                  onClick={() =>
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {label}
                </li>
              ))}

              <li
                className={`px-6 py-[6px] rounded-full cursor-pointer  ${
                  scrolled
                    ? "bg-[#034694] text-[#f5f8f9]"
                    : "bg-[#698ea6] text-[#f5f8f9]"
                } bg-opacity-25`}
              >
                Contact
              </li>

              <li
                className={`cursor-pointer ${
                  scrolled
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-[#85a3b7] hover:text-white"
                }`}
              >
                <a
                  href="https://wkshittuandco.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center px-8 md:px-16 lg:px-20">
          <p className="text-[2.6rem] md:text-[2.6rem] font-light leading-tight">
            Innovative Solutions to the Most Complex Legal Problems.
          </p>
        </div>
      </div>

      {/* Sections with IDs */}
      <div id="about">
        <About />
      </div>
      <div id="practice">
        <Practice />
      </div>
      <div id="principal">
        <Principal />
      </div>
      <div id="accolades">
        <Accolades />
      </div>
      <div id="consult">
        <Consult />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
