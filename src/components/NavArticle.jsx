import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";

const NavArticle = () => {
  const location = useLocation();

  return (
    <nav className="w-full border-b-1">
      <div className="container mx-auto p-2">
        <div className="container mx-auto flex flex-col md:flex-row ">
          <NavLink to="/" className={`text-black group hover:text-green-600 md:mr-4 ${location.pathname === "/" ? "text-green-600" : ""}`}>
            <div className="flex items-center group-hover:text-green-600">
              <MdOutlinePlaylistAddCheckCircle size={60} />
              <div className="ml-2">
                <h2 className="text-2xl font-bold">Article</h2>
                <h3 className="text-xl">List Article</h3>
              </div>
            </div>
          </NavLink>

          <NavLink to="/article/add" className={`text-black group hover:text-green-600 ${location.pathname === "/article/add" ? "text-green-600" : ""}`}>
            <div className="flex items-center group-hover:text-green-600">
              <MdOutlinePlaylistAddCircle size={60} />
              <div className="ml-2">
                <h2 className="text-2xl font-bold">Add/Edit</h2>
                <h3 className="text-xl">Detail Article</h3>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavArticle;
