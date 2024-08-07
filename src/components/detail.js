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
} from "@headlessui/react";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiShare1, CiStar } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { GoPaperclip } from "react-icons/go";

import {
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { LuCopy } from "react-icons/lu";

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
    id: 8,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
];
const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export default function Detail({ open, setOpen }) {
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
            <div className="mt-3 grid grid-cols-12 h-full">
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
                  <button className="text-xl">
                    <HiOutlineDotsHorizontal />
                  </button>
                  <button className="text-xl">
                    <CiShare1 />
                  </button>
                  <button className="text-xl">
                    <CiStar />
                  </button>
                  <button className="text-xl">
                    <RxCross1 />
                  </button>
                </div>
              </div>
              <div className="col-span-8 p-12 pt-8 flex flex-col gap-14">
                <div className="flex flex-row justify-between">
                  <div className="grid grid-cols-12 w-1/2 pt-10 items-center">
                    <span className="w-4 h-4 bg-[#8D99AE] border rounded-full block col-span-1 "></span>
                    <h2 className="text-2xl font-bold text-[#475467] col-span-11">
                      Bu örnek görevdir. Örnek görevin içeriğine dair açıklama
                      detail’da bulunmaktadır.
                    </h2>

                    <button className="col-span-12 pt-3 text-base font-medium text-[#98A2B3] flex flex-row items-center gap-2">
                      ID: <span className="underline">#435365</span>
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
                    <span className="text-black font-medium text-md">Open</span>
                  </div>
                  <div>
                    <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
                      Task Status
                    </h2>
                    <span className="text-black font-medium text-md">Open</span>
                  </div>
                  <div>
                    <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
                      Task Status
                    </h2>
                    <span className="text-black font-medium text-md">Open</span>
                  </div>
                </div>
                <div>
                  <h2 className="uppercase text-md font-medium text-[#475467] pb-3">
                    Description
                  </h2>
                  <p className="text-sm font-normal text-[#475467]">
                    Görevin açıklaması: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
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
                            <div className="max-h-52 overflow-y-auto">
                              <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100  rounded-lg ">
                                <div className="flex">
                                  <div className="mr-4">
                                    <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium ">
                                      <button
                                        type="button"
                                        className="text-gray-500  py-1  rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        +
                                      </button>
                                      <span className="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">
                                        14
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-500   py-1  rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        -
                                      </button>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <footer className="flex justify-between items-center mb-2 w-full">
                                      <a href="#" className="flex items-center">
                                        <img
                                          className="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                          alt="Bonnie Green"
                                        />
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 ">
                                          <span className="font-semibold">
                                            Bonnie Green
                                          </span>
                                          <time
                                            className="text-sm text-gray-600  md:ml-2"
                                            pubdate
                                            datetime="2022-03-15"
                                            title="March 15th, 2022"
                                          >
                                            Mar. 15, 2022
                                          </time>
                                        </p>
                                      </a>
                                      <button
                                        id="dropdownComment1Button"
                                        data-dropdown-toggle="dropdownComment1"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   "
                                        type="button"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 3"
                                        >
                                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Comment settings
                                        </span>
                                      </button>
                                      {/* <!-- Dropdown menu --> */}
                                      <div
                                        id="dropdownComment1"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow  "
                                      >
                                        <ul
                                          className="py-1 text-sm text-gray-700 "
                                          aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Remove
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Report
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </footer>
                                    <p className="text-gray-500 ">
                                      The article covers the essentials,
                                      challenges, myths and stages the UX
                                      designer should consider while creating
                                      the design strategy.
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                      <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
                                      >
                                        <svg
                                          className="w-3.5 h-3.5 mr-1"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        </svg>
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="ml-6 lg:ml-12 p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100  rounded-lg ">
                                <div className="flex">
                                  <div className="mr-4">
                                    <div className="rounded-lg w-9 flex flex-col items-center justify-center font-medium bg-gray-100 ">
                                      <button
                                        type="button"
                                        className="text-gray-500  py-1  rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        +
                                      </button>
                                      <span className="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">
                                        3
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-500   py-1  rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        -
                                      </button>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <footer className="flex justify-between items-center mb-2 w-full">
                                      <a href="#" className="flex items-center">
                                        <img
                                          className="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                          alt="Jese Leos"
                                        />
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 ">
                                          <span className="font-semibold">
                                            Jese Leos
                                          </span>
                                          <time
                                            className="text-sm text-gray-600  md:ml-2"
                                            pubdate
                                            datetime="2022-02-12"
                                            title="February 12th, 2022"
                                          >
                                            Feb. 12, 2022
                                          </time>
                                        </p>
                                      </a>
                                      <button
                                        id="dropdownComment2Button"
                                        data-dropdown-toggle="dropdownComment2"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   "
                                        type="button"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 3"
                                        >
                                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Comment settings
                                        </span>
                                      </button>
                                      {/* <!-- Dropdown menu --> */}
                                      <div
                                        id="dropdownComment2"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow  "
                                      >
                                        <ul
                                          className="py-1 text-sm text-gray-700 "
                                          aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Remove
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Report
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </footer>
                                    <p className="text-gray-500 ">
                                      Much appreciated! Glad you liked it ☺️
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                      <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
                                      >
                                        <svg
                                          className="w-3.5 h-3.5 mr-1"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        </svg>
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100  rounded-lg ">
                                <div className="flex">
                                  <div className="mr-4">
                                    <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium ">
                                      <button
                                        type="button"
                                        className="text-gray-500  py-1  rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        +
                                      </button>
                                      <span className="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">
                                        12
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-500   py-1  rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        -
                                      </button>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <footer className="flex justify-between items-center mb-2 w-full">
                                      <a href="#" className="flex items-center">
                                        <img
                                          className="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                          alt="Danny Hart"
                                        />
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 ">
                                          <span className="font-semibold">
                                            Danny Hart
                                          </span>
                                          <time
                                            className="text-sm text-gray-600  md:ml-2"
                                            pubdate
                                            datetime="2022-02-08"
                                            title="February 8th, 2022"
                                          >
                                            Feb. 8, 2022
                                          </time>
                                        </p>
                                      </a>
                                      <button
                                        id="dropdownComment3Button"
                                        data-dropdown-toggle="dropdownComment3"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   "
                                        type="button"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 3"
                                        >
                                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Comment settings
                                        </span>
                                      </button>
                                      {/* <!-- Dropdown menu --> */}
                                      <div
                                        id="dropdownComment3"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow  "
                                      >
                                        <ul
                                          className="py-1 text-sm text-gray-700 "
                                          aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Remove
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Report
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </footer>
                                    <p className="text-gray-500 ">
                                      Very straight-to-point article. Really
                                      worth time reading. Thank you! But tools
                                      are just the instruments for the UX
                                      designers. The knowledge of the design
                                      tools are as important as the creation of
                                      the design strategy.
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                      <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
                                      >
                                        <svg
                                          className="w-3.5 h-3.5 mr-1"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        </svg>
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100  rounded-lg ">
                                <div className="flex">
                                  <div className="mr-4">
                                    <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium ">
                                      <button
                                        type="button"
                                        className="text-gray-500  py-1  rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        +
                                      </button>
                                      <span className="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">
                                        8
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-500   py-1  rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        -
                                      </button>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <footer className="flex justify-between items-center mb-2 w-full">
                                      <a href="#" className="flex items-center">
                                        <img
                                          className="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                          alt="Bonnie Green"
                                        />
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 ">
                                          <span className="font-semibold">
                                            Bonnie Green
                                          </span>
                                          <time
                                            className="text-sm text-gray-600  md:ml-2"
                                            pubdate
                                            datetime="2022-03-15"
                                            title="March 15th, 2022"
                                          >
                                            Mar. 15, 2022
                                          </time>
                                        </p>
                                      </a>
                                      <button
                                        id="dropdownComment4Button"
                                        data-dropdown-toggle="dropdownComment4"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   "
                                        type="button"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 3"
                                        >
                                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Comment settings
                                        </span>
                                      </button>
                                      {/* <!-- Dropdown menu --> */}
                                      <div
                                        id="dropdownComment4"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow  "
                                      >
                                        <ul
                                          className="py-1 text-sm text-gray-700 "
                                          aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Remove
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Report
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </footer>
                                    <p className="text-gray-500 ">
                                      The article covers the essentials,
                                      challenges, myths and stages the UX
                                      designer should consider while creating
                                      the design strategy.
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                      <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
                                      >
                                        <svg
                                          className="w-3.5 h-3.5 mr-1"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        </svg>
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100  rounded-lg ">
                                <div className="flex">
                                  <div className="mr-4">
                                    <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium ">
                                      <button
                                        type="button"
                                        className="text-gray-500  py-1  rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        +
                                      </button>
                                      <span className="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">
                                        32
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-500   py-1  rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50   "
                                      >
                                        -
                                      </button>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <footer className="flex justify-between items-center mb-2 w-full">
                                      <a href="#" className="flex items-center">
                                        <img
                                          className="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                          alt="Helene Engels"
                                        />
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 ">
                                          <span className="font-semibold">
                                            Helene Engels
                                          </span>
                                          <time
                                            className="text-sm text-gray-600  md:ml-2"
                                            pubdate
                                            datetime="2022-06-23"
                                            title="June 23rd, 2022"
                                          >
                                            Jun. 23, 2022
                                          </time>
                                        </p>
                                      </a>
                                      <button
                                        id="dropdownComment5Button"
                                        data-dropdown-toggle="dropdownComment5"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   "
                                        type="button"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 3"
                                        >
                                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Comment settings
                                        </span>
                                      </button>
                                      {/* <!-- Dropdown menu --> */}
                                      <div
                                        id="dropdownComment5"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow  "
                                      >
                                        <ul
                                          className="py-1 text-sm text-gray-700 "
                                          aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Remove
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="block py-2 px-4 hover:bg-gray-100  "
                                            >
                                              Report
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </footer>
                                    <p className="text-gray-500 ">
                                      Thanks for sharing this. I do came from
                                      the Backend development and explored some
                                      of the tools to design my Side Projects.
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                      <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
                                      >
                                        <svg
                                          className="w-3.5 h-3.5 mr-1"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        </svg>
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="flex">
                              <form className=" w-full">
                                <div className="w-full bg-gray-50 rounded-lg border border-gray-200  ">
                                  <div className="py-2 px-4 bg-white rounded-t-lg ">
                                    <label for="comment" className="sr-only">
                                      Your comment
                                    </label>
                                    <textarea
                                      id="comment"
                                      rows="4"
                                      className="px-0 w-full text-sm text-gray-900 bg-white border-0  focus:ring-0 "
                                      placeholder="Write a comment..."
                                      required
                                    ></textarea>
                                  </div>
                                  <div className="flex justify-between items-center py-2 px-3 border-t ">
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
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 20"
                                          >
                                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Embed map
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 20"
                                          >
                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Upload image
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 20"
                                          >
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Format code
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Add emoji
                                          </span>
                                        </button>
                                      </div>
                                      <div className="flex-wrap items-center space-x-1 sm:pl-4 hidden sm:flex">
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 21 18"
                                          >
                                            <path
                                              stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                                            />
                                          </svg>
                                          <span className="sr-only">
                                            Add list
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Settings
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Timeline
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                          </svg>
                                          <span className="sr-only">
                                            Download
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
                                    >
                                      Post comment
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
                <div className="col-span-10 flex flex-col gap-4 border border-t-0 max-h-[768px] overflow-y-auto">
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
                  <ul role="list" className="-mb-8 p-3">
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
            {/* <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back to dashboard
              </button>
            </div> */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
