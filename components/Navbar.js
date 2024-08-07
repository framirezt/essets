"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/images/logo.png";
import bitcoin from "@/images/btc.png";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "How it works", href: "#how", current: false },
  // { name: "Contact us", href: "#contact", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* links + logo container */}
              <div className="flex flex-1 items-center justify-center sm:items-center sm:mt-4">
                <Image
                  className="h-[87px] w-auto -mt-2 pb-1"
                  src={logo}
                  alt="Your Company"
                />
                {/* links */}
                <div className="hidden sm:mx-[5vw] sm:block">
                  <div className="flex space-x-4">
                    {links.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={"text-black rounded-md px-3 py-2 text-lg "}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* button + bitcoin price */}
                <Link
                  href={"#contact"}
                  className=" flex-row items-center gap-8 hidden sm:flex"
                >
                  <button className="bg-black text-white py-2 px-6 rounded-lg sm:ml-0 ">
                    Book demo{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* mobile links */}
          <Disclosure.Panel className="sm:hidden absolute bg-white z-20 w-screen border-b border-gray-200">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {links.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    "text-black block rounded-md px-3 py-2 text-base font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
