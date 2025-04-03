import React from "react";
import Image from "next/image";
import Law from "../../images/image.png";

const page = () => {
  return (
    <section className="py-20 px-[5%] sm:px-6 bg-white sm:text-center relative sm:pt-60 px-[9%] sm:px-0">
      <h1 className="text-base sm:text-[2.2rem] font-[600] text-black text-center">
        PRACTICE AREAS
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
        We have a range of Legal Experts dedicated to delivering expert advice
        on specific areas of Law.
      </p>
      <div className="pt-8 sm:pt-12 border-b-2 border-[#034694] w-20 mx-auto"></div>

      <h1 className="hidden sm:block absolute top-[80px] sm:top-[140px] left-1/2 -translate-x-1/2 text-[4rem] sm:text-[10rem] font-bold text-gray-200 opacity-40 tracking-normal">
        PRACTICE AREAS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 mt-12 sm:mt-16 max-w-7xl mx-auto relative z-10">
        {[
          "Criminal Law",
          "Intellectual Property Law",
          "Industrial Law",
          "Corporate Law",
          "Financial Law",
          "Human Rights Law",
        ].map((area, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6">
            <Image
              src={Law}
              alt="Law Icon"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <span className="text-sm sm:text-xl font-semibold text-black">
              {area}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
