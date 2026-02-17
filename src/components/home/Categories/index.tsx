"use client";

import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      title: "Individual Health Insurance",
      desc: "Personal coverage with cashless hospital network.",
      image: "/images/individual.png",
      link: "/insurance/individual",
    },
    {
      title: "Family Health Planss",
      desc: "One policy protecting your entire family.",
      image: "/images/family.png",
      link: "/insurance/family",
    },
    {
      title: "Senior Citizen Plans",
      desc: "Special coverage designed for parents.",
      image: "/images/senior-citizen .png",
      link: "/insurance/senior",
    },
    {
      title: "Critical Illness Cover",
      desc: "Financial protection against major illnesses.",
      image: "/images/pulse.png",
      link: "/insurance/critical",
    },
  ];

  return (
    <div className="mt-6">

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Explore Health Insurance Solutions
        </h2>
        <p className="mt-3 text-gray-500">
          Choose the right protection tailored for your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="group bg-white rounded-2xl border border-gray-100 
                       shadow-sm hover:shadow-lg 
                       transition duration-300 
                       hover:-translate-y-2 p-4"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                className="transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="mt-6 text-center">
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
