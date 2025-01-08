import { useEffect, useState } from "react";
import "./screen.css";
import Snake from "./Snake";
import { T } from "./snkcls";
import controls from "./controls";

const Screen = () => {
  const [dir, setDir] = useState<T>({ x: 2, y: 0 });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const res = controls(e.code, dir);
      if (res) setDir(res);
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        const res = controls(e.code, dir);
        if (res) setDir(res);
      });
    };
  }, [dir]);

  return (
    <div className="screen">
      <Snake dir={dir} />
    </div>
  );
};

export default Screen;
