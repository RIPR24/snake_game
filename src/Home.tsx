type props = {
  heading: string;
  setHom: React.Dispatch<React.SetStateAction<string>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  score: number;
};

const Home = ({ heading, setHom, setSpeed, score }: props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <h1>{heading}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2>SCORE :</h2>
        <h2>{score}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>SET LEVEL</h3>
        <select
          name="speed"
          id="speed"
          className="speed"
          onChange={(e) => setSpeed(Number(e.target.value))}
        >
          <option value="80">1</option>
          <option value="60">2</option>
          <option value="40">3</option>
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
