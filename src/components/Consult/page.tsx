import React from "react";
import "./consult.css";

const Page = () => {
  return (
    <div className="consult relative flex flex-col justify-center z-10 sm:text-center bg-white pt-16 sm:pt-0 px-[7%] sm:px-0">
      <h2 className="text-base sm:text-[2.2rem] font-bold text-black flex justify-center">
        CONSULT W.K. SHITTU & Co.
      </h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6">
        What makes WKS different from others is that we have well-groomed and
        efficient lawyers with domestic and international law backgrounds. We
        believe that we succeed only when our clients succeed, and our culture
        of respect and professional excellence is a key factor in how we respond
        to our clients' needs.
      </p>
      <div className="pt-8 border-b-2 border-[#034694] w-20 mx-auto"></div>
    </div>
  );
};

export default Page;
