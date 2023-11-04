import { FC, useEffect, useState } from "react";

const useDimension = (): { width: number; height: number } => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);
  return dimension;
};

export default useDimension;
