import { useEffect, useState } from "react";
import stackInfo from "../data/stackInfo";
import StackCard from "./stackCard";
import Pill from "./Pill";
import Filter from "./Filter";
import "./stackContainer.scss";
import { motion, AnimatePresence } from "framer-motion";

function StackContainer({ id, title, inputData }) {
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setFiltered(stackInfo);
  }, []);

  return (
    <div className="stackContainer" id={id}>
      <h2
        class="containerTitle"
        onClick={() => navigator.clipboard.writeText(title)}
      >
        {title}
      </h2>

      <div className="stackPillsContainer">
        <Filter
          setFiltered={setFiltered}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <motion.div layout className="stackItemsContainer">
        <AnimatePresence>
          {filtered.map((stack) => {
            return (
              <StackCard
                key={stack.id}
                image={stack.image}
                title={stack.name}
                content={stack.content}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default StackContainer;
