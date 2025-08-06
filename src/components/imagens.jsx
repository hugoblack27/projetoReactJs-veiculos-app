import I30 from "../Img/I30.jpg"
import Civic1995 from "../Img/Civic 1995 coupé.png"
import Corolla from "../Img/Corolla.jpg"
import Golf from "../Img/MK4 golf.jpg"
import CivicTypeR from "../Img/Civic type R.webp"

function Imagens() {
  return( 
  <div>
    <h1>Lista de carros</h1>
    <img src={Civic1995} alt="Civic 1995 coupé" height='350px' width="350px"/>
    <img src={CivicTypeR} alt="Civic Type R" height='350px' width="350px" />
    <img src={Corolla} alt="Corolla" height='350px' width="350px" />
    <img src={Golf} alt="Civic"  height='350px' width="350px"/>
    <img src={I30} alt="Civic" height='350px' width="350px" />
    </div>
  )
}

export default Imagens