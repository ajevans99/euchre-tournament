import { useState, useEffect } from "react";
import PlayerList from "../components/PlayerList";
import TournamentHeader from "../components/TournamentHeader";
import RoundsCarousel from "../components/RoundsCarousel";
import { Matchup } from "../models";

const rounds: Matchup[][] = [
  [
    { team1: { players: ["Alice", "Bob"] }, team2: { players: ["Carol", "Dave"] }, tableNumber: 1 },
    { team1: { players: ["Eve", "Frank"] }, team2: { players: ["Grace", "Hank"] }, tableNumber: 2 },
    { team1: { players: ["Ivy", "Jack"] }, team2: { players: ["Kate", "Liam"] }, tableNumber: 3 },
  ],
  [
    { team1: { players: ["Alice", "Frank"] }, team2: { players: ["Carol", "Grace"] }, tableNumber: 1 },
    { team1: { players: ["Bob", "Eve"] }, team2: { players: ["Dave", "Hank"] }, tableNumber: 2 },
  ],
  [
    { team1: { players: ["Alice", "Hank"] }, team2: { players: ["Bob", "Grace"] }, tableNumber: 1 },
    { team1: { players: ["Eve", "Dave"] }, team2: { players: ["Frank", "Carol"] }, tableNumber: 2 },
  ],
];

const mockPlayers = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank", "Grace", "Hank"];

function Lobby() {
  const [tournamentCode, setTournamentCode] = useState("");
  const [players, setPlayers] = useState<string[]>(mockPlayers);

  // Example tournament details
  const tournamentName = "Euchre Championship";
  const tournamentLocation = "Community Center, Room A";
  const tournamentDateTime = "Jan 15, 2025 - 6:00 PM";

  useEffect(() => {
    // Generate a 5-letter tournament code (in a real app, you'd get this from the backend)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setTournamentCode(code);
  }, []);

  const handleAddPlayer = () => {
    const playerName = prompt("Enter your name:");
    if (playerName && playerName.trim()) {
      setPlayers((prevPlayers) => [...prevPlayers, playerName.trim()]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <TournamentHeader
        name={tournamentName}
        location={tournamentLocation}
        dateTime={tournamentDateTime}
        shouldShowSettings={true}
        id="1"
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center p-4">
        <div className="w-full max-w-4x space-y-8">
          {/* Tournament Code */}
          <div className="text-center">
            <p className="text-sm text-gray-600">Tournament Code</p>
            <p className="text-xl font-bold text-purple-700 tracking-widest mt-1">
              {tournamentCode}
            </p>
          </div>

          {/* Players */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Players</h3>
            <PlayerList players={players} />
          </div>

         {/* Rounds Carousel */}
         <RoundsCarousel rounds={rounds} />


          {/* Add Player Button */}
          <div>
            <button
              onClick={handleAddPlayer}
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors"
            >
              Add Another Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
