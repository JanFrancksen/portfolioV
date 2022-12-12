import { useState } from "react";
import "./stackCard.scss";
import { motion } from "framer-motion";

type Test = {
  title: string;
  content: string;
  image: string;
};

function StackCard({ image, title, content }: Test) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setOpen(!open);
      }}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="cardWrapper"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img className="cardImage" src={image} alt={title} />
      <motion.h1 layout="position">{title}</motion.h1>
      {open && <motion.p>{content}</motion.p>}
    </motion.div>
  );
}

export default StackCard;
