import { useState } from 'react';
import Modal from '../components/Modal';

function CreateTournament() {
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle your form submission logic here.
    // Possibly send tournament data to the backend.
    console.log({
      tournamentName,
      startDate,
      location,
    });
  };

  return (
    <Modal title="Create a New Tournament">
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tournament Name */}
          <div>
            <label htmlFor="tournamentName" className="block mb-2 font-medium text-gray-700">
              Tournament Name
            </label>
            <input
              type="text"
              id="tournamentName"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block mb-2 font-medium text-gray-700">
              Start Date and Time
            </label>
            <input
              type="datetime-local"
              id="startDate"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors"
            >
              Create Tournament
            </button>
          </div>
        </form>
    </Modal>
  );
}

export default CreateTournament;
