import { useEffect, useState } from "react";

type props = {
  heading: string;
  setHom: React.Dispatch<React.SetStateAction<string>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  speed: number;
};

const Home = ({ heading, setHom, setSpeed, score, speed }: props) => {
  const [hs, setHs] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeed(Number(e.target.value));
  };

  useEffect(() => {
    const val = Math.max(Number(window.localStorage.getItem("hs")) || 0, score);
    setHs(val);
    window.localStorage.setItem("hs", val.toString());
  }, [score]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <h1>{heading}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2>SCORE :</h2>
        <h2>{score}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2>HIGH SCORE :</h2>
        <h2>{hs}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>SET LEVEL</h3>
        <select
          name="speed"
          id="speed"
          value={speed}
          className="speed"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <button
        onClick={() => {
          setHom("");
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default Home;
