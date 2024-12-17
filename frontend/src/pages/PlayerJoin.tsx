import React, { useState } from "react";
import Modal from "../components/Modal";

function PlayerJoin() {
  const [tournamentCode, setTournamentCode] = useState('');

  const handleTournamentCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5);
    setTournamentCode(value);
  };

  return (
    <Modal title="Join a Tournament">
      <form>
        {/* Tournament Code */}
        <div>
          <label htmlFor="tournamentCode" className="block mb-2 font-medium text-gray-700">
            Tournament Code
          </label>
          <input
            type="text"
            id="tournamentCode"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={tournamentCode}
            onChange={handleTournamentCodeChange}
            required
          />
        </div>

        {/* Name */}
        <div className="mt-4">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mt-4">
          <label htmlFor="phoneNumber" className="block mb-2 font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Join Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors"
          >
            Join Tournament
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default PlayerJoin;
