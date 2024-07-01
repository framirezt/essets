import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/images/logo-nobg.png";
import bitcoin from "@/images/btc.png";
import Link from "next/link";

import React from "react";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: false },
    { name: "How it works", href: "#how", current: false },
    { name: "Contact us", href: "#contact", current: false },
  ];

  return (
    <div className="relative h-96 md:h-72 bg-[--beige] mt-10 py-8 px-16 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row items-start">
        <Image src={logo} alt="essets" className="w-32 pb-8 md:mb-0 " />

        <div className="grid grid-cols-2 md:flex flex-row gap-y-4 gap-x-12 md:mt-10 md:ml-64">
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              <p className="">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-center text-[#898989] -ml-3">
        © Copyright 2024, Essets
      </p>
    </div>
  );
};

export default Footer;
