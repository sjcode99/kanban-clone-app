
import task_header_icon1 from '../assets/task_header_icon1.svg';
import task_header_icon2 from '../assets/task_header_icon2.svg';
import task_header_icon3 from '../assets/task_header_icon3.svg';
import FilterIcon from "../assets/filter.svg";
import DateIcon from "../assets/date.svg";
import GridIcon from "../assets/grid.svg";
import IconInsideBox from "../assets/IconInsideBox.svg";
import ShareIcon from "../assets/share.svg";
import ArrowDownIcon from "../assets/arrowDown.svg";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex gap-[17px] items-center md:self-start">
          <span className="font-semibold text-black -mt-3 text-3xl lg:text-[46px]">
            Mobile App
          </span>
          <img src={task_header_icon1} alt="Edit" />
          <img src={task_header_icon2} alt="Link" />
        </div>
        <div className="flex items-center justify-around md:self-start">
          <img src={task_header_icon3} alt="Group" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center border w-[122px] h-[40px] text-[#787486] font-medium rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={FilterIcon} alt="FilterIcon" className="mr-3" />
            <span className="text-base mr-4">Filter</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
          <div className="flex items-center border w-[125px] h-[40px] text-[#787486] font-medium rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={DateIcon} alt="DateIcon" className="mr-3" />
            <span className="text-base mr-4">Today</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] text-[#787486] font-medium rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <img src={ShareIcon} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <img src={IconInsideBox} alt="IconInsideBox" />
          </div>
          <img src={GridIcon} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;

