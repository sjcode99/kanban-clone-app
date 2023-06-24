// import React from "react";
// import './header.css';
// import searchbar from '../assest/searchbar.svg';
// import header_icon1 from '../assest/header_icon1.svg';
// import header_icon2 from '../assest/header_icon2.svg';
// import header_icon3 from '../assest/header_icon3.svg';
// import dropdown from '../assest/dropdown.svg';
// import header_avatar from '../assest/header_avatar.svg';
// import Task from '../task/task.js';
// import BoardList from '../board/boardList.js';




// function Header() {
//     return (
//         <div className="container">
//             <div className="main">
//                 <div className="search">
//                     <img src={searchbar} className="searchbar_image"></img>
//                     <input text="Search" placeholder="Search for anything..." className="search_input" />
//                 </div>
//                 <div className="icons">
//                     <img src={header_icon1} className="header_icons"></img>
//                     <img src={header_icon2} className="header_icons"></img>
//                     <img src={header_icon3} className="header_icons"></img>
//                     <div className="avatar">
//                         <div className="name">Anima Agarwal <br /> <div className="grey">U.P, India</div></div>
//                         <img src={header_avatar}></img>
//                         <img src={dropdown}></img>
//                     </div>
//                 </div>
//             </div>
//             <Task />
//             <BoardList />
//         </div>

//     )
// }

// export default Header;

import task_header_icon1 from '../assets/task_header_icon1.svg';
import task_header_icon2 from '../assets/task_header_icon2.svg';
import task_header_icon3 from '../assets/task_header_icon3.svg';
// import filter_today from '../assets/filter_today.svg';
// import share from '../assets/share.svg';

// import EditIcon from "../../assets/icons/edit.svg";
// import LinkIcon from "../../assets/icons/link.svg";
// import CreateIcon from "../../assets/icons/create.svg";
import FilterIcon from "../assets/filter.svg";
import DateIcon from "../assets/date.svg";
import GridIcon from "../assets/grid.svg";
import PauseIcon from "../assets/pause.svg";
import ShareIcon from "../assets/share.svg";
import ArrowDownIcon from "../assets/arrowDown.svg";
// import Members from "../members/Members";

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
          <img src={task_header_icon3} alt="Create" />
          {/* <span className="text-base font-medium text-indigo-600 ml-2 mr-3 -mt-1">
            Invite
          </span> */}
          {/* <Members /> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center border w-[122px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={FilterIcon} alt="FilterIcon" className="mr-3" />
            <span className="text-base mr-4">Filter</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
          <div className="flex items-center border w-[125px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={DateIcon} alt="DateIcon" className="mr-3" />
            <span className="text-base mr-4">Today</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <img src={ShareIcon} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <img src={PauseIcon} alt="PauseIcon" />
          </div>
          <img src={GridIcon} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;

