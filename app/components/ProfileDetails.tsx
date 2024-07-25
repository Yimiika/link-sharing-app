"use client";

import React from "react";
import Image from "next/image";
import Phone from "./phone";

const ProfileDetails = () => {
  return (
    <div className="flex p-10 flex- items-start gap-10 flex-[1_0_0] self-stretch">
      <Phone isLinkBtn={false} />
      <div className="flex flex-col p-10 items-start gap-10 flex-1 self-stretch">
        <div>
          <h3 className="text-[#333] text-2xl font-bold leading-[48px]">
            Profile Details
          </h3>
          <p className="text-[#737373] text-base font-normal leading-6">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <div className="flex p-5 flex-col justify-center items-center gap-3 rounded-xl bg-[#FAFAFA] self-stretch">
          <div className="flex flex-row items-center gap-6 flex-[1_0_0] self-stretch">
            <div className="text-[#737373] text-[16px] font-normal leading-[150%]">
              <p>Profile picture</p>
            </div>
            <div className="flex p-[61px_38px_60px_39px] justify-center items-center rounded-xl bg-[#EFEBFF]">
              <div className="flex flex-col items-center gap-2">
                <Image src="/picture.svg" alt="Logo" width={40} height={40} />
                <p>+ Upload Image</p>
              </div>
            </div>
            <div className="flex flex-col text-[#737373] text-[12px] font-normal leading-[150%]">
              <p>Image must be below 1024x1024px.</p>
              <p>Use PNG or JPG format.</p>
            </div>
          </div>
        </div>
        <div className="flex p-5 flex-col justify-center items-center gap-3 self-stretch rounded-xl bg-[#FAFAFA]">
          <div className="flex flex-row items-center gap-4 self-stretch">
            <p className="w-[240px] text-[#737373] text-[16px] font-normal leading-[150%]">
              First name*
            </p>
            <input
              type="name"
              placeholder="e.g. John"
              className="flex p-[12px_16px] items-center gap-3 flex-[1_0_0] rounded-lg border border-[#D9D9D9] bg-[#FFF] text-[#333] text-[16px] font-normal leading-[150%] opacity-50"
            />
          </div>
          <div className="flex flex-row items-center gap-4 self-stretch">
            <p className="w-[240px] text-[#737373] text-[16px] font-normal leading-[150%]">
              Last name*
            </p>
            <input
              type="name"
              placeholder="e.g. Appleseed"
              className="flex p-[12px_16px] items-center gap-3 flex-[1_0_0] rounded-lg border border-[#D9D9D9] bg-[#FFF] text-[#333] text-[16px] font-normal leading-[150%] opacity-50"
            />
          </div>
          <div className="flex flex-row items-center gap-4 self-stretch">
            <p className="w-[240px] text-[#737373] text-[16px] font-normal leading-[150%]">
              Email
            </p>
            <input
              type="name"
              placeholder="e.g. email@example.com"
              className="flex p-[12px_16px] items-center gap-3 flex-[1_0_0] rounded-lg border border-[#D9D9D9] bg-[#FFF] text-[#333] text-[16px] font-normal leading-[150%] opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
