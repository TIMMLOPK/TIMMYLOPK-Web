import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const ProjectCard = ({ title, children, link }) => {
  const [showContent, setshowContent] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-lg shadow-lg dark:bg-wbg dark:text-white m-6 w-[300px] relative"
      transition={{
        layout: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 },
      }}
    >
      <motion.img
        src="https://www.lionceu.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard.a42bd74b.png&w=256&q=75"
        className="w-full object-cover rounded-lg"
        onClick={() => setshowContent(!showContent)}
      />
      <motion.div
        className="text-md font-medium text-gray-900 dark:text-white flex p-4"
        layout="position"
      >
        <span className="flex items-center">{title}</span>
        <a className="flex items-center ml-2 text-blue-400" href={link}>
          <ExternalLinkIcon />
        </a>
      </motion.div>
      {showContent && (
        <motion.div
          className="p-3 text-slate-500 dark:text-gray-400 text-sm"
          layout="position"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
