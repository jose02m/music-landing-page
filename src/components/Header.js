import React from "react";
import musicLogo from "../img/MuzicLogo.png";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle ='border-[2px] rounded-[10px] px-[25px] py-[7px]';
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2rem] text-[0.8rem]">
      <img src={musicLogo} alt="" className="logo w-[42px] h-[42px]"/>
      <CenterMenu />
      <div className="buttons flex">
        <button className={` mr-[35px] ` + buttonStyle}>Sign Up</button>
        <button className={buttonStyle}>Log In</button>
      </div>
    </div>
  );
}

export default Header;
