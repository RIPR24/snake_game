import { useState } from "react";
import Screen from "./Screen";
import Home from "./Home";

function App() {
  const [hom, sethom] = useState("Welcome");
  const [speed, setSpeed] = useState<number>(80);
  const [score, setScore] = useState<number>(0);
  return (
    <div className="app">
      {hom ? (
        <Home heading={hom} setHom={sethom} setSpeed={setSpeed} score={score} />
      ) : (
        <Screen setHom={sethom} speed={speed} setScore={setScore} />
      )}
    </div>
  );
}

export default App;
