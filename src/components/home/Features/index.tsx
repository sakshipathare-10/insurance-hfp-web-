"use client";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Cashless Hospitals",
      desc: "10,000+ network hospitals for hassle-free treatment.",
      image: "/images/cashless.png",
    },
    {
      title: "Instant Policy Issuance",
      desc: "Buy your health insurance in minutes online.",
      image: "/images/insurance.png",
    },
    {
      title: "24/7 Claim Support",
      desc: "Dedicated claim assistance anytime you need.",
      image: "/images/support.png",
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Trusted healthcare protection with seamless experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 
                       shadow-sm hover:shadow-lg
                       transition duration-300
                       hover:-translate-y-1 p-4 text-center"
          >
            <div className="flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
