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

import {
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { LuCopy } from "react-icons/lu";
import axios from "axios";

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
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
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
  const deleteTask = (code) => {
    axios.delete(
      `https://api.management.parse25proje.link/api/tasks/${code}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    window.location.reload();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[99]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all 
            data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in
             sm:my-8  w-3/4 min-h-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="mt-3 grid grid-cols-12 max-h-[768px] overflow-y-auto box-border">
              <div className="col-span-12 py-5 border-b px-5 flex flex-row justify-between h-fit">
                <nav
                  aria-label="Breadcrumb"
                  className="flex flex-row items-start h-fit"
                >
                  <div className="flex gap-3 flex-row pr-6">
                    <button className="text-xl">
                      <IoIosArrowUp />
                    </button>
                    <button className="text-xl">
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <ol role="list" className="flex items-center space-x-4">
                    <li>
                      <div>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <HomeIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0"
                          />
                          <span className="sr-only">Home</span>
                        </a>
                      </div>
                    </li>
                    {pages.map((page) => (
                      <li key={page.name}>
                        <div className="flex items-center">
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                          />
                          <a
                            href={page.href}
                            aria-current={page.current ? "page" : undefined}
                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
              <div className="col-span-8 p-12 pt-8 flex flex-col gap-14">
                <div className="flex flex-row justify-between">
                  <div className="grid grid-cols-12 w-1/2 pt-10 items-center">
                    <button>
                      <div className="bg-[#8D99AE] rounded-full w-7 h-7 flex justify-center items-center border-2">
                        <span className="w-4 h-4 bg-[#8D99AE] border rounded-full block col-span-1 ring-2 ring-white"></span>
                      </div>
                    </button>
                    <h2 className="text-2xl font-bold text-[#475467] col-span-11">
                      {detailData?.title}
                    </h2>

                    <button className="col-span-12 pt-3 text-base font-medium text-[#98A2B3] flex flex-row items-center gap-2">
                      ID: <span className="underline">#{detailData?.id}</span>
                      <LuCopy />
                    </button>
                  </div>
                  <div>Date Picker</div>
                </div>
                <div className="flex flex-row gap-20">
                  <div>
                    <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
                      Task Status
                    </h2>
                    <span className="text-black font-medium text-md capitalize">
                      {detailData?.column}
                    </span>
                  </div>
                  <div>
                    <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
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
                    <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
                      Priotry
                    </h2>
                    <span className={`text-md ${flagColorClass}`}>
                      <FaFlag />
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
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
                        "border pt-3 pb-2 flex justify-center gap-28 border-t rounded-t-lg bg-[#F9FAFB]"
                      }
                    >
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center text-lg font-normal text-[#98A2B3]  "
                        }
                      >
                        <GoPaperclip /> Attachment
                      </Tab>
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center text-lg font-normal text-[#98A2B3] "
                        }
                      >
                        <GoPaperclip /> Sub Task
                      </Tab>
                      <Tab
                        className={
                          "flex flex-row gap-2 items-center text-lg font-normal text-[#98A2B3] "
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
                                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                            />

                                            <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                              <ChatBubbleLeftEllipsisIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 text-gray-400"
                                              />
                                            </span>
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <div className="flex flex-row gap-2 text-center items-center">
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
                                              <p className="mt-0.5 text-sm text-gray-500">
                                                {commentsItem.date}
                                              </p>
                                            </div>
                                            <div className="mt-2 text-sm text-gray-700">
                                              <p>{commentsItem.info}</p>
                                            </div>
                                            <div className="mt-2 text-sm text-gray-700 border px-2 py-3 rounded-tr-lg rounded-bl-lg">
                                              <p>{commentsItem.comment}</p>
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
                                    <label for="comment" className="sr-only">
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
                                  <div className="flex justify-between items-center px-3 pb-2 bg-[#F9FAFB]">
                                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x ">
                                      <div className="flex items-center space-x-1 sm:pr-4">
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
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
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            />
                                          </svg>
                                          <span className="sr-only">
                                            Attach file
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaItalic />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaHeading />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaHeading className="text-sm" />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <PiQuotesFill />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <IoMdLink />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaImage />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <FaListUl />
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
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
              <div className="grid col-span-4 grid-cols-12 ">
                <div className="col-span-10 flex flex-col gap-4 border border-t-0  overflow-y-auto">
                  <div className="flex flex-row justify-between p-4 border-b">
                    <h2>Activity</h2>
                    <div className="flex flex-row gap-4">
                      <button className="text-xl">
                        <IoFilterOutline />
                      </button>

                      <button className="text-xl">
                        <IoIosSearch />
                      </button>
                    </div>
                  </div>
                  <ul role="list" className="-mb-8 p-3 max-h-[768px]">
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
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                              />

                              <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                <ChatBubbleLeftEllipsisIcon
                                  aria-hidden="true"
                                  className="h-5 w-5 text-gray-400"
                                />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-row gap-2 text-center items-center">
                                <div className="text-sm">
                                  <a
                                    href={activityItem.person.href}
                                    className="font-medium text-gray-900"
                                  >
                                    {activityItem.person.name}
                                  </a>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                  {activityItem.date}
                                </p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
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
                      <ul className="space-y-2 pb-5 px-3">
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="calendar-tooltip"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              ></path>
                            </svg>
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="calendar-tooltip"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Calendar
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-notes"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                            </svg>
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-notes"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Notes
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-todo-list"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              ></path>
                            </svg>
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-todo-list"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip whitespace-nowrap"
                          >
                            To-do list
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-users"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-users"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Users
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-media"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            <span className="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-media"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Media
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </li>
                      </ul>

                      <ul className="space-y-2 pt-5 px-3">
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-new"
                            data-tooltip-placement="left"
                            className="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              ></path>
                            </svg>
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
