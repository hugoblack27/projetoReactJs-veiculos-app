import Carros from "./carros";
import Imagens from "./imagens";

function Garagem() {
  const carro = [
    "Civic 1995 coupé",
    "Civic Type R",
    "Corolla",
    "Golf Sapão",
    "I30",
  ];
//   const imagemveiculo = [
//     { nome: "Civic 1995 coupé", imagens: { Civic1995 }, ano: 1995 },
//     { nome: "Civic Type R", imagens: { Civic1995 }, ano: 2023 },
//     { nome: "Corolla", imagens: { Civic1995 }, ano: 2025 },
//     { nome: "Golf Sapão", imagens: { Civic1995 }, ano: 1998 },
//     { nome: "I30", imagens: { I30 }, ano: 2017 },

//   ];
  return (
    <div>
      <h1> Os carros que estão na minha garagem: </h1>
      <ul>
        
        {carro.map((carro) => (<Carros marca={carro} />))} 
        
      </ul>
      <Imagens />
    </div>
  );
}

export default Garagem;
