import { Link } from 'react-router-dom';
import playingCardsImage from '../assets/playing-cards.webp';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
      Welcome to the Euchre Tournament App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
      Organize and manage your Euchre tournaments easily!
      </p>
      <img
        src={playingCardsImage}
        alt="Playing cards AI generated image"
        className="max-w-sm max-h-96 object-contain pb-4"
      />
      <Link
        to="/create-tournament"
        className="w-full max-w-xs px-6 py-3 mb-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition text-center"
      >
        Create a New Tournament
      </Link>
      <Link
        to="/join-tournament"
        className="w-full max-w-xs px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition text-center"
      >
        Join a Tournament
      </Link>
    </div>
  );
}

export default HomePage;
