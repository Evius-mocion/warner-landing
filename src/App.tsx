import bgImage from "./assets/bg.svg";
import warnerPlayImage from "./assets/warnerPlay.png";
import finalKombatImage from "./assets/finalKombat.png";
import { finalKombat, landingEvius } from "./constants/urlRedirects";
import { getEnviroment } from "./helpers/getEnviroment";

function App() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex gap-8 items-center">
        {/* Warner Play Card */}
        <div className="flex flex-col items-center animate-fade-in">
          <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={warnerPlayImage}
              alt="Warner Play"
              className="w-full h-full max-w-[446px] max-h-[653px] object-contain rounded-md transition-transform duration-300"
            />
          </div>
          <button
            className="mt-4 px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:cursor-pointer hover:scale-110 hover:shadow-lg transform"
            style={{ backgroundColor: "#00329A" }}
            onClick={() =>
              window.open(getEnviroment().VITE_EVIUS ?? landingEvius, "_blank")
            }
          >
            Inscríbete
          </button>
        </div>

        {/* Final Kombat Card */}
        <div className="flex flex-col items-center animate-fade-in animation-delay-200">
          <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={finalKombatImage}
              alt="Final Kombat"
              className="w-full h-full max-w-[446px] max-h-[653px] object-contain rounded-md transition-transform duration-300"
            />
          </div>
          <button
            className="mt-4 px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:cursor-pointer hover:scale-110 hover:shadow-lg transform"
            style={{ backgroundColor: "#00329A" }}
            onClick={() =>
              window.open(
                getEnviroment().VITE_FINAL_KOMBAT ?? finalKombat,
                "_blank"
              )
            }
          >
            Inscríbete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
