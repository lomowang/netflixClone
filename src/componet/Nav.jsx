import Image from "next/image";
import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  // 針對輪滾滑動設定一個事件
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    // 針對視窗監控           滾輪事件  觸發函數
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      //  如果show為true 就添加bg-black 如果是false 就不添加 背景顏色保持默認
      className={` ${
        show ? "bg-black" : ""
      } fixed top-0 p-10 h-7 w-full z-10 transition-all duration-500 ease-in`}
    >
      <div className=" flex justify-between  ">
        <img
          className="left-0  top-5 w-20 object-contain pl-5 cursor-pointer "
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
