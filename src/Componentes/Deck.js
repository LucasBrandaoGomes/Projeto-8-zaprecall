import Flashcard from "./Flashcard";

// função para embaralhar perguntas //

function sortDeck(deck) {
    let embaralhada = [...deck]
    embaralhada.sort(() => Math.random() - 0.5);
    return embaralhada;
}

export default function Deck({setNumeroDePerguntas, iconesDeRespostas, setIconesDeRespostas}) {


    const deck = [
            {
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript"
            },
            {
                question: "O React é __",
                answer: "uma biblioteca JavaScript para construção de interfaces"
            },
            {
                question: "Componentes devem iniciar com __",
                answer: "letra maiúscula"
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "expressões"
            },
            {
                question: "O ReactDOM nos ajuda __",
                answer: " interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                question: "Usamos o npm para __",
                answer: "gerenciar os pacotes necessários e suas dependências"
            },
            {
                question: "Usamos props para __",
                answer: "passar diferentes informações para componentes"
            },
            {
                question: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando"
            }
    ];
    
    const perguntasEmbaralhadas = sortDeck(deck);
    setNumeroDePerguntas(perguntasEmbaralhadas.length)

    return (
        <div className="todasPerguntas">
            {perguntasEmbaralhadas.map((pergunta, index) =>
            <Flashcard 
            numeroDaPergunta={index+1} 
            pergunta={pergunta.question} 
            resposta={pergunta.answer}
            key={index}
            setNumeroDePerguntas={setNumeroDePerguntas}
            iconesDeRespostas={iconesDeRespostas}
            setIconesDeRespostas={setIconesDeRespostas}

            /> ) }
        </div>
    );
}

