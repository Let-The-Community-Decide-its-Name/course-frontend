import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import { ContentType } from "../Shared/types";
import { motion } from "framer-motion";
import ContentCard from "./ContentCard";

const AboutContent: Array<ContentType> = [
  {
    num: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint.",
    img: first,
  },
  {
    num: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint.",
    img: second,
  },
  {
    num: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est reprehenderit eaque officia expedita exercitationem optio ipsa iure ad esse ex eum ea quibusdam tenetur explicabo atque quos suscipit sint.",
    img: third,
  },
];

const Content = () => {
  return (
    // <motion.div
    // animate={{ scale: [0, 1, 0.5, 1] }}
    // transition={{ times: [0, 0.1, 0.9, 1] }}
    // >

    <section className="h-full px-10 md:px-24">
      <h1 className="text-center text-white text-4xl mb-10">MOTIVATION</h1>
      <div>
        {AboutContent.map((item, index) => (
          <ContentCard
            key={`${index}-${item.img}`}
            num={item.num}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
    </section>

    // </motion.div>
  );
};

export default Content;
