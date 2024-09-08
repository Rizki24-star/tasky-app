import { More } from "iconsax-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [openTheme, setopenTheme] = useState(false);
  const { state, setTheme } = useTheme();
  return (
    <div className={`header theme-${state.theme} relative  max-w-[800px] `}>
      <div className="py-4 px-6 grid grid-cols-3">
        <div className="flex-justify-start">
          <img
            src="/image/img_home_schedule.png"
            className="bg-white rounded-full"
            alt="user-info"
            width={50}
            height={50}
          />
        </div>
        <h2 className="text-center my-auto text-white font-bold text-xl">
          Tasky theme : {state.theme}
        </h2>
        <div className="my-auto">
          <More
            className="cursor-pointer ml-auto"
            color={"white"}
            onClick={() => setopenTheme(!openTheme)}
          />
        </div>
      </div>
      <div
        className={`more p-4 shadow-xl absolute  bg-white rounded-md w-full max-w-[400px] right-0 z-20 mr-4 ${
          openTheme ? "block" : "hidden"
        }`}
      >
        <div className="absolute w-8 h-8 transform -translate-x-1/2 bg-white border border-gray-300 rotate-45 top-[-8px] right-0 z-10"></div>
        <span className="font-bold text-md">Theme</span>
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4 ">
          <button
            onClick={() => {
              setTheme("blue");
            }}
            className="w-full aspect-square bg-blue-100 cursor-pointer"
          />
          <button
            onClick={() => {
              setTheme("green");
            }}
            className="w-full aspect-square bg-green-100 cursor-pointer"
          />
          <button
            onClick={() => {
              setTheme("red");
            }}
            className="w-full aspect-square bg-red-100 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
