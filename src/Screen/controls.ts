import { T } from "./snkcls";

const controls = (key: string, dir: T) => {
  if (dir.y === 0) {
    if (key === "ArrowUp") {
      return { x: 0, y: -2 };
    } else if (key === "ArrowDown") {
      return { x: 0, y: 2 };
    }
  } else {
    if (key === "ArrowLeft") {
      return { x: -2, y: 0 };
    } else if (key === "ArrowRight") {
      return { x: 2, y: 0 };
    }
  }
};

export default controls;
