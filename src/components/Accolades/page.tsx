import React from "react";
import Image from "next/image";
import Accolades from "../../images/accolades.jpg";

const Page = () => {
  return (
    <div className="flex justify-center min-h-[90vh] px-12 sm:px-16 mt-20 sm:pt-40 bg-white">
      <div className="flex flex-col sm:flex-row items-start max-w-7xl w-full sm:w-3/4 mx-auto">
        {/* Image Section */}
        <div className="relative w-full sm:w-[46%] flex justify-center sm:justify-end sm:pr-12 mb-6 sm:mb-0">
          <div className="hidden sm:block absolute inset-0 bg-blue-900 -z-10 w-[97%] h-[102%] translate-x-3 translate-y-3"></div>
          <Image
            src={Accolades}
            alt="Gold Medal"
            className="w-full h-auto object-cover relative"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-[46%] sm:pl-28 self-start">
          <h2 className="text-base sm:text-[2.2rem] font-bold text-black flex">
            OUR ACCOLADES
          </h2>
          <ul className="list-disc list-inside mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed sm:px-0">
            <li className="sm:pl-6">
              We have represented various clients in complex multimillion Naira
              fraud prosecutions.
            </li>
            <li className="sm:pl-6">
              We are currently involved in the Economic and Financial Crimes
              Commission (EFCC) Anti Corruption Prosecution.
            </li>
            <li className="sm:pl-6">
              In Nigeria, WKS are proud to be one of the leading legal
              practitioners as Solicitor and Advocate of the Supreme Court of
              Nigeria.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
