import Deck from "./Deck";
import logo_pequena from "../assets/images/logo-pequeno.png"
import Resultado from "./Resultado";

export default function Perguntas() {
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