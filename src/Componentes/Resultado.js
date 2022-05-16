export default function Resultado({numeroDePerguntas, iconesDeRespostas}){
    return(
    <>    
        {iconesDeRespostas.length < numeroDePerguntas ? 

            <div className="resultados">
                <div>
                    {/* x sendo respostas e y sendo tamanho do deck */}
                    {iconesDeRespostas.length}/{numeroDePerguntas} CONCLUÍDOS
                </div>
                <div>
                { /* aqui deve vir a lista de icones dos acertos */ }
                    {iconesDeRespostas.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                </div>
                {/* se a pessoa ganhar */}
            </div>
            :
            (iconesDeRespostas.includes("close-circle") || iconesDeRespostas.includes("help-circle")) ?
                <div className="resultadoFinal">
                        <div>
                            {iconesDeRespostas.length}/{numeroDePerguntas} CONCLUÍDOS
                        </div>
                        <div>
                            {iconesDeRespostas.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                        </div>
                        <div className="resultadoFinal">
                            <span><p>😢<strong> Putz...</strong></p></span>
                            <span>Ainda faltam alguns...</span>
                            <span>Mas não desanime!</span>
                        </div>
                    </div>
                    :
                    <div className="resultadoFinal">
                        <div>
                            {iconesDeRespostas.length}/{numeroDePerguntas} CONCLUÍDOS
                        </div>
                        <div>
                            {iconesDeRespostas.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                        </div>
                            <span><p>🥳<strong> Parabéns!!</strong></p></span>
                            <span>Você não esqueceu de</span>
                            <span> nenhum flashcard!</span>
                    </div>
        }
    </>
    );
   
}