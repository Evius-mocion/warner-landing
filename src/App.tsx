import bgImage from "./assets/bg.svg";
import { WarnerCard } from "./components/WarnerCard";
import { KombatCard } from "./components/KombatCard";

function App() {
  return (
    <div
      className="min-h-screen w-screen flex items-stretch justify-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px 0 20px 0",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center w-full px-20 md:justify-center">
        {/* Warner Play Card */}
        <WarnerCard />

        {/* Final Kombat Card */}
        <KombatCard />
      </div>
    </div>
  );
}

export default App;
