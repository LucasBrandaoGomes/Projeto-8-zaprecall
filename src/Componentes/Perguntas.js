import React from "react";
import Deck from "./Deck";
import logo_pequena from "../assets/images/logo-pequeno.png"
import Resultado from "./Resultado";

export default function Perguntas() {

    /*variáveis para lista de icones, tamanho do deck*/
    
    const [numeroDePerguntas, setNumeroDePerguntas] = React.useState();
    const [iconesDeRespostas, setIconesDeRespostas] = React.useState([]);


    return (
        <div className="container">
            <div className="top">
                <img src={logo_pequena} alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            <Deck
            setNumeroDePerguntas={setNumeroDePerguntas}
            setIconesDeRespostas={setIconesDeRespostas}
            iconesDeRespostas={iconesDeRespostas}
            />
            <Resultado
            numeroDePerguntas={numeroDePerguntas}
            iconesDeRespostas={iconesDeRespostas}
            />
        
        </div>
    );
}