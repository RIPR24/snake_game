import { useEffect, useState } from "react";
import snake, { T } from "./snkcls.tsx";

type props = {
  dir: T;
  setHom: React.Dispatch<React.SetStateAction<string>>;
  cd: boolean;
};

const Snake = ({ dir, setHom, cd }: props) => {
  const [snk, setSnk] = useState(snake.render());
  const [food, setFood] = useState<T>({ x: 54, y: 48 });

  const getRandom = () => {
    var x = Math.floor(Math.random() * 44) * 2;
    var y = Math.floor(Math.random() * 22) * 4;
    if (snake.checkEl({ x, y })) {
      getRandom();
    } else {
      setFood({ x, y });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const prepos = snake.getFront();
      const newpos = {
        x: (prepos.x + dir.x + 90) % 90,
        y: (prepos.y + dir.y + 92) % 92,
      };
      if (snake.checkEl(newpos)) {
        snake.reset();
        setHom("GAME OVER");
      }
      snake.push(newpos, dir.y / 2);
      if (newpos.x === food.x && newpos.y === food.y) {
        getRandom();
      } else {
        snake.pop();
      }
      setSnk(snake.render());
      cd = true;
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [dir, food]);

  return (
    <>
      <div
        className="food"
        style={{ left: `${food.x}vw`, top: `${food.y}vh` }}
      ></div>
      <div>{snk}</div>
    </>
  );
};

export default Snake;
