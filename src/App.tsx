import { useState } from "react";
import Screen from "./Screen";
import Home from "./Home";

function App() {
  const [hom, sethom] = useState("Welcome");
  return (
    <div className="app">
      {hom ? (
        <Home heading={hom} setHom={sethom} />
      ) : (
        <Screen setHom={sethom} />
      )}
    </div>
  );
}

export default App;
