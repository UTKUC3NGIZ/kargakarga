"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Dnd from "@/components/dnd.js";
import { useEffect, useState, Suspense } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Detail from "@/components/detail.js";
import { CiFilter } from "react-icons/ci";
import {} from "@headlessui/react";
import { FaFlag } from "react-icons/fa";
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

const tabs = [
  { key: "boards", label: "Boards" },
  { key: "list", label: "List" },
  { key: "other", label: "Other" },
  { key: "other1", label: "Other" },
  { key: "other2", label: "Other" },
  { key: "other3", label: "Other" },
  { key: "other4", label: "Other" },
];

const filter = {
  id: "sizes",
  name: "Sizes",
  options: [
    { value: "1", color: "text-[#C80B0B]", checked: false },
    { value: "2", color: "text-[#F79009]", checked: false },
    { value: "3", color: "text-[#B3B8DB]", checked: false },
    { value: "4", color: "text-[#2083D7]", checked: false },
    { value: "5", color: "text-[#079455]", checked: false },
  ],
};

export default function Home() {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [leftBar, setLeftBar] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [dndFilter, setDndFilter] = useState(
    filter.options.reduce((acc, option) => {
      acc[option.value] = option.checked;
      return acc;
    }, {})
  );
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setDndFilter((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [value]: checked,
    }));
  };
  const selectedTab = searchParams.get("tab") || "boards";

  const handleTabChange = (tab) => {
    router.push(`/boards?tab=${tab}`);
  };

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    setToken(userToken);
    if (!userToken) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        const response = await axios.get(
          "https://api.management.parse25proje.link/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.status === false) {
          router.push("/login");
        } else {
          setProfile(response.data.data);
        }
      } catch (error) {
        router.push("/login");
        toast.error("Bir hata oluştu yada yetkiniz yok");
      }
    };

    fetchProfile();
  }, [token]);

  const getInitials = (fullName) => {
    if (!fullName) return "";

    const names = fullName.split(" ");
    const initials = names.map((name) => name[0].toUpperCase()).join("");
    return initials;
  };

  return (
    <Suspense>
      <main className="bg-[#f1f7fe] h-screen  antialiased overflow-y-hidden">
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                data-drawer-target="sidebar-double"
                data-drawer-toggle="sidebar-double"
                aria-controls="sidebar-double"
                type="button"
                className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 outline-none "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/boards" className="flex mr-4">
                <Image
                  src="/assets/img/logo.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <span className="self-center text-xl font-bold whitespace-nowrap text-[#145389] pl-4">
                  KargaKarga
                </span>
              </Link>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100  outline-none sm:block hidden"
              >
                <span className="sr-only">View notifications</span>

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
              </button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100  outline-none sm:block hidden"
              >
                <span className="sr-only">View notifications</span>
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
              </button>
              <Image
                src="/assets/img/25.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />

              <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg   rounded-xl"
                id="apps-dropdown"
              >
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50  ">
                  Apps
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Sales</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Users</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Inbox</div>
                  </a>

                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Settings</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Products</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Pricing</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Billing</div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500  "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 ">Logout</div>
                  </a>
                </div>
              </div>

              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow   rounded-xl"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 ">
                    Neil Sims
                  </span>
                  <span className="block text-sm text-gray-900 truncate ">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-1 text-gray-700 " aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100   "
                    >
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100   "
                    >
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul className="py-1 text-gray-700 " aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100  "
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      My likes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100  "
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100  "
                    >
                      <span className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="mr-2 w-5 h-5 text-primary-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Pro version
                      </span>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
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
                    </a>
                  </li>
                </ul>
                <ul className="py-1 text-gray-700 " aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100  "
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

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

        <main className="bg-[#f1f7fe] h-screen antialiased overflow-y-hidden">
          <main
            className={`p-8 h-full space-y-4 mt-16 transition-all duration-700 ${
              leftBar ? "ml-80 " : "ml-10"
            }`}
          >
            <div className="flex justify-between ">
              <h1 className="text-[22px] font-semibold text-[#145389] py-6">
                Frontend Case
              </h1>

              <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                <Popover className="relative inline-block px-4 text-left">
                  <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <span className="text-xl">
                      <CiFilter />
                    </span>
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <form className="space-y-4">
                      {filter.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${filter.id}-${optionIdx}`}
                            name={`${filter.id}[]`}
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${filter.id}-${optionIdx}`}
                            className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                          >
                            <FaFlag className={option.color} />
                          </label>
                        </div>
                      ))}
                    </form>
                  </PopoverPanel>
                </Popover>
              </PopoverGroup>
            </div>
            <span className="isolate !m-0 inline-flex rounded-md shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`relative inline-flex items-center px-4 py-3 text-sm font-semibold ${
                    selectedTab === tab.key
                      ? "bg-gray-50 text-[#145389]"
                      : "bg-white text-gray-800"
                  } ring-1 ring-inset ring-gray-300 ${
                    tab.key === "boards" ? "rounded-l-md" : ""
                  } ${tab.key === "other4" ? "rounded-r-md" : ""}`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </span>
            {tabs.map(
              (tab) =>
                selectedTab === tab.key && (
                  <Dnd
                    key={tab.key}
                    setOpen={setOpenModal}
                    dndFilter={dndFilter}
                    setDetailData={setDetailData}
                  />
                )
            )}
          </main>
          <Detail
            open={openModal}
            setOpen={setOpenModal}
            detailData={detailData}
            token={token}
          />
        </main>

        <Detail
          open={openModal}
          setOpen={setOpenModal}
          detailData={detailData}
          token={token}
        />
      </main>
    </Suspense>
  );
}
