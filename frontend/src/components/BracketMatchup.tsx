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
  const svgRef = useRef<SVGSVGElement>(null);
  const teamARef = useRef<HTMLDivElement>(null);
  const teamBRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({
    teamAMidpointY: 0,
    teamBMidpointY: 0,
    teamsMidpointY: 0,
    centerX: 0,
    totalHeight: 0,
  });

  useEffect(() => {
    if (!svgRef.current || !teamARef.current || !teamBRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const teamARect = teamARef.current.getBoundingClientRect();
    const teamBRect = teamBRef.current.getBoundingClientRect();

    const teamAMidpointY = teamARect.height / 2;
    const teamBMidpointY = teamARect.height + teamBRect.height / 2;
  
    const teamsMidpointY = (teamAMidpointY + teamBMidpointY) / 2;
    const centerX = svgRect.width / 2;
    const totalHeight = teamARect.height + teamBRect.height + teamARect.bottom - teamBRect.top;

    setCoords({ teamAMidpointY, teamBMidpointY, teamsMidpointY, centerX, totalHeight });
  }, [team1, team2, lineWidth]);

  return (
    <div className="flex">
      <div
        
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
        ref={svgRef}
        width={2 * lineWidth}
        height={coords.totalHeight}
        className="border border-gray-300"
      >
        {/* Vertical Line */}
        <line
          x1={coords.centerX}
          y1={coords.teamAMidpointY}
          x2={coords.centerX}
          y2={coords.teamBMidpointY}
          stroke="black"
          strokeWidth={2}
        />
        
        {/* Horizontal Line to Team A*/}
        <line
          x1={0}
          y1={coords.teamAMidpointY}
          x2={coords.centerX + 1}
          y2={coords.teamAMidpointY}
          stroke="black"
          strokeWidth={2}
        />

        {/* Horizontal Line to Team B */}
        <line
          x1={0}
          y1={coords.teamBMidpointY}
          x2={coords.centerX + 1}
          y2={coords.teamBMidpointY}
          stroke="black"
          strokeWidth={2}
        />

        {/* Horizontal Line to Winner */}
        <line
          x1={coords.centerX}
          y1={coords.teamsMidpointY}
          x2={lineWidth * 2}
          y2={coords.teamsMidpointY}
          stroke="black"
          strokeWidth={2}
        />
      </svg>

      <div
        style={{
          // Push the winner container to the right by lineWidth * 2
          
          // Push it down by the midpoint in container coordinates
          marginTop: coords.teamsMidpointY / 2,
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
