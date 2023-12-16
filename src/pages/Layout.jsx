import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar isHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
