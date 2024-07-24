"use client";

import { PiGithubLogoFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
import { SiYoutube } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";

interface phoneLinkProps {
  isLinkBtn: boolean;
}

const Phone = ({ isLinkBtn }: phoneLinkProps) => {
  return (
    <div className="flex w-[560px] p-6 justify-center items-center gap-2 self-stretch">
      <div className="relative w-[307px] h-[631px] bg-white rounded-xl border border-[#737373]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 rounded-b-lg bg-gray-200"></div>
        <div className="flex justify-center mt-16">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
        </div>

        <div className="mt-8 space-y-4">
          <div
            className={`w-5/6 h-12 rounded-lg mx-auto p-2 ${
              isLinkBtn ? "bg-black" : "bg-gray-200"
            }`}
          >
            {isLinkBtn && (
              <div className="flex items-center h-full">
                <div className="flex items-center h-full w-full gap-4">
                  <PiGithubLogoFill className="text-white" />
                  <p className="text-white">Github</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>
            )}
          </div>
          <div
            className={`w-5/6 h-12 rounded-lg mx-auto p-2 ${
              isLinkBtn ? "bg-red-600" : "bg-gray-200"
            }`}
          >
            {isLinkBtn && (
              <div className="flex items-center h-full">
                <div className="flex items-center h-full w-full gap-4">
                  <SiYoutube className="text-white" />
                  <p className="text-white">Youtube</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>
            )}
          </div>
          <div
            className={`w-5/6 h-12 rounded-lg mx-auto ${
              isLinkBtn ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            {!isLinkBtn && (
              <div className="flex items-center h-full">
                <div className="flex items-center h-full w-full gap-4">
                  <IoLogoLinkedin className="text-white" />
                  <p className="text-white">Linkedin</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>
            )}
          </div>
          <div className="w-5/6 h-12 bg-gray-200 rounded-lg mx-auto"></div>
          <div className="w-5/6 h-12 bg-gray-200 rounded-lg mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
