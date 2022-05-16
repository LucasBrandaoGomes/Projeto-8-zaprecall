import React from "react";
import setinha from "../assets/images/setinha.png"


export default function Flashcard({numeroDaPergunta, pergunta, resposta, iconesDeRespostas, setIconesDeRespostas}) {
    
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
                            <button className="naoLembrei" onClick={() => recall("naoLembrei",setPerguntaAberta ,setTipoDeResposta, setIcon, iconesDeRespostas, setIconesDeRespostas)}>
                                Não lembrei
                            </button>
                            <button className="quaseLembrei" onClick={() => recall("quaseLembrei",setPerguntaAberta ,setTipoDeResposta, setIcon, iconesDeRespostas, setIconesDeRespostas)}>
                                Quase não lembrei
                            </button>
                            <button className="zap" onClick={() => recall("zap",setPerguntaAberta ,setTipoDeResposta, setIcon, iconesDeRespostas, setIconesDeRespostas)}>
                                Zap!
                            </button>
                        </div>
                    </div>
                    :
                    <div className="flashCardAberta">
                        <h1>{pergunta}</h1>
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

function recall(caso, setPerguntaAberta, setTipoDeResposta, setIcon, iconesDeRespostas, setIconesDeRespostas) {
    switch (caso){
        case "naoLembrei":
            setIcon("close-circle");
            setIconesDeRespostas([...iconesDeRespostas])
            //setIconesDeRespostas.push("close-circle")
            break;
        case "quaseLembrei":
            setIcon("help-circle");
            setIconesDeRespostas([...iconesDeRespostas])
            //setIconesDeRespostas.push("help-circle")
            break;
        case "zap":
            setIcon("checkmark-circle");
            setIconesDeRespostas([...iconesDeRespostas])
            //setIconesDeRespostas.push("checkmark-circle")
            break;
        default:
            break;
    }
    setTipoDeResposta(caso);
    setPerguntaAberta(false);
}
    