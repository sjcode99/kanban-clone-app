import searchbar from '../assets/searchbar.svg';
import navbar_icon1 from '../assets/navbar_icon1.svg';
import navbar_icon2 from '../assets/navbar_icon2.svg';
import navbar_icon3 from '../assets/navbar_icon3.svg';

import dropdown from '../assets/dropdown.svg';
import navbar_avatar from '../assets/navbar_avatar.svg';

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center text-gray-500">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="w-[417px] h-[44px] hidden md:flex items-center rounded-md bg-gray-100 px-4 py-2 ml-8">
          <img src={searchbar} alt="" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="hidden md:block outline-none bg-gray-100 p-3 ml-3"
            // className="w-[471px] h-[11px] hidden md:block outline-none bg-gray-100 p-3 ml-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-6">
            <img src={navbar_icon1} alt="" />
          </div>
          <div className="flex items-center justify-center mr-6">
            <img src={navbar_icon2} alt="" />
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={navbar_icon3} alt="" />
          </div>

          <div className="flex items-center gap-3 mr-8">
            <div className="hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end">
              <span className="text-base font-normal text-black">
                Anima Agrawal
              </span>
              <span className="text-sm font-normal text-grey">U.P, India</span>
            </div>
            <img
              src={navbar_avatar}
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
