import React from "react";
import { FaTrophy } from "react-icons/fa";
import { Team, Matchup } from "../models";

interface EuchreMatchupProps {
  matchup: Matchup;
}

const TeamDisplay: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="font-medium text-gray-700 text-lg">{team.players[0]}</div>
      <div className="font-medium text-gray-700 text-lg">{team.players[1]}</div>
      {team.isWinner && (
        <div className="text-yellow-500">
          <FaTrophy size={24} />
        </div>
      )}
    </div>
  );
};

const EuchreMatchup: React.FC<EuchreMatchupProps> = ({ matchup }) => {
  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center border border-gray-300 w-full max-w-md sm:max-w-lg">
        {/* Table Number */}
        <div className="text-sm font-medium text-gray-500 mt-0">
          Table {matchup.tableNumber}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-4 sm:space-y-0 sm:space-x-12">
          {/* Team 1 Section */}
          <TeamDisplay team={matchup.team1} />

          {/* VS Divider */}
          <div className="text-3xl font-extrabold text-purple-400">VS</div>

          {/* Team 2 Section */}
          <TeamDisplay team={matchup.team2} />
        </div>
      </div>
    </div>
  );
};

export default EuchreMatchup;
