import React, { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});

  function cadastrarUsuarios(e) {
    e.preventDefault();
    setUser({
      nome: nome,
      email: email,
      idade: idade,
    });

    setNome("");
    setEmail("");
    setIdade(0);
  }

  return (
    <div>
      <h1>Cadastro de usuários</h1>

      <form onSubmit={cadastrarUsuarios}>
        <label htmlFor="nome">Nome:</label>
        <input
          placeholder="Digite seu nome"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Digite seu email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="idade">Idade:</label>
        <input
          placeholder="Digite sua Idade"
          type="number"
          id="idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <span>Bem-vindo: {user.nome}</span><br />
        <span>E-mail: {user.email}</span><br />
        <span>Idade: {user.idade}</span>
      </div>
    </div>
  );
}

export default Formulario;
