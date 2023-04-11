import React from "react";
import { motion } from "framer-motion";

type Props = {
  num: number;
  text: string;
  img: string;
};

const ContentCard = ({ num, text, img }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-14 mt-5">
      {num % 2 !== 0 && (
        <>
          <div className="text-white w-full">{text}</div>
          <div className="w-full">
            <img src={img} alt={img} className="w-[60%]" />
          </div>
        </>
      )}
      {num % 2 === 0 && (
        <>
          <div className="w-full">
            <img src={img} alt={img} className="w-[60%]" />
          </div>

          <motion.div
            animate={{ scale: [0, 1, 0.5, 1] }}
            transition={{ times: [0, 0.1, 0.9, 1] }}
          >
            <div className="text-white w-full">{text}</div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ContentCard;
