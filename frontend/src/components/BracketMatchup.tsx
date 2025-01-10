import React, { useRef, useState, useEffect } from "react";

type BracketMatchupProps = {
  team1: string;
  team2: string;
  winner: BracketMatchupProps | null;
  lineWidth?: number;
};

const Team: React.FC<{ name: string }> = ({ name }) => (
  <div className="px-2 py-1 rounded flex items-center border border-gray-300">
    <p className="text-sm">{name}</p>
  </div>
);

const BracketMatchup: React.FC<BracketMatchupProps> = ({
  team1,
  team2,
  winner,
  lineWidth = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const teamARef = useRef<HTMLDivElement>(null);
  const teamBRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const midpointY = (coords.y1 + coords.y2) / 2;

  useEffect(() => {
    if (!containerRef.current || !teamARef.current || !teamBRef.current) return;

    // Get bounding boxes in the container’s coordinate space
    const containerRect = containerRef.current.getBoundingClientRect();
    const teamARect = teamARef.current.getBoundingClientRect();
    const teamBRect = teamBRef.current.getBoundingClientRect();

    // Calculate centers relative to the container
    const x1 = teamARect.left - containerRect.left + teamARect.width / 2;
    const y1 = teamARect.top - containerRect.top + teamARect.height / 2;

    const x2 = teamBRect.left - containerRect.left + teamBRect.width / 2;
    const y2 = teamBRect.top - containerRect.top + teamBRect.height / 2;

    setCoords({ x1, y1, x2, y2 });
  }, [team1, team2]);

  return (
    <div className="flex">
      <div
        ref={containerRef}
        className="flex flex-col"
      >
        {/* Team A */}
        <div
          ref={teamARef}
          className=""
        >
          <Team name={team1} />
        </div>

        {/* Team B */}
        <div
          ref={teamBRef}
          className=""
        >
          <Team name={team2} />
        </div>
      </div>
      
      {/* SVG line connecting the two team boxes */}
      <svg 
        width={2 * lineWidth}
        height={3 * lineWidth}
        className="border border-gray-300"
      >
        {/* Vertical Line */}
        <line
          x1={coords.x1}
          y1={coords.y1}
          x2={coords.x2}
          y2={coords.y2}
          stroke="black"
          strokeWidth={2}
        />
        
        {/* Horizontal Line to Team A*/}
        <line
          x1={coords.x1 + 1}
          y1={coords.y1}
          x2={coords.x1 - lineWidth}
          y2={coords.y1}
          stroke="black"
          strokeWidth={2}
        />

        {/* Horizontal Line to Team B */}
        <line
          x1={coords.x2 + 1}
          y1={coords.y2}
          x2={coords.x2 - lineWidth}
          y2={coords.y2}
          stroke="black"
          strokeWidth={2}
        />

        {/* Horizontal Line to Winner */}
        <line
          x1={coords.x1}
          y1={(coords.y1 + coords.y2) / 2}
          x2={coords.x2 + lineWidth}
          y2={(coords.y1 + coords.y2) / 2}
          stroke="black"
          strokeWidth={2}
        />
      </svg>

      <div
        style={{
          // Push the winner container to the right by lineWidth * 2
          
          // Push it down by the midpoint in container coordinates
          marginTop: midpointY - (teamARef.current?.getBoundingClientRect().height ?? 0) / 2,
        }}
      >
        {winner && 
          <BracketMatchup {...winner} lineWidth={lineWidth} />
        }
      </div>
    </div>
  );
};

export default BracketMatchup;
