import { Add, Calendar } from "iconsax-react";
import homeImgSchedule from "/image/img_home_schedule.png";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { state } = useTheme();

  return (
    <div className={`flex flex-col px-4 h-screen home-theme-${state.theme}`}>
      <div className="flex-grow flex flex-col items-center justify-center w-full text-center opacity-50">
        <img
          src={homeImgSchedule}
          className="-mt-12 mx-auto mb-4 w-[200px] h-max"
          alt="home-schedule"
        />
        <span className="text-center font-medium text-lg">
          Lets plan your day
        </span>
      </div>
      <div className="flex items-center gap-2  w-full p-4 mb-4 add-task rounded-md">
        <Add />
        <span>Add your task...</span>
        <div className="ms-auto flex items-center gap-4">
          <Calendar />
          <select name="" id="">
            <option value="">Hight</option>
            <option value="">Medium</option>
            <option value="">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Home;
