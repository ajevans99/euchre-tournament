import React, { useState } from "react";
import Modal from "../components/Modal";

// Define the union type for tournament types
type TournamentType = "Progressive" | "Grand Prix" | "Double Elimination";

// Create a mapping for descriptions
const tournamentTypeDescriptions: { [key in TournamentType]: string } = {
  "Progressive": "Players rotate partners after each round, and individual scores are tracked. The player with the highest score at the end wins.",
  "Grand Prix": "Teams stay constant throughout the tournament, playing a set number of rounds. The team with the most game wins (and highest points for tiebreakers) is the winner.",
  "Double Elimination": "Teams are eliminated after two losses. Play continues in a bracket system until one team remains without two losses."
};

function TournamentSettings() {
  const [activeTournamentType, setActiveTournamentType] = useState<TournamentType>("Progressive");

  const handleTournamentTypeChange = (type: TournamentType) => {
    setActiveTournamentType(type);
  };

  return (
    <Modal title="Tournament Settings">
      <form className="flex flex-col items-center">
        {/* Segmented control */}
        <div className="inline-flex h-9 w-full items-baseline justify-center rounded-lg bg-gray-100 p-1 sm:w-auto">
          {(["Progressive", "Grand Prix", "Double Elimination"] as TournamentType[]).map((type) => (
            <button
              key={type}
              type="button"
              aria-disabled="false"
              className={`group inline-flex items-center justify-center whitespace-nowrap py-2 align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 min-w-[32px] gap-1.5 text-sm disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-7 w-full rounded-md px-3 drop-shadow sm:w-auto ${
                activeTournamentType === type
                  ? "bg-white text-slate-950"
                  : "bg-transparent text-slate-600"
              }`}
              onClick={() => handleTournamentTypeChange(type)}
            >
              <div>{type}</div>
            </button>
          ))}
        </div>

        {/* Display the description of the active tournament type */}
        <div className="mt-4">
          {tournamentTypeDescriptions[activeTournamentType]}
        </div>

        {/* Save Button */}
        <div className="mt-6 w-full">
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default TournamentSettings;
