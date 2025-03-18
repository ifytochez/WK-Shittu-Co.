import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="relative flex flex-col justify-center z-10 w-full text-center">
      <h2 className="text-[2rem] font-[600] text-black">
        CONSULT W.K. SHITTU & Co.
      </h2>
      <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
        What makes WKS different from others is that we have well-groomed and
        efficient lawyers with domestic and international law backgrounds. We
        believe that we succeed only when our clients succeed and our culture of
        respect and professional excellence is a key factor in how we respond to
        our client's needs.
      </p>
      <div className="pt-8 border-b-2 border-[#034694] w-20 mx-auto"></div>
    </div>
  );
};

export default page;
