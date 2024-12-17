import express from 'express';
import tournamentRouter from './routes/tournament';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/tournament', tournamentRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
