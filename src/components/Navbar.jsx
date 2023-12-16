import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white w-full border-b-1">
        <div className="container mx-auto p-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-black font-bold text-xl">Article</div>
            <ul className="flex space-x-4"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
