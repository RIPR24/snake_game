import { useEffect, useState } from "react";
import "./screen.css";
import Snake from "./Snake";
import { T } from "./snkcls";
import controls from "./controls";

const Screen = ({
  setHom,
}: {
  setHom: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [dir, setDir] = useState<T>({ x: 2, y: 0 });
  let cd = false;

  const update = (e: KeyboardEvent) => {
    if (cd) {
      setDir((pre) => controls(e.code, pre));
      cd = false;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", update);

    return () => {
      document.removeEventListener("keydown", update);
    };
  }, [dir, cd]);

  return (
    <div className="screen">
      <Snake dir={dir} setHom={setHom} cd={cd} />
    </div>
  );
};

export default Screen;
