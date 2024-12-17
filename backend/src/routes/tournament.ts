import { Router } from 'express';
import redis from '../redis';

const router = Router();

// Example: Add a player to a tournament
router.post('/add-player', async (req, res) => {
  const { tournamentId, playerName } = req.body;
  try {
    await redis.sadd(`tournament:${tournamentId}:players`, playerName);
    res.status(200).json({ message: `Player ${playerName} added.` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add player' });
  }
});

// Example: Get all players in a tournament
router.get('/:tournamentId/players', async (req, res) => {
  const { tournamentId } = req.params;
  try {
    const players = await redis.smembers(`tournament:${tournamentId}:players`);
    res.status(200).json({ players });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get players' });
  }
});

export default router;
