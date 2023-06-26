
import SidebarImage from "../sideBarItem/SidebarImg";
import HomeIcon from "../assets/home.svg";
import MessageIcon from "../assets/message.svg";
import TaskIcon from "../assets/tasks.svg";
// import Logo from "../../assets/icons/logo.svg";
import Logo from "../assets/logo.svg";
// import Arrow from "../../assets/icons/arrow.svg";
import ArrowIcon from "../assets/ArrowIcon.svg";
import GroupIcon from "../assets/members.svg";
import SettingIcon from "../assets/settings.svg";
import AddIcon from "../assets/addSquare.svg";
import SidebarContent from "./SidebarContent";
// import AddIcon from "../../assets/icons/add.svg";
// import SidebarContent from "./SidebarContent";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white w-[50px] sm:min-w-[250px] xl:min-w-[280px]">
      <header className="h-20 flex justify-between items-center px-[13px] sm:px-[22px]">
        <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
          <img src={Logo} alt="Project M." />
          <span className="opacity-0 md:opacity-100">Project M.</span>
        </span>
        <img src={ArrowIcon} alt="arrow" className="mr-3 hidden sm:block" />
      </header>

      <hr className="border-t border-gray-300" />

      <ul className="my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1">
        <SidebarImage icon={HomeIcon} text="Home" />
        <SidebarImage icon={MessageIcon} text="Messages" />
        <SidebarImage icon={TaskIcon} text="Tasks" />
        <SidebarImage icon={GroupIcon} text="Members" />
        <SidebarImage icon={SettingIcon} text="Settings" />
      </ul>

      <header className="hidden sm:flex justify-between items-center mt-[30px] mb-5 mx-[22px]">
        <span className="text-xs text-[#787486] font-bold">MY PROJECTS</span>
        <img src={AddIcon} alt="add" />
      </header>
      <SidebarContent />
      <SidebarCard />
    </div>
  );
};

export default Sidebar;

