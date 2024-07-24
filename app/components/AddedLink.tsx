import React from "react";
import Link from "next/link";
import Image from "next/image";

const AddedLink = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Image src="/rectangle.svg" alt="Logo" width={12} height={1} />
        <Image src="/rectangle.svg" alt="Logo" width={12} height={1} />
      </div>
      <h5>Link #1</h5>
    </div>
  );
};

export default AddedLink;
