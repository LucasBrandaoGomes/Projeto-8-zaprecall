import React from "react";
import setinha from "../assets/images/setinha.png"


export default function Flashcard({numeroDaPergunta, pergunta, resposta}) {
    
    const [icon, setIcon] = React.useState("play-outline");

    const [perguntaAberta, setPerguntaAberta] = React.useState(false);
    const [perguntaVirada, setPerguntaVirada] = React.useState(false);
    const [tipoDeResposta, setTipoDeResposta] = React.useState("");
    return (
        <>
            {
            perguntaAberta === true && tipoDeResposta === "" ?

                perguntaVirada ? 
                    <div className="flashCardVirada">
                        <h1>
                            {resposta}
                        </h1>         
                        <div>
                            <button className="naoLembrei" onClick={() => recall("naoLembrei",setPerguntaAberta ,setTipoDeResposta, setIcon)}>
                                <p>Não</p>
                                <p>lembrei</p>
                            </button>
                            <button className="quaseLembrei" onClick={() => recall("quaseLembrei",setPerguntaAberta ,setTipoDeResposta, setIcon)}>
                                Quase não lembrei
                            </button>
                            <button className="zap" onClick={() => recall("zap",setPerguntaAberta ,setTipoDeResposta, setIcon)}>
                                Zap!
                            </button>
                        </div>
                    </div>
                    :
                    <div className="flashCardAberta">
                        <h1>
                        {pergunta}
                        </h1>
                        <img src={setinha} alt="Virar a flashcard" onClick={() => setPerguntaVirada(true)}/>          
                    </div>

                :

                <div className={`flashcard ${tipoDeResposta}`} onClick={() => setPerguntaAberta(true)}>
                    <h1>Pergunta {numeroDaPergunta}</h1>
                    <ion-icon name={icon}></ion-icon>
                </div>
            }
        </>
    );
}

function recall(answerType, setPerguntaAberta, setTipoDeResposta, setIcon) {
    switch (answerType){
        case "naoLembrei":
            setIcon("close-circle");
            break;
        case "quaseLembrei":
            setIcon("help-circle");
            break;
        case "zap":
            setIcon("checkmark-circle");
            break;
        default:
            break;
    }
    setTipoDeResposta(answerType);
    setPerguntaAberta(false);
}
    