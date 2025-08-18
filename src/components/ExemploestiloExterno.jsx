import "../css/estiloexterno.css"

function EstiloExterno() {
  return (
    <div className="container conteudo">
      <h1 className="titulo">Estilo externo</h1>
      <p className="paragrafo">
        Nesse pull request, o gerenciador de dependências do frontend causou a
        race condition de compilação multi-plataforma de forma asincrona.
      </p>
      <h1 className="titulo">Outro titulo estilo externo</h1>
      <span className="texto">
        Fala pro cliente que a disposição dos elementos HTML otimizou a
        renderização de uma configuração Webpack eficiente nos builds.
      </span>
      <button id="btn-ola">olá</button>
    </div>
  );
}
export default EstiloExterno;
