"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdLink,
} from "react-icons/io";
import { IoFilterOutline, IoSendOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiFilter, CiShare1, CiStar } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { GoPaperclip, GoPlus } from "react-icons/go";
import {
  FaItalic,
  FaHeading,
  FaListOl,
  FaListUl,
  FaFlag,
} from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { RiHome6Line } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";

import {
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { LuCopy } from "react-icons/lu";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 2,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 3,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 5,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 6,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 7,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 9,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 10,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 11,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 12,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 13,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 14,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 15,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 16,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 17,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
  {
    id: 8,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
];
const comments = [
  {
    id: 1,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    info: "Added a file to Marketing site redesign",
    date: "6d ago",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const pages = [
  { name: "25 Proje", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Frontend Case", href: "#", current: true },
];
export default function Detail({ open, setOpen, detailData, token }) {
  const colorMap = {
    1: "text-[#C80B0B]",
    2: "text-[#F79009]",
    3: "text-[#B3B8DB]",
    4: "text-[#2083D7]",
    5: "text-[#079455]",
  };
  const flagColorClass = colorMap[detailData?.flag] || "text-black";
  const deleteTask = async (code) => {
    try {
      await axios.delete(
        `https://api.management.parse25proje.link/api/tasks/${code}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
      setOpen(false);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const [dates, setDates] = useState({
    startDate: detailData?.startDate,
    endDate: detailData?.endDate,
  });
  const handleValueChange = (newValue) => {
    setDates(newValue);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[99]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full md:items-end items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all 
            data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in
             sm:my-8  xl:w-10/12 w-full min-h-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
          >
            <div className="mt-3 grid grid-cols-12 max-h-[768px] overflow-y-auto box-border overflow-x-hidden">
              <div className="col-span-12 py-5 border-b px-5 flex flex-row justify-between h-fit">
                <nav
                  aria-label="Breadcrumb"
                  className="flex flex-row items-start h-fit"
                >
                  <div className="flex gap-3 flex-row pr-6">
                    <button className="text-xl text-[#475467]">
                      <IoIosArrowUp />
                    </button>
                    <button className="text-xl text-[#475467]">
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <ol
                    role="list"
                    className="md:flex hidden items-center space-x-4"
                  >
                    <li className="pr-3">
                      <a
                        href="#"
                        className="text-[#475467] hover:text-gray-500"
                      >
                        <RiHome6Line
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0"
                        />

                        <span className="sr-only">Home</span>
                      </a>
                    </li>
                    {pages.map((page) => (
                      <li key={page.name} className="!m-0">
                        <div className="flex items-center">
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                          />
                          <a
                            href={page.href}
                            aria-current={page.current ? "page" : undefined}
                            className={`ml-3 text-sm font-medium  ${
                              page.current
                                ? "text-[#2083D7] hover:text-[#2082d7d3]"
                                : "text-[#475467] hover:text-gray-700"
                            }`}
                          >
                            {page.name}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="flex gap-6 flex-row items-start h-fit">
                  <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                    <Popover className="relative inline-block px-4 text-left">
                      <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span className="text-xl">
                          <HiOutlineDotsHorizontal />
                        </span>
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 outline-none"
                            onClick={() => deleteTask(detailData.code)}
                          >
                            Sil
                          </button>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  </PopoverGroup>

                  <button className="text-xl">
                    <CiShare1 />
                  </button>
                  <button className="text-xl">
                    <CiStar />
                  </button>
                  <button className="text-xl" onClick={() => setOpen(false)}>
                    <RxCross1 />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-8 col-span-12 sm:p-8 p-4 pt-8 flex flex-col lg:gap-3 gap-5">
                <div className="flex md:flex-row flex-col justify-between pb-9">
                  <div className="grid grid-cols-12 md:w-1/2 pt-10 items-center">
                    <button className="">
                      <div className="bg-[#8D99AE] rounded-full w-7 h-7 flex justify-center items-center border-2">
                        <span className="w-4 h-4 bg-[#8D99AE] border rounded-full block col-span-1 ring-2 ring-white"></span>
                      </div>
                    </button>
                    <h2 className="sm:text-2xl text-lg font-bold text-[#475467] col-span-11">
                      {detailData?.title}
                    </h2>

                    <button className="col-span-12 pt-3 text-base font-medium text-[#98A2B3] flex flex-row items-center gap-2 pl-10 md:pl-0">
                      ID: <span className="underline">#{detailData?.id}</span>
                      <LuCopy />
                    </button>
                  </div>
                  <div className="md:w-[260px] w-full pt-8 md:pt-0">
                    <Datepicker value={dates} onChange={handleValueChange} />
                  </div>
                </div>
                <div className="flex flex-row lg:gap-20 gap-10">
                  <div>
                    <h2 className="uppercase sm:text-md text-sm font-medium text-[#475467] pb-3">
                      Task Status
                    </h2>
                    <span className="text-black font-medium text-md capitalize">
                      {detailData?.column}
                    </span>
                  </div>
                  <div>
                    <h2 className="uppercase sm:text-md text-sm font-medium text-[#475467] pb-3">
                      Assingment
                    </h2>
                    <span className="text-black font-medium text-md flex flex-row gap-2">
                      <div className="flex -space-x-2 overflow-hidden">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        />
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        />
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        />
                        <div className="flex justify-center items-center h-10 w-10 rounded-full ring-2 ring-white text-[#475467] bg-gray-200 font-bold">
                          <span>+5</span>
                        </div>
                      </div>
                      <button className="flex justify-center items-center h-10 w-10 rounded-full text-[#475467] bg-transparent border border-gray-300 font-bold border-dashed">
                        <GoPlus />
                      </button>
                    </span>
                  </div>
                  <div>
                    <h2 className="uppercase sm:text-md text-sm font-medium text-[#475467] pb-3">
                      Priotry
                    </h2>
                    <span className={`text-md ${flagColorClass}`}>
                      <FaFlag />
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="uppercase sm:text-md text-sm font-medium text-[#475467] pb-3">
                    Description
                  </h2>
                  <p className="text-sm font-normal text-[#475467]">
                    {detailData?.description}
                  </p>
                </div>
                <div>
                  <TabGroup>
                    <TabList
                      className={
                        "border pt-3 pb-2 flex sm:justify-center justify-between md:px-0 px-2 lg:gap-28 md:gap-14 sm:gap-8 gap-4 border-t rounded-t-lg bg-[#F9FAFB]"
                      }
                    >
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center md:text-lg sm:text-base text-sm  text-[#98A2B3]  data-[selected]:text-[#145389]  data-[selected]:border-b-2 border-[#145389] font-bold"
                        }
                      >
                        <GoPaperclip /> Attachment
                      </Tab>
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center md:text-lg sm:text-base text-sm  text-[#98A2B3]  data-[selected]:text-[#145389]  data-[selected]:border-b-2 border-[#145389] font-bold"
                        }
                      >
                        <GoPaperclip /> Sub Task
                      </Tab>
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center md:text-lg sm:text-base text-sm  text-[#98A2B3]  data-[selected]:text-[#145389]  data-[selected]:border-b-2 border-[#145389] font-bold"
                        }
                      >
                        <GoPaperclip /> Comment
                      </Tab>
                    </TabList>
                    <TabPanels className={"h-full border rounded-b-lg p-3"}>
                      <TabPanel>Content 1</TabPanel>
                      <TabPanel>Content 2</TabPanel>
                      <TabPanel>
                        <section className="bg-white antialiased">
                          <div className="">
                            <div className="max-h-28 overflow-y-auto mb-2">
                              <ul role="list" className="-mb-8 p-3">
                                {comments.map(
                                  (commentsItem, commentsItemIdx) => (
                                    <li key={commentsItem.id}>
                                      <div className="relative pb-8">
                                        {commentsItemIdx !==
                                        comments.length - 1 ? (
                                          <span
                                            aria-hidden="true"
                                            className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                                          />
                                        ) : null}
                                        <div className="relative flex items-start space-x-3">
                                          <div className="relative">
                                            <img
                                              alt=""
                                              src={commentsItem.imageUrl}
                                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-white"
                                            />

                                            <span className="absolute -bottom-0.5 -right-0 rounded-full   py-px bg-[#17B26A] w-3 h-3 ring-2 ring-white"></span>
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <div className="flex flex-row gap-2 text-center items-center justify-between">
                                              <div className="flex flex-row items-center gap-2">
                                                <div className="text-sm">
                                                  <a
                                                    href={
                                                      commentsItem.person.href
                                                    }
                                                    className="font-medium text-gray-900"
                                                  >
                                                    {commentsItem.person.name}
                                                  </a>
                                                </div>
                                                <p className="mt-0.5 text-sm text-[#475467]">
                                                  {commentsItem.date}
                                                </p>
                                              </div>
                                            </div>
                                            <div className=" text-sm text-gray-700">
                                              <p>{commentsItem.info}</p>
                                            </div>
                                            <div className="mt-2 text-sm text-gray-700 border px-2 py-3 rounded-tr-lg rounded-bl-lg">
                                              <p>"{commentsItem.comment}"</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div className="flex">
                              <form className=" w-full">
                                <div className="w-full bg-gray-50 rounded-lg border border-gray-200  ">
                                  <div className="py-2 px-4 bg-[#F9FAFB] rounded-t-lg">
                                    <label
                                      htmlFor="comment"
                                      className="sr-only"
                                    >
                                      Your comment
                                    </label>
                                    <textarea
                                      id="comment"
                                      rows="2"
                                      className="px-0 w-full text-sm text-gray-900 bg-[#F9FAFB] border-0  outline-none "
                                      placeholder="Enter a comment..."
                                      required
                                    ></textarea>
                                  </div>
                                  <div className="flex justify-between items-center sm:px-3 px-2 pb-2 bg-[#F9FAFB]">
                                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x ">
                                      <div className="flex items-center space-x-1 sm:pr-4">
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 12 20"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            />
                                          </svg>
                                          <span className="sr-only">
                                            Attach file
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaItalic />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaHeading />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaHeading className="text-sm" />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <PiQuotesFill />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <IoMdLink />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaImage />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaListUl />
                                        </button>
                                        <button
                                          type="button"
                                          className="sm:p-2 p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaListOl />
                                        </button>
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="inline-flex bg-[#145389] text-xl items-center p-2 font-medium text-center text-black bg-primary-700 rounded-lg outline-none  hover:bg-primary-800"
                                    >
                                      <IoSendOutline color="white" />
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </div>
              </div>
              <div className="lg:grid hidden col-span-4 grid-cols-12 ">
                <div className="col-span-10 flex flex-col gap-4 border border-t-0  overflow-y-auto bg-[#F3F6FD]">
                  <div className="flex flex-row justify-between p-4 border-b bg-white">
                    <h2 className="text-[#145389] text-base font-semibold">
                      Activity
                    </h2>
                    <div className="flex flex-row gap-4">
                      <button className="text-2xl text-[#98A2B3]">
                        <IoIosSearch />
                      </button>
                      <button className="text-2xl text-[#98A2B3]">
                        <IoFilterOutline />
                      </button>
                    </div>
                  </div>
                  <ul
                    role="list"
                    className="-mb-8 p-3 max-h-[650px] bg-[#F3F6FD]"
                  >
                    {activity.map((activityItem, activityItemIdx) => (
                      <li key={activityItem.id}>
                        <div className="relative pb-8">
                          {activityItemIdx !== activity.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                            />
                          ) : null}
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <img
                                alt=""
                                src={activityItem.imageUrl}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-white"
                              />

                              <span className="absolute -bottom-0.5 -right-0 rounded-full   py-px bg-[#17B26A] w-3 h-3 ring-2 ring-white"></span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-row gap-2 text-center items-center justify-between">
                                <div className="flex flex-row items-center gap-2">
                                  <div className="text-sm">
                                    <a
                                      href={activityItem.person.href}
                                      className="font-medium text-gray-900"
                                    >
                                      {activityItem.person.name}
                                    </a>
                                  </div>
                                  <p className="mt-0.5 text-sm text-[#475467]">
                                    {activityItem.date}
                                  </p>
                                </div>
                                <span className=" rounded-full bg-[#17B26A] w-3 h-3 "></span>
                              </div>
                              <div className=" text-sm text-gray-700">
                                <p>{activityItem.comment}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2 flex justify-center p-4">
                  <aside className=" z-30 w-16 h-full bg-white">
                    <div className="divide-y divide-gray-100 ">
                      <ul className="space-y-2 pb-5 px-3 gap-3 flex flex-col">
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-orange-100 bg-[#FFFAEB]">
                              <BiCommentDetail className="text-xl text-[#F79009]" />
                            </span>
                            <span className="text-[#F79009] text-sm pt-1">
                              Activity
                            </span>
                          </a>
                        </li>
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-gray-100 bg-[#EAECF04D]">
                              <BiCommentDetail className="text-xl text-[#D0D5DD]" />
                            </span>
                            <span className="text-[#D0D5DD] text-sm pt-1">
                              Condition
                            </span>
                          </a>
                        </li>
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-gray-100 bg-[#EAECF04D]">
                              <BiCommentDetail className="text-xl text-[#D0D5DD]" />
                            </span>
                            <span className="text-[#D0D5DD] text-sm pt-1">
                              QA
                            </span>
                          </a>
                        </li>
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-gray-100 bg-[#EAECF04D]">
                              <BiCommentDetail className="text-xl text-[#D0D5DD]" />
                            </span>
                            <span className="text-[#D0D5DD] text-sm pt-1">
                              Meetings
                            </span>
                          </a>
                        </li>
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-gray-100 bg-[#EAECF04D]">
                              <BiCommentDetail className="text-xl text-[#D0D5DD]" />
                            </span>
                            <span className="text-[#D0D5DD] text-sm pt-1">
                              Docs
                            </span>
                          </a>
                        </li>
                        <li className="flex flex-col items-center">
                          <a
                            href="#"
                            className="flex items-center flex-col justify-center "
                          >
                            <span className="flex items-center justify-center p-2 text-gray-500 rounded-lg transition duration-75   hover:bg-gray-100 bg-[#EAECF04D]">
                              <BiCommentDetail className="text-xl text-[#F79009]" />
                            </span>
                          </a>
                        </li>
                      </ul>

                      <ul className="space-y-2 pt-5 px-3">
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-new"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-[#98A2B3] rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <GoPlus className="text-2xl" />
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-new"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip whitespace-nowrap"
                          >
                            New item
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
