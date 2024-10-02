// src/pages/Perfil.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css'; // Opcional: para estilização

export default function Perfil() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    alert('Editar Perfil');
  };

  return (
    <div className="container">
      <h2>Perfil do Usuário</h2>
      {/* Exiba informações do perfil aqui */}
      <button onClick={handleEditProfile}>Editar Perfil</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
