"use client";
import { useState } from "react";

const SwitchTab = ({ data, onTab }) => {
  const [selectedTab, SetSelectedTab] = useState(0);
  const [bg, SetBg] = useState(0);
  const activeTab = (tab, index) => {
    SetBg(index * 100);
    setTimeout(() => {
      SetSelectedTab(index);
    }, 0);
    onTab(tab, index);
  };
  return (
    <div className="relative flex items-center">
      {data.map((tab, index) => (
        <div
          key={index}
          className={`z-10 flex h-[30px]  w-[50px] cursor-pointer items-center justify-center rounded-full ${
            index == selectedTab ? "bg-red-500" : ""
          }`}
          onClick={() => activeTab(tab, index)}
        >
          {tab}
        </div>
      ))}
      <span
        className="absolute left-0 h-[50px] w-[50px]  rounded-full transition-all"
        style={{ bg }}
      />
    </div>
  );
};

export default SwitchTab;
