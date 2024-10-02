// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import ChamadaAdm from './pages/ChamadaAdm';
import ChamadaProf from './pages/ChamadaProf';
import ChamadaAluno from './pages/ChamadaAluno';
import Configuracoes from './pages/Configuracoes';
import Perfil from './pages/Perfil';
import LogoutConfirmation from './components/LogoutConfirmation';

function App() {
  // Estado para gerenciar a visibilidade do modal de logout
  const [isLogoutVisible, setIsLogoutVisible] = React.useState(false);

  // Funções para controlar o modal de logout
  const handleLogout = () => {
    setIsLogoutVisible(true);
  };

  const confirmLogout = () => {
    setIsLogoutVisible(false);
    // Redirecionar para a página de login
    window.location.href = '/';
  };

  const cancelLogout = () => {
    setIsLogoutVisible(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adm" element={<ChamadaAdm onLogout={handleLogout} />} />
          <Route path="/prof" element={<ChamadaProf onLogout={handleLogout} />} />
          <Route path="/aluno" element={<ChamadaAluno onLogout={handleLogout} />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/perfil" element={<Perfil />} />
          {/* Redirecionamento padrão */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* Modal de Logout */}
        {isLogoutVisible && (
          <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
        )}
      </div>
    </Router>
  );
}

export default App;
