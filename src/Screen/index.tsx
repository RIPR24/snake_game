import { useEffect, useState } from "react";
import "./screen.css";
import Snake from "./Snake";
import { T } from "./snkcls";
import controls from "./controls";

type props = {
  setHom: React.Dispatch<React.SetStateAction<string>>;
  speed: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Screen = ({ setHom, speed, setScore }: props) => {
  const [dir, setDir] = useState<T>({ x: 2, y: 0 });
  const [cd, setCd] = useState(false);

  const update = (e: KeyboardEvent) => {
    setCd((pre) => {
      if (pre) {
        setDir((pre) => controls(e.code, pre));
        return false;
      }
      return pre;
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", update);

    return () => {
      document.removeEventListener("keydown", update);
    };
  }, [dir, cd]);

  return (
    <div className="screen">
      <Snake
        dir={dir}
        setHom={setHom}
        setCd={setCd}
        speed={speed}
        setScore={setScore}
      />
    </div>
  );
};

export default Screen;
