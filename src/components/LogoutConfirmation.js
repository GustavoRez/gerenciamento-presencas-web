// src/components/LogoutConfirmation.js
import React from 'react';
import './LogoutConfirmation.css'; // Opcional: para estilização

export default function LogoutConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h3>Tem certeza que deseja sair?</h3>
        <div className="buttonContainer">
          <button className="confirmButton" onClick={onConfirm}>Sim</button>
          <button className="cancelButton" onClick={onCancel}>Não</button>
        </div>
      </div>
    </div>
  );
}
