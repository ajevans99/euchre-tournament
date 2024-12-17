import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

interface TournamentHeaderProps {
  id: string;
  name: string;
  location: string;
  dateTime: string;
  shouldShowSettings?: boolean;
}

const TournamentHeader: React.FC<TournamentHeaderProps> = ({ id, name, location, dateTime, shouldShowSettings }) => {
  return (
    <header className="w-full bg-purple-700 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm">{location}</p>
        <p className='text-xs'>{dateTime}</p>
      </div>
      {shouldShowSettings && (
        <Link to={`/tournament/${id}/settings`} className="mt-2 md:mt-0 text-sm md:text-base text-purple-200 hover:text-white">
          <FaCog />
        </Link>
      )}
    </header>
  );
};

export default TournamentHeader;
