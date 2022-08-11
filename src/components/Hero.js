import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [elemetIsVisible, setIsvisible] = useState(false);
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setIsvisible(isVisible)}
      minTopValue={300}
    >
      <div
        className="wrapper bg-[#870eeb] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%]
        h-[33rem] relative z-[3]"
      >
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Experience the</span>
          <span>
            <b>best queality music</b>
          </span>
          <span className="text-[15px]">
            nulla dolores facilis aperiam id sint perferendis inventore
            <br />
            neque iure ducimus in exercitationem illo eius!
          </span>
          <div>
            <span className="text-[13px]">Download now on IOS and Andorid</span>
            <DownloadAds />
          </div>
        </div>
        <div className="images relative w-[50%]">
          <img
            src={require("../img/p 1.png")}
            alt=""
            className="absolute top-[-15rem] left-[13rem] h-[34rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elemetIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elemetIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elemetIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
