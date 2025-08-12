import React, { useEffect, useState } from "react";

function Listadesejo() {
  const [input, setInput] = useState("");
  const [desejos, setDesejos] = useState([]);
  const [maisDesejado, setMaisDesejado] = useState("");

  useEffect(() => {
    const DesejoStorage = localStorage.getItem("@desejos");
    if (DesejoStorage) {
      setDesejos(JSON.parse(DesejoStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@desejos", JSON.stringify(desejos));
  }, [desejos]);

  function CadastratDesejo(e) {
    e.preventDefault();
    setDesejos([...desejos, input]);
    setInput("");
  }

  function selecionarMaisDesejado(item) {
    setMaisDesejado(item);
  }

  return (
    <div>
      <form onSubmit={CadastratDesejo}>
        <h1>Lista de desejos</h1>
        <label htmlFor="Desejo">Qual o seu Desejo?:</label>
        <input
          placeholder="Digite um Desejo"
          type="text"
          id="Desejo"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <div>
        <ul>
          {desejos.map((item) => (
            <li
              key={item}
              onClick={() => selecionarMaisDesejado(item)}
              style={{
                fontWeight: item === maisDesejado ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listadesejo;
