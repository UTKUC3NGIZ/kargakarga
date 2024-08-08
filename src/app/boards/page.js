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
import Header from "@/components/header.js";
import LeftBar from "@/components/leftBar";
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

  return (
    <main className="bg-[#f1f7fe] h-screen  antialiased overflow-y-hidden">
      <Header />
      <LeftBar profile={profile} setLeftBar={setLeftBar} leftBar={leftBar} />

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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
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
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
