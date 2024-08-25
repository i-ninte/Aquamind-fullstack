"use client";

import * as Icon from "iconsax-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import whitelogo from "../public/logo-white.svg";
import DashboardIcon from "./dashboard/DashboardIcon";

export const nav_links = [
  {
    title: "Overview",
    link: "/dashboard",
    icon: "BookSquare",
  },
  // {
  //   title: "Transactions",
  //   link: "/dashboard/transactions",
  //   icon: "TransactionMinus",
  // },
  {
    title: "Prediction",
    link: "/dashboard/tariffs",
    icon: "TrendUp",
    children: [
      {
        title: "Set Tariffs",
        path: "/dashboard/tariffs/set-tariffs",
      },
      {
        title: "Change Log",
        path: "/tariffs/change-log",
      },
    ],
  },

  // {
  //   title: "Reports",
  //   link: "/dashboard/reports",
  //   icon: "DocumentUpload",
  // },
  {
    title: "Analytics",
    link: "/dashboard/messages",
    icon: "Data",
    children: [
      {
        title: "Send Messages",
        path: "/dashboard/messages/send",
      },
      {
        title: "All Messages",
        path: "/dashboard/messages/all",
      },
    ],
  },
];
const DashboardNavbar = () => {
  const pathname = usePathname();
  const r = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (link: string) => {
    r.push(link);
    setIsOpen(false); // Close the sidebar after navigating
  };

  return (
    <>
      <div>
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-md md:hidden"
        >
          ☰
        </button>
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 p-2 bg-red-500 text-[white] rounded-md"
          >
            ✖
          </button>
          <nav className="mt-16 flex flex-col">
            {nav_links.map((e, k) => (
              <div
                key={k}
                onClick={() => handleNavigation(e.link)}
                className={`cursor-pointer hover:bg-[white]/30  group px-2 py-3 rounded-lg duration-500 flex items-center gap-6 ${
                  pathname === e.link && "bg-white-100/30"
                }`}
              >
                <DashboardIcon
                  title={e.icon as keyof typeof Icon}
                  active={pathname === e.link}
                />
                <p
                  className={`${
                    pathname === e.link ? "text-[#ffffff]" : "text-white-400"
                  } group-hover:text-[#fff]  duration-500`}
                >
                  {e.title}
                </p>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop Sidebar */}
        <div className="sticky left-0 h-[42.5rem] max-md:hidden max-md:h-[28rem] top-0 flex flex-col justify-between bg-black shadow-xl p-6  text-[#17171d] max-sm:hidden lg:w-full">
          <section className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <Image src={whitelogo} className="w-[30px]" alt="Logo" />
              <h1 className="text-[#fff] font-medium text-[1.5rem]">
                Aquatrack
              </h1>
            </div>

            {/* nav */}
            <nav className="flex  flex-col ">
              {nav_links.map((e, k) => (
                <div
                  key={k}
                  onClick={() => handleNavigation(e.link)}
                  className={`cursor-pointer hover:bg-[white]/30 group px-2 py-3 rounded-lg duration-500 text-white  flex items-center gap-6 ${
                    pathname === e.link && "bg-white-100/30"
                  }`}
                >
                  <DashboardIcon
                    title={e.icon as keyof typeof Icon}
                    active={pathname === e.link}
                  />
                  <p
                    className={`${
                      pathname === e.link ? "text-[#ffffff]" : "text-white-400"
                    } group-hover:text-[#fff] duration-500`}
                  >
                    {e.title}
                  </p>
                </div>
              ))}
            </nav>
            {/* <section className="flex pt-24 flex-col">
              <div className="flex items-center text-white gap-4 hover:bg-[white]/10 duration-300 p-2 rounded-lg cursor-pointer">
                <span className="flex items-center justify-center bg-[#fc2d06] h-[45px] w-[45px] text-[0.75rem] font-semibold text-white-50 rounded-full">
                  OK
                </span>
                <div>
                  <h4 className="text-white-50 text-[0.9rem] font-medium">
                    Obeng Kwabena
                  </h4>
                  <p className="text-[0.8rem] font-extralight text-white-200">
                    Administrator
                  </p>
                </div>
              </div>
            </section> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
