"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  { key: "boards", label: "Boards" },
  { key: "list", label: "List" },
  { key: "other", label: "Other" },
  { key: "other1", label: "Other" },
  { key: "other2", label: "Other" },
  { key: "other3", label: "Other" },
  { key: "other4", label: "Other" },
];

function Tabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTab = searchParams.get("tab") || "boards";

  const handleTabChange = (tab) => {
    router.push(`/boards?tab=${tab}`);
  };

  return (
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
  );
}

export default Tabs;
