import { getEnviroment } from "../helpers/getEnviroment";
import warnerPlayImage from "../assets/warnerPlay.png";
import { landingEvius } from "../constants/urlRedirects";
import { Button } from "./ui/Button";

export const WarnerCard = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in max-w-[446px] w-full min-w-[200px] min-h-[300px]">
      <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full">
        <img
          src={warnerPlayImage}
          alt="Warner Play"
          className="w-full h-full max-w-[446px] max-h-[653px] object-contain rounded-md transition-transform duration-300"
        />
      </div>
      <div className="w-[90%]">
        <Button
          style={{ backgroundColor: "#00329A" }}
          onClick={() =>
            window.open(getEnviroment().VITE_EVIUS ?? landingEvius, "_blank")
          }
        >
          Inscríbete
        </Button>
      </div>
    </div>
  );
};
