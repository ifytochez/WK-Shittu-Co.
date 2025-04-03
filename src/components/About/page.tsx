import React from "react";
import Image from "next/image";
import Justice from "../../images/law_balance_scale.jpg";

const Page = () => {
  return (
    <div className="bg-white text-gray-900 w-full pt-20">
      <section className="sm:text-center py-12 sm:px-4 sm:py-16 w-[90%] sm:w-full mx-auto">
        <h1 className="text-sm sm:text-[2.2rem] font-semibold text-black text-center">
          LEGAL PRACTITIONERS & ARBITRATORS
        </h1>

        <p className="mt-4 text-base sm:text-xl text-gray-700 max-w-3xl mx-auto ">
          W.K. Shittu & Co. was established over two decades ago. Over the
          years, we have become a leading brand in Nigeria with efficient
          lawyers of cognate experience in their various chosen areas of law -
          providing bespoke legal service to meet clients' individual needs.
        </p>
        <div className="pt-10 sm:pt-16 border-b-2 border-[#034694] w-16 sm:w-20 mx-auto"></div>
      </section>

      <section className="sm:text-center py-6 sm:py-12 w-[90%] sm:w-full mx-auto">
        <h1 className="text-sm sm:text-[1.7rem] font-semibold text-[#034694] text-center">
          OUR MISSION
        </h1>

        <p className="mt-4 text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Our mission is simple: to deliver unparalleled legal solutions that
          empower businesses, organizations, and individuals to thrive. We focus
          on building long-term relationships with our clients through
          integrity, professionalism, and a deep understanding of their needs.
        </p>
        <div className="pt-10 sm:pt-16 border-b-2 border-[#034694] w-16 sm:w-20 mx-auto"></div>
      </section>

      <section className="sm:text-center py-6 sm:py-12 w-[90%] sm:w-full mx-auto">
        <h1 className="text-sm sm:text-[1.7rem] font-semibold text-[#034694] text-center">
          OUR VISION
        </h1>

        <p className="mt-4 text-base sm:text-xl text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
          To be a leading law firm known for excellence, innovation, and
          integrity in legal practice. We aim to set the standard for legal
          services that are not only efficient and effective but also align with
          the evolving demands of global business and governance.
        </p>
        <div className="pt-10 sm:pt-16 border-b-2 border-[#034694] w-16 sm:w-20 mx-auto"></div>
      </section>

      <section className="sm:text-center py-6 sm:py-12 w-[90%] sm:w-full mx-auto">
        <h1 className="text-sm sm:text-[1.7rem] font-semibold text-[#034694] text-center">
          OUR REPUTATION
        </h1>

        <p className="mt-4 text-base sm:text-xl text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
          The widening of our knowledge and contact base enables us to
          efficiently deliver our range of expert legal service, both at home
          and abroad. Our reputation is growing not only in Nigeria but also
          across Africa, Europe, Asia, America, and the rest of the world when
          conducting international transactions.
        </p>
        <div className="pt-10 sm:pt-16 border-b-2 border-[#034694] w-16 sm:w-20 mx-auto"></div>
      </section>

      <section className="relative flex flex-col lg:flex-row items-center justify-center py-12 sm:py-24 px-4 sm:px-6 mt-8">
        <h1 className="hidden sm:block absolute top-[-40px] sm:top-[-60px] left-1/2 -translate-x-1/2 text-[5rem] sm:text-[12rem] font-extrabold text-gray-200 opacity-40 tracking-widest">
          WELCOME
        </h1>

        <div className="max-w-7xl flex flex-col lg:flex-row items-center relative z-10 w-full gap-y-12 lg:gap-x-24">
          {/* Left Side: Image Section */}
          <div className="relative w-full lg:w-[50%] flex flex-col items-center">
            <div className="relative hidden sm:block z-10 w-full transform lg:-translate-x-25">
              <Image
                src={Justice}
                alt="Lady Justice"
                className="w-full h-auto object-contain lg:max-h-[550px]"
              />
            </div>
            <div className="absolute top-[5%] right-[-5%] w-[100%] h-full bg-[#034694] -z-10 hidden lg:block"></div>
          </div>

          {/* Right Side: Text Section */}
          <div className="w-[90%] mx:auto lg:w-[50%] lg:pl-16 sm:text-center lg:text-left">
            <h2 className="text-sm sm:text-[1.7rem] font-semibold text-[#034694] text-center">
              OUR COMMITMENT TO YOU
            </h2>
            <p className="mt-2 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              At WK Shittu & Co., we believe in providing personalized attention
              to every client. Whether you are a multinational corporation, a
              tech startup, or an individual seeking expert legal advice, we are
              committed to delivering bespoke solutions that are tailored to
              your specific needs.
            </p>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Our team is dedicated to understanding your business, your
              challenges, and your goals to help you make informed decisions. As
              we continue to evolve with our new branding, we remain steadfast
              in our commitment to providing the best legal services, now and in
              the future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
