import React from "react";
import "./pill.scss";

function Pill({ title, setActiveFilter, activeFilter }: any) {
  return (
    <div
      className={activeFilter === title ? "active pillWrapper" : "pillWrapper"}
      onClick={() => setActiveFilter(`${title}`)}
    >
      {title}
    </div>
  );
}

export default Pill;
