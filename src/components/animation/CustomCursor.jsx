import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function CustomCursor() {
  const coarse = useMediaQuery("(pointer: coarse)");
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (coarse) return undefined;
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = (event) => {
      if (event.target.closest("a, button")) setActive(true);
    };
    const leave = (event) => {
      if (event.target.closest("a, button")) setActive(false);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [coarse]);

  if (coarse) return null;
  return (
    <div
      className={`custom-cursor ${active ? "is-active" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}