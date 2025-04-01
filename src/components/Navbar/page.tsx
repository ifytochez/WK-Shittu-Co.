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
import { Menu, X } from "lucide-react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setScrolled(scrollPosition > 30);

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
        <nav
          className={`fixed top-0 left-0 w-full flex justify-between items-center sm:px-64 py-3 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white shadow-lg text-[#6e94c1]"
              : "bg-[#41708f] bg-opacity-80 text-white backdrop-blur-md"
          }`}
        >
          <div className="flex items-center space-x-4">
            <Image
              src={Logo}
              alt="Logo"
              className="w-16 sm:w-20 md:w-24 h-auto"
            />

            <h3
              className={`text-[16px] md:text-[26px] tracking-wide leading-none ${
                scrolled ? "text-[#41708f]" : "text-white"
              }`}
            >
              <span className="font-bold">W.K.</span>
              <span className="font-normal"> Shittu & Co.</span>
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-x-8 text-[15.5px] uppercase">
            {[
              "home",
              "about",
              "practice",
              "principal",
              "accolades",
              "consult",
            ].map((id) => (
              <button
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
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <button
              className={`px-6 py-[6px] rounded-full cursor-pointer ${
                scrolled
                  ? "bg-[#034694] text-[#f5f8f9]"
                  : "bg-[#698ea6] text-[#f5f8f9]"
              } bg-opacity-25`}
            >
              Contact
            </button>
            <a
              href="https://wkshittuandco.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                scrolled
                  ? "text-blue-600 hover:text-blue-700"
                  : "text-[#85a3b7] hover:text-white"
              }
            >
              Blog
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#41708f] text-white flex flex-col items-center justify-center space-y-6 z-40">
            {[
              "home",
              "about",
              "practice",
              "principal",
              "accolades",
              "consult",
              "contact",
            ].map((id) => (
              <button
                key={id}
                className="text-lg"
                onClick={() => {
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="text-center px-6 md:px-16 lg:px-20">
          <p className="text-sm md:text-[2.6rem] font-light leading-tight">
            Innovative Solutions to the Most Complex Legal Problems.
          </p>
        </div>
      </div>

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
