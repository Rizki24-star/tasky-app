import { More } from "iconsax-react";
import React from "react";

const Header = () => {
  return (
    <div className="header bg-yellow-200 p-4 flex flex-row justify-between items-center">
      <div className="">
        <img
          src=""
          className="bg-white rounded-full"
          alt="user-info"
          width={50}
          height={50}
        />
      </div>
      <h2 className="text-black font-bold text-xl">My plans</h2>
      <div>
        <More />
      </div>
    </div>
  );
};

export default Header;
