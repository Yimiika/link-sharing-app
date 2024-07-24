import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row p-6 gap-2 ">
      <div className=" flex p-[16px] pl-[24px] gap-2 container mx-auto justify-between items-center">
        <a className="flex flex-row items-center gap-1.5">
          <Image
            src="/solar_link-circle-bold.svg"
            alt="Logoicon"
            width={32}
            height={32}
          />
          <Image src="/logo.svg" alt="Logo" width={108} height={21} />
        </a>
        <div className="flex flex-row">
          <Link
            href=""
            className="flex flex-row items-center gap-2 rounded-lg bg-[#EFEBFF] p-[11px] px-[27px] text-[#633CFF] font-[Instrument Sans] text-base font-semibold leading-[150%] "
          >
            <Image src="/linkicon.svg" alt="Linkicon" width={21} height={20} />
            Links
          </Link>
          <Link
            href=""
            className="flex flex-row items-center gap-2 rounded-lg p-[11px] px-[27px] text-[#737373] font-[Instrument Sans] text-base font-semibold leading-[150%]"
          >
            <Image
              src="/profileicon.svg"
              alt="Linkicon"
              width={21}
              height={20}
            />
            Profile Details
          </Link>
        </div>
        <div>
          <a
            href=""
            className="flex flex-col p-[11px] px-[27px] items-start gap-2 rounded-lg border border-[#633CFF] text-[#633CFF] font-[Instrument Sans] text-base font-semibold leading-[150%]"
          >
            <button>Preview</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
