"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

function Tabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  return <div>Tabs</div>;
}

export default Tabs;
