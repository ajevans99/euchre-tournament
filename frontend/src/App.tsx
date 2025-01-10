import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTournament from './pages/CreateTournament';
import Lobby from './pages/Lobby';
import PlayerJoin from './pages/PlayerJoin';
import TournamentSettings from './pages/TournamentSettings';
import PhoneVerification from './pages/PhoneVerification';

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<HomePage />} />

      {/* Create Tournament route */}
      <Route path="/create-tournament" element={<CreateTournament />} />

      {/* Join Tournament route */}
      <Route path="/join-tournament" element={<PlayerJoin />} />

      {/* Phone verification route */}
      <Route path="/verify-phone" element={<PhoneVerification />} />

      {/* Lobby route */}
      <Route path="/tournament/:id" element={<Lobby />} />

      {/* Tournament settings route */}
      <Route path="/tournament/:id/settings" element={<TournamentSettings />} />

      {/* Redirect unknown routes back to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
