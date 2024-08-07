"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

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
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
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
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Invited Alisa Hester to the team",
    date: "6d ago",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
             sm:my-8  w-3/4 min-h-full h-[768px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="mt-3 sm:mt-5 grid grid-cols-12 h-full">
              <div className="col-span-12"></div>
              <div className="col-span-8"></div>
              <div className="grid col-span-4 grid-cols-12 ">
                <div className="col-span-10 flex justify-end">
                  <ul role="list" className="-mb-8">
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
                <div className="col-span-2 flex justify-end">
                  <aside class=" z-30 w-16 h-full bg-white border-l border-gray-200 border">
                    <div class="divide-y divide-gray-100 ">
                      <ul class="space-y-2 pb-5 px-3">
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="calendar-tooltip"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              ></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="calendar-tooltip"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Calendar
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-notes"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-notes"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Notes
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-todo-list"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              ></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-todo-list"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip whitespace-nowrap"
                          >
                            To-do list
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-users"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-users"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Users
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-media"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-media"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
                          >
                            Media
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </li>
                      </ul>

                      <ul class="space-y-2 pt-5 px-3">
                        <li>
                          <a
                            href="#"
                            data-tooltip-target="tooltip-new"
                            data-tooltip-placement="left"
                            class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75  hover:text-gray-900  hover:bg-gray-100 "
                          >
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              ></path>
                            </svg>
                            <span class="sr-only"></span>
                          </a>
                          <div
                            id="tooltip-new"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip whitespace-nowrap"
                          >
                            New item
                            <div class="tooltip-arrow" data-popper-arrow></div>
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
