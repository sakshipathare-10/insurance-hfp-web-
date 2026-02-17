"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-6 mb-6">
      <div className="bg-gray-50 border border-gray-100 
                      rounded-3xl px-8 py-10 md:px-12 md:py-12 
                      text-center shadow-sm">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Ready to Secure Your Health?
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-500 max-w-lg mx-auto">
          Compare plans instantly and choose the right protection
          for you and your family with complete transparency.
        </p>

        <div className="mt-7">
          <Link
            href="/compare"
            className="inline-block bg-primary-600 text-white 
                       px-8 py-3 rounded-xl text-sm font-medium
                       shadow-sm hover:shadow-md 
                       hover:-translate-y-0.5
                       transition duration-300"
          >
            Get Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
