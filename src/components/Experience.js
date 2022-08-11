import React from "react";
import path from "../img/Path 318.png";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img src={path} alt="" className="w-[5rem]" />
      <div className="headline mt7 flex flex-col items-center text-[2rem]">
        <span>An amazing app can change you daily life </span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon='Group 2' title='For live music'/>
        <Feature icon='music icon' title='For daily music'/>
        <Feature icon='Group 4' title='For atists'/>
      </div>
    </div>
  );
}

export default Experience;
