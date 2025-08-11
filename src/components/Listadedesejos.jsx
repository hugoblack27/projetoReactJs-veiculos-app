import React, { useEffect, useState } from "react";
import { use } from "react";

function Listadesejo() {
  const [input, setInput] = useState("");
  const [desejos, setDesejos] = useState([]);

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
        <ul >
            {desejos.map((desejos) => (
                <li key={desejos}> {desejos}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Listadesejo
