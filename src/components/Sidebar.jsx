import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { SiSemanticuireact } from "react-icons/si";
import { GrArticle } from "react-icons/gr";

const Sidebar = ({ isHidden, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div className="bg-white pt-2">
      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        {isHidden ? <TbLayoutSidebarLeftExpand size={40} className="rounded-full" /> : <TbLayoutSidebarLeftCollapse size={40} className="rounded-full" />}
      </button>

      <div className={`h- p-4 bg-white w-64 border-1 ${isHidden ? "hidden" : ""}`}>
        <div className="flex items-center px-7">
          <SiSemanticuireact size={40} className="text-green-700" />
          <h2 className="text-3xl font-bold text-black px-6">Logo</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-10 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink to="/" className={`flex items-center p-2 space-x-3 rounded-md ${location.pathname === "/" ? "bg-gray-200" : ""}`}>
                <GrArticle size={30} className="text-green-700" />
                <span className="text-lg text-green-700">Article</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
