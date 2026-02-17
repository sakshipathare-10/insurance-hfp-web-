"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="mt-2 bg-white rounded-2xl px-6 py-2 md:px-12 md:py-3 
                    flex flex-col md:flex-row items-center gap-4
                    shadow-sm border border-gray-100 overflow-hidden">

      {/* Left Content */}
      <div className="flex-1 animate-fadeInUp">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug tracking-tight">
          Smart Healthcare <br />
          <span className="relative inline-block">
            Protection
            <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-primary-100 rounded-full"></span>
          </span>
        </h1>

        <p className="mt-3 text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
          Transparent plans, instant comparison and reliable
          coverage for you and your family.
        </p>

        <div className="mt-5 flex gap-3">
          <Link
            href="/insurance"
            className="bg-primary-600 text-white px-6 py-2.5 rounded-lg 
                       font-medium shadow-sm hover:shadow-md 
                       hover:-translate-y-0.5 hover:scale-105 
                       transition duration-300"
          >
            Compare Plans
          </Link>

          <Link
            href="/contact"
            className="bg-gray-100 text-gray-800 px-6 py-2.5 rounded-lg 
                       font-medium hover:bg-gray-200 
                       transition duration-300"
          >
            Speak to Advisor
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 animate-fadeInRight">
        <Image
          src="/images/health-insurance .png"
          alt="Healthcare Illustration"
          width={300}
          height={200}
          className="w-full max-w-xs md:max-w-sm mx-auto animate-float"
        />
      </div>
    </div>
  );
}
