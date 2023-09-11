import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className=" bg-black fixed top-0 p-5 h-7 w-full z-10 transition-all duration-500 ease-in ">
      <div className=" flex justify-between  ">
        <img
          className="left-0  w-20 object-contain pl-5 cursor-pointer "
          src="/pngwing.com.png"
          alt="netflix"
        />
        <img
          className="right-5 w-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
