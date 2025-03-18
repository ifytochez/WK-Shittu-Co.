import React from "react";
import Image from "next/image";
import Law from "../../images/image.png";

const page = () => {
  return (
    <section className="py-32 px-6 bg-white text-center relative pt-32">
      <h1 className="text-[2.2rem] font-[600] text-black">PRACTICE AREAS</h1>
      <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
        We have a range of Legal Experts dedicated to delivering expert advice
        on specific areas of Law.
      </p>
      <div className="pt-12 border-b-2 border-[#034694] w-20 mx-auto"></div>

      {/* Background Text */}
      <h1 className="absolute top-[140px] left-1/2 -translate-x-1/2 text-[10rem] lg:text-[10rem] font-bold text-gray-200 opacity-40 tracking-normal">
        PRACTICE AREAS
      </h1>

      {/* Practice Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 max-w-7xl mx-auto relative z-10">
        {[
          "Criminal Law",
          "Intellectual Property Law",
          "Industrial Law",
          "Corporate Law",
          "Financial Law",
          "Human Rights Law",
        ].map((area, index) => (
          <div key={index} className="flex items-center gap-6">
            <Image
              src={Law}
              alt="Law Icon"
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-semibold text-black">{area}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
