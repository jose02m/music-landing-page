import { React, useState } from "react";
import CenterMenu from "./CenterMenu";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  const socialStyle = "rounded-full border-2 p-2 text-xl";
  const iconStyle = "hover:cursor-pointer";
  const [elemetIsVisible, setIsvisible] = useState(false);
  const variant = {
    true: {
      transform: "scale(1.5)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  return (
    <div
      className="footer bg-[#081730] flex flex-col items-center justify-start px-[5rem] relative z-[-1]
    h-[45rem] pt-[18rem] mt-[-10rem]"
    >
      <VisibilitySensor onChange={(isVisible) => setIsvisible(isVisible)}>
        <CenterMenu />
      </VisibilitySensor>

      <div className="flex w-[50%] justify-center justify-around mt-14">
        <motion.div
          variants={variant}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className={socialStyle}
        >
          <FaFacebook className={iconStyle} />{" "}
        </motion.div>{" "}
        <motion.div
          variants={variant}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className={socialStyle}
        >
          <FaTwitter className={iconStyle} />{" "}
        </motion.div>{" "}
        <motion.div
          variants={variant}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className={socialStyle}
        >
          <FaLinkedinIn className={iconStyle} />{" "}
        </motion.div>{" "}
        <motion.div
          variants={variant}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className={socialStyle}
        >
          <FaYoutube className={iconStyle} />{" "}
        </motion.div>
      </div>
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;
