function ExemploStyle() {
  const meuEstilo = {
    color: "red",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const estiloTitulo = {
    backgroundColor: "yellow",
  };

  return (
    <div>
      <h1>Meu título</h1>
      <p style={meuEstilo}>Meu parágrafo</p>
    </div>
  );
}

export default ExemploStyle;
