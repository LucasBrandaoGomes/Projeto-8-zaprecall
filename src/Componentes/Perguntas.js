import Deck from "./Deck";
import logo_pequena from "../assets/images/logo-pequeno.png"
import Resultado from "./Resultado";

export default function Perguntas() {

    /*variáveis para lista de icones, contador de respostas e tamanho do deck*/
    
    const [contadorPerguntasRespondidas, setContadorPerguntasRespondidas] = React.useState(0);
    const [numeroDePerguntas, setNumeroDePerguntas] = React.useState();
    const [iconesDeRespostas, setIconesDeRespostas] = React.useState([]);


    return (
        <div className="container">
            <div className="top">
                <img src={logo_pequena} alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            <Deck/>
            <Resultado />
        </div>
    );
}