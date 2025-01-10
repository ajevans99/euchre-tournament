import React, { useRef, useState, useEffect } from "react";

type BracketMatchupProps = {
  team1: React.ReactNode;
  team2: React.ReactNode;
  winner?: React.ReactNode;
  lineWidth?: number;
};

export const Team: React.FC<{ name: string }> = ({ name }) => (
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
  const winnerRef = useRef<HTMLDivElement>(null);

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

    const teamABSpace = teamBRect.top - teamARect.bottom;

    const teamAMidpointY = teamARect.height / 2;
    const teamBMidpointY = teamARect.height + teamBRect.height / 2 + teamABSpace;
  
    const teamsMidpointY = (teamAMidpointY + teamBMidpointY) / 2;
    const centerX = svgRect.width / 2;
    const totalHeight = teamARect.height + teamBRect.height + teamABSpace;

    setCoords({ teamAMidpointY, teamBMidpointY, teamsMidpointY, centerX, totalHeight });
  }, [team1, team2, lineWidth]);

  return (
    <div className="flex justify-end ">
      {/* Team Boxes */}
      <div className="flex flex-col">
        {/* Team A */}
        <div ref={teamARef} className="">
          {team1}
        </div>

        {/* Spacing div */}
        <div className="h-8"></div>

        {/* Team B */}
        <div ref={teamBRef} className="">
          {team2}
        </div>
      </div>
      
      {/* SVG line connecting the two team boxes */}
      <svg
        ref={svgRef}
        width={2 * lineWidth}
        height={coords.totalHeight}
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
          // Push it down by the midpoint in container coordinates
          marginTop: coords.teamsMidpointY - (winnerRef.current?.getBoundingClientRect().height ?? 0) / 2,
        }}
      >
        <div ref={winnerRef}>
          {winner}
        </div>
      </div>
    </div>
  );
};

export default BracketMatchup;
