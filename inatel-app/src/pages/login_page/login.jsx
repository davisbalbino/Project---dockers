import React, { useState } from "react";
import "./css/login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password,
  }),
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Erro ao fazer requisição:', error);
});

    
  };

  return (
    <div className="formulario-body">
      <div className="formulario-card">
        <div className="formulario-title">
            <hi>Academico</hi>
        </div>
        
        <form className="formuario-infos" onSubmit={handleSubmit}>
          <div className="forumalario-input">
            <input
              placeholder="Matrícula"
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="forumalario-input" >
            <input
              placeholder="Senha"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
