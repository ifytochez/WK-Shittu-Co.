import React from "react";
import Image from "next/image";
import Accolades from "../../images/accolades.jpg";

const Page = () => {
  return (
    <div className="flex justify-center min-h-[90vh] px-16 mt-40">
      <div className="flex items-start max-w-7xl w-full">
        {/* Image Section */}
        <div className="relative w-[46%] flex justify-end pr-12">
          <div className="absolute inset-0 bg-blue-900 -z-10 w-[97%] h-[102%] translate-x-3 translate-y-3"></div>
          <Image
            src={Accolades}
            alt="Gold Medal"
            className="w-full h-auto object-cover relative"
          />
        </div>

        {/* Text Section */}
        <div className="w-[46%] pl-28 self-start">
          <h2 className="text-3xl font-bold text-black mb-4">OUR ACCOLADES</h2>
          <ul className="text-gray-700 text-xl leading-relaxed space-y-4 pt-4">
            <li className="pl-6">
              • We have represented various clients in complex multimillion
              Naira fraud prosecutions.
            </li>
            <li className="pl-6">
              • We are currently involved in the Economic and Financial Crimes
              Commission (EFCC) Anti Corruption Prosecution.
            </li>
            <li className="pl-6">
              • In Nigeria, WKS are proud to be one of the leading legal
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
