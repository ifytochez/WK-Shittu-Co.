import React from "react";
import Image from "next/image";
import Justice from "../../images/law_balance_scale.jpg";

const page = () => {
  return (
    <div className="bg-white text-gray-900 w-full pt-20">
      <section className="text-center py-16 px-6">
        <h1 className="text-[2.2rem] font-[600] text-black">
          LEGAL PRACTITIONERS & ARBITRATORS
        </h1>

        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          W.K. Shittu & Co. was established over two decades ago. Over the
          years, we have become a leading brand in Nigeria with efficient
          lawyers of cognate experience in their various chosen areas of law -
          providing bespoke legal service to meet clients' individual needs.
        </p>
        <div className="pt-16 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </section>

      <section className="text-center py-4">
        <h1 className="text-[1.7rem] font-[600] text-[#034694]">OUR MISSION</h1>

        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Our mission is simple: to deliver unparalleled legal solutions that
          empower businesses, organizations, and individuals to thrive. We focus
          on building long-term relationships with our clients through
          integrity, professionalism, and a deep understanding of their needs.
          We leverage cutting-edge legal strategies to help our clients navigate
          complex legal landscapes with confidence
        </p>
        <div className="pt-16 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </section>

      <section className="text-center py-8">
        <h1 className="text-[1.7rem] font-[600] text-[#034694]">OUR VISION</h1>

        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          To be a leading law firm known for excellence, innovation, and
          integrity in legal practice. We aim to set the standard for legal
          services that are not only efficient and effective but also align with
          the evolving demands of global business and governance.
        </p>
        <div className="pt-16 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </section>

      {/* <section className="text-center py-4">
        <h1 className="text-[1.7rem] font-[600] text-[#034694]">OUR VALUES</h1>

       
        <div className="mt-6 text-left max-w-3xl mx-auto">
          <p className="text-xl font-semibold text-[#034694]">Integrity</p>
          <p className="text-lg text-gray-700">
            We uphold the highest standards of honesty, transparency, and
            ethical conduct in all our legal dealings.
          </p>

          <p className="mt-4 text-xl font-semibold text-[#034694]">
            Innovation
          </p>
          <p className="text-lg text-gray-700">
            We embrace new technologies and creative solutions to provide the
            most effective legal support to our clients.
          </p>

          <p className="mt-4 text-xl font-semibold text-[#034694]">
            Client-Centric Approach
          </p>
          <p className="text-lg text-gray-700">
            We listen to our clients, understand their challenges, and work
            collaboratively to achieve optimal outcomes.
          </p>

          <p className="mt-4 text-xl font-semibold text-[#034694]">
            Excellence
          </p>
          <p className="text-lg text-gray-700">
            We strive for excellence in every aspect of our practice, from legal
            strategy to client service, ensuring we exceed expectations every
            time.
          </p>

          <p className="mt-4 text-xl font-semibold text-[#034694]">
            Diversity & Inclusion
          </p>
          <p className="text-lg text-gray-700">
            We foster a workplace where diverse perspectives are valued,
            creating an environment where everyone can thrive.
          </p>
        </div>

        <div className="pt-16 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </section> */}

      <section className="text-center py-8">
        <h1 className="text-[1.7rem] font-[600] text-[#034694]">
          OUR REPUTATION
        </h1>

        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          The widening of our knowledge and contact base enables us to
          efficiently deliver our range of expert legal service, both at home
          and abroad. Our reputation is growing not only in Nigeria but also
          across Africa, Europe, Asia, America and the rest of the world when
          conducting international transactions. Providing you with the quality
          of legal advice, breadth of coverage and flexibility of choice, we are
          available to advise on high-profile and groundbreaking international
          transactions and have an excellent and varied client list that
          includes leading corporations, financial institutions and
          governments..
        </p>
        <div className="pt-16 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </section>

      <section className="relative flex items-center justify-center py-24 px-6 mt-8">
        {/* Background WELCOME Text */}
        <h1 className="absolute top-[-60px] left-1/2 -translate-x-1/2 text-[12rem] lg:text-[12rem] font-extrabold text-gray-200 opacity-40 tracking-widest">
          WELCOME
        </h1>

        <div className="max-w-7xl flex flex-col lg:flex-row items-center relative z-10 w-full gap-y-24 lg:gap-x-24">
          {/* Left Side: Image Section */}
          <div className="relative w-full lg:w-[50%] flex flex-col items-center lg:ml-10">
            {" "}
            <div className="relative z-10 w-full transform lg:-translate-x-25">
              {" "}
              <Image
                src={Justice}
                alt="Lady Justice"
                className="w-full h-auto object-contain lg:max-h-[550px]"
              />
            </div>
            <div className="absolute top-[5%] right-[-5%] w-[100%] h-full bg-[#034694] -z-10"></div>{" "}
          </div>

          <div className="w-full lg:w-[50%] lg:pl-16 text-center lg:text-left">
            <h2 className="text-[1.7rem] font-[600] text-[#034694]">
              OUR COMMITMENT TO YOU
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              At WK Shittu & Co., we believe in providing personalized attention
              to every client. Whether you are a multinational corporation, a
              tech startup, or an individual seeking expert legal advice, we are
              committed to delivering bespoke solutions that are tailored to
              your specific needs. Our team is dedicated to understanding your
              business, your challenges, and your goals to help you make
              informed decisions. As we continue to evolve with our new
              branding, we remain steadfast in our commitment to providing the
              best legal services, now and in the future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
