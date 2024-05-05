import React, { useState } from "react";
import "./css/login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    
    
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
