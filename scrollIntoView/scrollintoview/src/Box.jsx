import React, { useEffect, useRef, useState } from "react";

const Box = ({ i, color }) => {
  const boxRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isAboveViewport, setIsAboveViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the box is fully visible
        setIsInView(entry.isIntersecting);
        // Check if the box is above the viewport
        setIsAboveViewport(entry.boundingClientRect.top < 0);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1, // 1.0 means fully visible
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    // Scroll the box into view only if it's not fully visible and adjust based on position
    if (!isInView) {
      boxRef.current.scrollIntoView({
        behavior: "smooth",
        block: isAboveViewport ? "start" : "end",
      });
    }
  };

  return (
    <div
      ref={boxRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "28vh",
        width: "30vw",
        background: `${color}`,
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
      onClick={handleClick}
    >
      <h1 style={{ color: "white", fontSize: "1.5rem" }}>{`Box  ${i}`}</h1>
    </div>
  );
};

export default Box;
