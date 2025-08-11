import React, { useEffect, use, useState } from "react";

function Tarefas() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Pagas a conta de água",
    "assistir as aulas",
  ]);

  useEffect(() => {
    const TarefaStorage = localStorage.getItem("@tarefa");
    if (TarefaStorage) {
      setTarefas(JSON.parse(TarefaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function cadastrarTarefas(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={cadastrarTarefas}>
      <h1>Cadastro de tarfeas</h1>
        <label htmlFor="nome">Nome Tarefa:</label>
        <input
          placeholder="Digite uma tarefa"
          type="text"
          id="nome"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>

      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tarefas