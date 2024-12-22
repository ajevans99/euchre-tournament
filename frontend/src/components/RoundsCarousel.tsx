// src/components/RoundsCarousel.tsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EuchreMatchup from "./EuchreMatchup";
import { Matchup } from "../models";

interface RoundsCarouselProps {
  rounds: Matchup[][];
}

const RoundsCarousel: React.FC<RoundsCarouselProps> = ({ rounds }) => {
  const [currentRound, setCurrentRound] = useState(0);

  const goToNextRound = () => {
    if (currentRound < rounds.length - 1) {
      setCurrentRound(currentRound + 1);
    }
  };

  const goToPreviousRound = () => {
    if (currentRound > 0) {
      setCurrentRound(currentRound - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-700">Round {currentRound + 1}</h3>
        <div className="flex space-x-2">
          <button
            onClick={goToPreviousRound}
            disabled={currentRound === 0}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNextRound}
            disabled={currentRound === rounds.length - 1}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rounds[currentRound].map((matchup, index) => (
          <EuchreMatchup key={index} matchup={matchup} />
        ))}
      </div>
    </div>
  );
};

export default RoundsCarousel;