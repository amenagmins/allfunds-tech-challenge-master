import "./scrollArrow.css";
import React, { useEffect, useState } from "react";

export const ScrollArrow = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleArrowClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY > 100 ? (
    <button onClick={handleArrowClick} className="scroll-arrow">
      &#8593;
    </button>
  ) : null;
};
