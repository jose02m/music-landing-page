import { React, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Feature({ icon, title }) {
  const [elemetIsVisible, setIsvisible] = useState(false);
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setIsvisible(isVisible)}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        <motion.div
          variants={variant}
          animate={`${elemetIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>
        <span className="mt-5">{title}</span>
        <span className="mt-4 text-[#707070]">
          Dolor nulla dolores facilis aperiam id sint perferendis inventore
          provident nisi vel ex
        </span>
        <span className="mt-[3rem] text-[#E600FF] underline hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
