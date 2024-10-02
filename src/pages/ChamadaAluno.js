// src/pages/ChamadaAluno.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChamadaAluno.css'; // Opcional: para estilização

export default function ChamadaAluno({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Bem-vindo, Aluno</h2>
      {/* Adicione funcionalidades específicas para o aluno aqui */}
      <button onClick={() => navigate('/perfil')}>Perfil</button>
      <button onClick={() => navigate('/configuracoes')}>Configurações</button>
      <button onClick={onLogout} style={{ backgroundColor: '#d32f2f' }}>Logout</button>
    </div>
  );
}
