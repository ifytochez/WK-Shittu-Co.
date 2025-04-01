import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full px-[11%] flex flex-col-reverse md:flex-row justify-between items-center py-10 min-h-[80vh] bg-white">
      <div className="w-full sm:w-[45%] space-y-6 text-gray-800">
        <div className="flex items-start space-x-3 pb-4">
          <FaMapMarkerAlt className="text-blue-900" />
          <p className="text-base sm:text-lg text-gray-900 max-w-4xl">
            <strong>LAGOS:</strong> No 97 Allen Avenue, opposite Ecobank Nig.
            Plc Building, Ikeja, Lagos State
          </p>
        </div>

        <div className="flex items-start space-x-3 pb-4">
          <FaMapMarkerAlt className="text-blue-900" />
          <p className="text-base text-gray-700 max-w-4xl">
            <strong>ABUJA:</strong> Suite C17 Maina’s Court Opp. Leadway House
            Central Business District Abuja
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-blue-900" />
          <a
            href="tel:+2348055544513"
            className="text-blue-900 text-base sm:text-xl hover:underline mb-6"
          >
            +2348055544513
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-blue-900" />
          <a
            href="tel:+2348152445703"
            className="text-blue-900 text-base sm:text-xlhover:underline mb-6"
          >
            +2348152445703
          </a>
        </div>

        <div className="flex items-center space-x-3 pb-20">
          <FaEnvelope className="text-blue-900" />
          <a
            href="mailto:wkshittuandco@yahoo.com"
            className="text-blue-900 text-base sm:text-xl hover:underline"
          >
            wkshittuandco@yahoo.com
          </a>
        </div>
      </div>

      <div className="w-full sm:w-[45%]">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 placeholder-black sm:placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 placeholder-black sm:placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black sm:placeholder-gray-400"
          />
          <div className="flex justify-start pb-20">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-md hover:bg-blue-900"
            >
              CONTACT US
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
