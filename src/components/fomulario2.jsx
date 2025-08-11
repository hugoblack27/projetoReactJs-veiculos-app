import React, { useState } from "react";
import "./formulario2.css";

function Formulario2() {
  const [Pnome, setPnome] = useState("");
  const [Snome, setSnome] = useState("");
  const [email, setEmail] = useState("");
  const [TecCel, setTelCel] = useState("");
  const [Rua, setRua] = useState("");
  const [completo, setCompleto] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [Cep, setCep] = useState("");

  const [user, setUser] = useState({});

  function cadastrarclientes(e) {
    e.preventDefault();
    setUser({
      Primeironome: Pnome,
      Segundonome: Snome,
      email: email,
      TecCel: TecCel,
      Rua: Rua,
      completo: completo,
      cidade: cidade,
      estado: estado,
      Cep: Cep,
    });
  }

  return (
    <div>
      <form onSubmit={cadastrarclientes}>
      <h1>Cadastro de usúarios</h1>
        <div className="nome">
          <h3> Nome completo</h3>
          <input
            placeholder="Digite seu Primeiro nome"
            type="text"
            id="nome"
            value={Pnome}
            onChange={(e) => setPnome(e.target.value)}
          />
          <input
            placeholder="Digite seu Segundo nome"
            type="text"
            id="nome"
            value={Snome}
            onChange={(e) => setSnome(e.target.value)}
          />
        </div>

        <div className="email">
          <h3> E-mail </h3>
          <div className="emailinput">
            <input
              placeholder="Digite seu Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>exemplo@exemplo.com</span>
          </div>
        </div>

        <div className="telefone">
          <h3>Telefone</h3>

          <div className="telefoneinput">
            <input
              placeholder="(00)0000-0000"
              type="Telcel"
              id="nome"
              maxLength={11}
              value={TecCel}
              onChange={(e) => setTelCel(e.target.value)}
            />
            <p>Insira um numero de telefone valido</p>
          </div>
        </div>

        <div className="endereco">
          <h3> Endereço </h3>
          <div className="inputenderecocima">
            <input
              placeholder="Digite sua Rua"
              type="text"
              id="nome"
              value={Rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <p>Rua</p>
            <input
              placeholder="Digite seu complemento"
              type="text"
              id="completo"
              value={completo}
              onChange={(e) => setCompleto(e.target.value)}
            />
            <p>complemento</p>
          </div>

          <input
            placeholder="Digite sua cidade"
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <p>cidade</p>

          <input
            placeholder="Digite seu Estado"
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
          <p>estado</p>

          <input
            placeholder="Digite seu Cep"
            type="cep"
            id="nome"
            value={Cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <p>CEP</p>
        </div>
      </form>
    </div>
  );
}

export default Formulario2;
