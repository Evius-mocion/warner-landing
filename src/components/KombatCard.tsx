import { getEnviroment } from "../helpers/getEnviroment";
import finalKombatImage from "../assets/finalKombat.png";
import { finalKombat } from "../constants/urlRedirects";
import { Button } from "./ui/Button";

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
      <div className="w-[90%]">
        <Button
          style={{ backgroundColor: "#00329A" }}
          onClick={() =>
            window.open(
              getEnviroment().VITE_FINAL_KOMBAT ?? finalKombat,
              "_blank"
            )
          }
        >
          Inscríbete
        </Button>
      </div>
    </div>
  );
};
