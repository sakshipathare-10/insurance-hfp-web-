"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-primary-600 w-full">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between bg-primary-600 px-4 py-4  desktop:py-3">

        <div className="flex items-center gap-4">
          <button
            className="text-white desktop:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <Link href="/">
            <img
              src="/Assets/logoHorizontal.svg"
              className="h-[38px] desktop:hidden"
              alt="logo"
            />
            <img
              src="/Assets/logoDesktop.svg"
              className="hidden w-[110px] desktop:block brightness-0 invert"
              alt="logo"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-14 text-white desktop:flex">
          <Link href="/">Home</Link>
          <Link href="/insurance">Insurance</Link>
          <Link href="/health-events">Health Events</Link>
          <Link href="/">HealthGram</Link>
        </div>

        <div className="hidden desktop:block">
          <button className="rounded-md bg-primary-600 px-5 py-2 text-white">
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-5 bg-primary-600 px-6 py-6 text-white desktop:hidden">
          <Link href="/">Home</Link>
          <Link href="/insurance">Insurance</Link>
          <Link href="/health-events">Health Events</Link>
          <Link href="/">HealthGram</Link>
          <button className="mt-4 rounded-md bg-primary-600 px-5 py-2 text-white border border-white">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
