import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={`/`}>
        <img src={assets.logo} alt="" className="w-36" />
      </Link>
      <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search-icon"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile-icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div
              className="flex flex-col gap-2 w-36 py-3 px-5
            bg-slate-100 rounded text-gray-500"
            >
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 leading-4
           bg-black rounded-full text-center text-white aspect-square text-[8px]"
          >
            10
          </p>
        </Link>

        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar menue for smaller screen */}

      <div
        className={` fixed top-0 right-0 bottom-0 overflow-hidden bg-white  ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex  flex-col text-gray-600 ">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setvisible(fasle)}
            className="py-2 pl-6 border-b"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b "
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
