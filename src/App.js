import React from 'react';
import Sidebar from './components/sideBar/sidebar.js';
import "./App.css";
import Header from './components/header/Header.js';
import Navbar from "./components/navbar/Navbar.js"
import Kanban from './components/kanban/Kanban.js';

function App() {
  return (
    // <>
    //   <div className='sidebar w-full'>
    //     <Sidebar />
    //     <Header />
    //   </div>
    // </>
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full border-red-300">
        <Navbar />
        <hr className="border-t border-gray-300" />
        <div className=" mx-4 md:mx-8 lg:mx-12 mt-5">
          <Header />
          <div className="mt-10">
            <Kanban />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
