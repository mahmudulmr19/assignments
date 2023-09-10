import React from "react";
import UserImage from "../../assets/UserImage.png";
const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h2 className="text-[#111111] font-bold text-2xl md:text-3xl cursor-pointer select-none">
          Knowledge Cafe
        </h2>

        <figure className="select-none">
          <img
            src={UserImage}
            className="h-12 cursor-pointer"
            alt="userImage"
          />
        </figure>
      </div>
      <div className="border border-[#11111126] mt-4" />
    </header>
  );
};

export default Header;
