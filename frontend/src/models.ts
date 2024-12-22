export interface Team {
  players: [string, string];
  isWinner?: boolean;
}

export interface Matchup {
  tableNumber: number;
  team1: Team;
  team2: Team;
}
