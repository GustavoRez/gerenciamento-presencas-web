// src/pages/Configuracoes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Configuracoes.css'; // Opcional: para estilização

export default function Configuracoes() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Configurações</h2>
      {/* Adicione opções de configurações aqui */}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
