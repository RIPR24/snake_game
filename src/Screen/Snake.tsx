import { useEffect, useState } from "react";
import snake, { T } from "./snkcls.tsx";

type props = {
  dir: T;
};

const Snake = ({ dir }: props) => {
  const [snk, setSnk] = useState(snake.render());

  useEffect(() => {
    const interval = setInterval(() => {
      const prepos = snake.getFront();
      const newpos = {
        x: (prepos.x + dir.x + 90) % 90,
        y: (prepos.y + dir.y + 90) % 90,
      };
      snake.push(newpos);
      snake.pop();
      setSnk(snake.render());
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [dir]);

  return <div>{snk}</div>;
};

export default Snake;
