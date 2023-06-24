// import CalendarIcon from "../../assets/icons/calendar.svg";
// import SearchIcon from "../../assets/icons/search.svg";
import searchbar from '../assets/searchbar.svg';
import header_icon1 from '../assets/header_icon1.svg';
import header_icon2 from '../assets/header_icon2.svg';
import header_icon3 from '../assets/header_icon3.svg';

// import NotificationIcon from "../../assets/icons/notification.svg";
// import QuestionIcon from "../../assets/icons/question.svg";
import dropdown from '../assets/dropdown.svg';
import header_avatar from '../assets/header_avatar.svg';
// import ProfileIcon from "../../assets/icons/profile.svg";
// import DownArrowIcon from "../../assets/icons/downArrow.svg";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center text-gray-500">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="hidden md:flex items-center rounded-md bg-gray-100 px-4 py-2 ml-8">
          <img src={searchbar} alt="" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[471px] h-[11px] hidden md:block outline-none bg-gray-100 p-3 ml-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-6">
            <img src={header_icon1} alt="" />
          </div>
          <div className="flex items-center justify-center mr-6">
            <img src={header_icon2} alt="" />
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={header_icon3} alt="" />
          </div>

          <div className="flex items-center gap-3 mr-8">
            <div className="hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end">
              <span className="text-base font-normal text-black">
                Anima Agrawal
              </span>
              <span className="text-sm font-normal text-grey">U.P, India</span>
            </div>
            <img
              src={header_avatar}
              alt="Anima Agrawal"
              className="rounded-full"
            />
            <img src={dropdown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

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
