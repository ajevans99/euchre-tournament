import React from 'react';

type PlayerItemProps = {
  name: string;
};

const PlayerItem: React.FC<PlayerItemProps> = ({ name }) => {
  return (
    <li className="text-gray-800 border-b border-gray-200 pb-1">
      {name}
    </li>
  );
};

type PlayerListProps = {
  players: string[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  if (players.length === 0) {
    return <p className="text-gray-500 text-sm">No players yet. Share your game code with friends.</p>;
  }

  return (
    <ul className="space-y-1">
      {players.map((player, index) => (
        <PlayerItem key={index} name={player} />
      ))}
    </ul>
  );
};

export default PlayerList;
