import { useState, useEffect } from "react";
import PlayerList from "../components/PlayerList";
import TournamentHeader from "../components/TournamentHeader";

function Lobby() {
  const [tournamentCode, setTournamentCode] = useState("");
  const [players, setPlayers] = useState<string[]>([]);

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
        <div className="w-full max-w-4xl p-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Lobby</h2>
          </div>

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
