import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Search() {
  const [elemetIsVisible, setIsvisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const rd = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const mscPlayer = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />{" "}
        <img
          src={require("../img/d1.png")}
          alt=""
          className="absolute top-[26rem] w-[16rem]"
        />{" "}
        <img
          src={require("../img/d2.png")}
          alt=""
          className="absolute w-[9rem] top-[32.7rem] left-[7rem]"
        />{" "}
        <motion.img
          variants={rd}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1.2, type: "ease-out" }}
          src={require("../img/d3.png")}
          alt=""
          className="absolute w-[9rem] top-[33rem] left-[17rem]"
        />{" "}
        <motion.img
          variants={mscPlayer}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../img/d4.png")}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
        />
      </div>
      <div className="right flex flex-col items-start justify-start flex-1 h-[100%] pt-[9rem]">
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword o the URL"
            className="flex-[19] outline-none rounded-xl bg-[#020917] p-3 h-[3rem]"
          />
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className=" w-[1.5rem]"
            />
          </div>
        </div>

        <div className="tilted flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className=" w-[5rem]"
          />
        </div>

        <div className="detail mt-5 flex flex-col text-4xl">
          <span>Search Music By</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit neque
            iure ducimus
            <br /> in exercitationem illo eius!
          </span>
        </div>
        <VisibilitySensor onChange={(isVisible) => setIsvisible(isVisible)}>
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
