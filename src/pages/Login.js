// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Opcional: para estilização

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
      navigate('/adm');
    } else if (username === 'prof' && password === 'prof') {
      navigate('/prof');
    } else if (username === 'aluno' && password === 'aluno') {
      navigate('/aluno');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoCapitalize="none"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
