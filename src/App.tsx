import bgImage from "./assets/bg.svg";

function App() {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      Hello World
    </div>
  );
}

export default App;
