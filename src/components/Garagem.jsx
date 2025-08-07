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
