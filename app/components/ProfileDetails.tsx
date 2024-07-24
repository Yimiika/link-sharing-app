import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileDetails = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col p-10 items-start gap-10 flex-1 self-stretch">
        <div>
          <h3 className="text-[#333] text-2xl font-bold leading-[48px]">
            Customize your links
          </h3>
          <p className="text-[#737373] text-base font-normal leading-6">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <button className="flex flex-col justify-center items-center p-[11px] px-[27px] gap-2 self-stretch rounded-lg border border-[#633CFF]">
          <p className="text-[#633CFF] text-base font-semibold leading-6">
            + Add new link
          </p>
        </button>
        <div className="flex flex-col p-5 justify-center items-center gap-10 flex-1 self-stretch rounded-[12px] bg-[#FAFAFA] ">
          <Image
            src="/phoneimage.svg"
            alt="Logo"
            width={249.533}
            height={160}
          />
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-[#333] text-center text-4xl font-bold leading-[48px]">
              Let’s get you started
            </h3>
            <p className="text-[#737373] text-center text-base font-normal leading-6 w-[488px]">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <div className="flex p-[24px_40px] flex-col items-end gap-2 self-stretch">
          <button className="flex p-[11px_27px] flex-col items-start gap-2 rounded-lg opacity-25 bg-[#633CFF]">
            <p className="text-white text-[16px] font-semibold leading-[150%]">
              Save
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
