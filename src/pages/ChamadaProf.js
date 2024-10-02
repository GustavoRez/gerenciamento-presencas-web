// src/pages/ChamadaProf.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChamadaProf.css'; // Opcional: para estilização

export default function ChamadaProf({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Bem-vindo, Professor</h2>
      {/* Adicione funcionalidades específicas para o professor aqui */}
      <button onClick={() => navigate('/perfil')}>Perfil</button>
      <button onClick={() => navigate('/configuracoes')}>Configurações</button>
      <button onClick={onLogout} style={{ backgroundColor: '#d32f2f' }}>Logout</button>
    </div>
  );
}
