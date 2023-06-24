import SidebarDott from "../sideBarItem/SidebarDott"
const SidebarContent = () => {
  return (
    <ul className="hidden sm:flex flex-col gap-[10px]">
      <SidebarDott color="bg-green-500" text="Mobile App" />
      <SidebarDott color="bg-orange-500" text="Website Redesign" />
      <SidebarDott color="bg-purple-200" text="Design System" />
      <SidebarDott color="bg-blue-400" text="Wireframes" />
    </ul>
  );
};

export default SidebarContent;
