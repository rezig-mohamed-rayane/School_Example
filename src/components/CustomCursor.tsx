import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 });
  
  const followerX = useSpring(0, { damping: 25, stiffness: 150 });
  const followerY = useSpring(0, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      followerX.set(e.clientX - 20);
      followerY.set(e.clientY - 20);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    
    const interactiveElements = document.querySelectorAll("button, a, input, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [cursorX, cursorY, followerX, followerY]);

  return (
    <div className={`hidden md:block ${isHovered ? "cursor-hover" : ""}`}>
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="cursor-follower"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(201, 168, 76, 0.2)" : "transparent",
        }}
        style={{
          x: followerX,
          y: followerY,
        }}
      />
    </div>
  );
}
