import { useEffect } from "react";
import Pill from "./Pill";
import stackInfo from "../data/stackInfo";

function Filter({ filtered, setActiveFilter, activeFilter, setFiltered }: any) {
  useEffect(() => {
    if (activeFilter === 0) {
      setFiltered(stackInfo);
      return;
    }
    const filtered = stackInfo.filter((stack) =>
      stack.category.includes(activeFilter)
    );
    setFiltered(filtered);
  }, [activeFilter]);

  return (
    <>
      <Pill
        title="Alle"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Pill
        title="Frameworks"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Pill
        title="Languages"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Pill
        title="Database"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Pill
        title="UI/UX"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Pill
        title="Utilities & Tools"
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </>
  );
}

export default Filter;
