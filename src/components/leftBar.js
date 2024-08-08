"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    name: "Proje İsmi 1",
    color: "bg-red-500",
    current: false,
    children: [
      { name: "Overview", href: "#", alert: 5 },
      { name: "Notifications", href: "#", alert: 6 },
      { name: "Analytics", href: "#", alert: 10 },
      { name: "Reports", href: "#", alert: 2 },
    ],
  },
  {
    name: "Proje İsmi 2",
    color: "bg-yellow-500",
    current: false,
    children: [
      { name: "Overview", href: "#", alert: 4 },
      { name: "Notifications", href: "#", alert: 12 },
      { name: "Analytics", href: "#", alert: 10 },
      { name: "Reports", href: "#", alert: 10 },
    ],
  },
  {
    name: "Proje İsmi 3",
    color: "bg-green-500",
    current: false,
    children: [
      { name: "Overview", href: "#", alert: 10 },
      { name: "Notifications", href: "#", alert: 8 },
      { name: "Analytics", href: "#", alert: 10 },
      { name: "Reports", href: "#", alert: 12 },
    ],
  },
  {
    name: "Proje İsmi 4",
    color: "bg-blue-500",
    current: false,
    children: [
      { name: "Overview", href: "#", alert: 3 },
      { name: "Notifications", href: "#", alert: 10 },
      { name: "Analytics", href: "#", alert: 5 },
      { name: "Reports", href: "#", alert: 10 },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function leftBar({ profile, setLeftBar, leftBar }) {
  const getInitials = (fullName) => {
    if (!fullName) return "";

    const names = fullName.split(" ");
    const initials = names.map((name) => name[0].toUpperCase()).join("");
    return initials;
  };

  return (
    <aside
      id="sidebar-double"
      className={`flex z-40 fixed top-[3.5rem] left-0 h-full -translate-x-full lg:translate-x-0 transition-all duration-700 ${
        leftBar ? "!translate-x-0" : "!-translate-x-full left-9"
      }`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto z-30 py-5 px-3 w-16 h-full bg-[#363F72] border-r border-gray-200 flex justify-between flex-col">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <ul className="space-y-2 mb-12 flex flex-col justify-center items-center">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </li>
          <div className="pt-6">
            <Link href={"/boards"}>
              <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-white rounded-full ">
                <span className="font-medium text-[#145389]">
                  {getInitials(profile.fullName)}
                </span>
              </div>
            </Link>
          </div>
        </ul>
      </div>
      <nav className="overflow-y-auto py-5 px-4 w-64 h-full bg-white border-r border-gray-200 transition-transform left-0 top-0 transform-none overflow-x-hidden">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 h-full">
          <li>
            <h2 className="text-base font-medium py-4">Projeler</h2>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700"
                      )}
                    >
                      <div
                        className={classNames(
                          item.color,
                          "h-2.5 w-2.5 rounded-full"
                        )}
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700"
                        )}
                      >
                        <div
                          className={classNames(
                            item.color,
                            "h-2.5 w-2.5 rounded-full"
                          )}
                        />
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="ml-auto h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                " rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700 flex flex-row justify-between items-center"
                              )}
                            >
                              {subItem.name}
                              <span>
                                {subItem.alert && (
                                  <span className="text-xs text-[#344054]  px-2 py-[2px] rounded-full border bg-[#F9FAFB]">
                                    {subItem.alert}
                                  </span>
                                )}
                              </span>
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-normal text-[#98A2B3] hover:text-[#8f9cb3] outline-none group"
              >
                <Image
                  src="/assets/img/wave.svg"
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
                <span className="group-hover:text-black font-semibold">
                  Proje Oluştur
                </span>
              </button>
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <div className="flex items-center gap-x-4 px-6 justify-between  text-sm font-semibold leading-6 text-gray-900 mb-10">
              <div className="flex flex-col">
                <span className="text-[#101828] font-semibold text-sm">
                  {profile.fullName}
                </span>
                <span className="text-sm text-[#475467] font-normal ">
                  {profile.email}
                </span>
              </div>
              <button
                className="w-4 h-4 border-[2px] rounded-full border-[#475467]"
                onClick={() => setLeftBar(!leftBar)}
              ></button>
            </div>
          </li>
        </ul>
      </nav>
      <button
        id="hide-secondary-sidenav-button"
        aria-controls="secondary-sidenav"
        type="button"
        className=" absolute bottom-16 left-20 p-2 text-gray-500 rounded-full cursor-pointer  hover:text-gray-900 hover:bg-gray-200 bg-white hidden"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </aside>
  );
}

export default leftBar;
