import { getEnviroment } from "../helpers/getEnviroment";
import finalKombatImage from "../assets/finalKombat.png";
import { finalKombat } from "../constants/urlRedirects";

export const KombatCard = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in animation-delay-200 max-w-[446px] w-full min-w-[200px] min-h-[300px]">
      <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full">
        <img
          src={finalKombatImage}
          alt="Final Kombat"
          className="w-full h-full max-w-[446px] max-h-[653px] object-contain rounded-md transition-transform duration-300"
        />
      </div>
      <button
        className="mt-4 px-12 py-5 text-xl text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:cursor-pointer hover:scale-110 hover:shadow-lg transform w-full"
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
  );
};
