type props = {
  heading: string;
  setHom: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ heading, setHom }: props) => {
  return (
    <div>
      <h1>{heading}</h1>
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
