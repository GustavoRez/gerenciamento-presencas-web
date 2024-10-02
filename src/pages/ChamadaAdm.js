// src/pages/ChamadaAdm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChamadaAdm.css'; // Opcional: para estilização

export default function ChamadaAdm({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Bem-vindo, Administrador</h2>
      {/* Adicione funcionalidades específicas para o administrador aqui */}
      <button onClick={() => navigate('/perfil')}>Perfil</button>
      <button onClick={() => navigate('/configuracoes')}>Configurações</button>
      <button onClick={onLogout} style={{ backgroundColor: '#d32f2f' }}>Logout</button>
    </div>
  );
}
