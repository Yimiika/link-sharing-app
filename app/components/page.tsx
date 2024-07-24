"use client";

import Image from "next/image";
import Form from "./components/form";
import { useState } from "react";
import Phone from "./components/phone";

const HomePage = () => {
  const [data, setData] = useState<{ label: string; link: string }[]>([]);

  const handleSetData = (data: { label: string; link: string }[]) => {
    setData(data);
  };

  return (
    <div className="flex p-[0px_24px_24px_24px] items-start gap-6 flex-[1_0_0] self-stretch">
      <Phone isLinkBtn={false} />
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
        <Form getData={handleSetData} />
        {data.length < 1 && (
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
        )}
      </div>
    </div>
  );
};

export default HomePage;
