import Image from "next/image";
import Principal from "../../images/principal.jpg";

export default function Page() {
  return (
    <section className="relative flex flex-col items-center px-6  bg-white pt-20">
      <h1 className="absolute top-[5rem] left-1/2 -translate-x-1/2 text-[9rem] font-bold text-gray-200 opacity-40 uppercase z-0">
        MEET THE PRINCIPAL
      </h1>

      <div className="relative z-10 max-w-7xl text-center">
        <h2 className="text-[2rem] font-[600] text-black">
          MEET THE PRINCIPAL
        </h2>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          In each case, a client-lawyer is allocated to you, "the client"—
          employing divergent experiences from private and public sectors and
          through their collective expertise and experience, offers outstanding
          service.
        </p>
        <div className="pt-8 border-b-2 border-[#034694] w-20 mx-auto"></div>
      </div>

      {/* Container with full width */}
      <div className="relative z-10 flex flex-col md:flex-row items-start mt-32 w-full max-w-7xl mx-auto gap-12 px-6">
        {/* Write-up section */}
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="text-3xl font-bold text-black">
            DR. WAHAB SHITTU SAN
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Dr. Wahab Shittu, SAN is a distinguished Senior Advocate of Nigeria
            (SAN), Senior Lecturer in the Jurisprudence and International Law
            Department at the Faculty of Law, University of Lagos, and the
            Principal Partner at WK Shittu & Co. He holds a doctorate degree in
            Law from the University of Ilorin and undergraduate and postgraduate
            Law degrees from the University of Lagos.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            With over 35 years of experience, Dr. Shittu has built an
            exceptional career handling complex civil matters and criminal
            prosecutions at all levels, including the Supreme Court. His
            expertise spans landmark cases that have significantly shaped
            Nigeria’s legal landscape. A passionate advocate for justice, he is
            committed to safeguarding human rights, upholding the rule of law,
            and combating corruption.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Dr. Shittu serves as external counsel to the Economic and Financial
            Crimes Commission (EFCC), representing both state and federal
            governments on a broad range of matters. He is also retained as
            external counsel for other notable institutions, including:
          </p>

          <ul className="list-disc list-inside mt-2 text-gray-700 text-lg">
            <li>The Independent Corrupt Practices Commission (ICPC)</li>
            <li>The Institute of Chartered Accountants of Nigeria (ICAN)</li>
            <li>The Nigerian Stock Exchange</li>
            <li>The National Assembly</li>
          </ul>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            In these roles, he has led the prosecution of high-level cases
            involving prominent government officials and leading figures in
            Nigeria’s business sector. Dr. Wahab Shittu’s extensive experience,
            unwavering professionalism, and dedication to justice have
            established him as a leading authority in Nigerian law and an
            influential voice in the legal community.
          </p>

          <h4 className="mt-6 text-lg font-semibold">Education</h4>
          <ul className="list-disc list-inside mt-2 text-gray-700 text-lg">
            <li>Ph.D. University of Ilorin, Nigeria</li>
            <li>LL.M University of Lagos, Nigeria</li>
            <li>B.L Nigerian Law School, Lagos</li>
            <li>LL.B University of Lagos, Nigeria</li>
          </ul>
        </div>

        <div className="relative z-10 w-[100%] max-w-[500px] max-h-[600px] md:ml-auto">
          <Image
            src={Principal}
            alt="Dr. Wahab Shittu"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
