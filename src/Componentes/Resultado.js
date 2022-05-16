export default function Resultado(){
    return(
    <>
        <div className="resultados">
            <div>
                {/* x sendo acertos e y sendo tamanho do deck */}
                x/y CONCLUÍDOS
            </div>
            <div>
            { /* aqui deve vir a lista de icones dos acertos */ }
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
            {/* se a pessoa ganhar */}
            
            <div className="resultadoFInal">
                <h1>EMOJI<strong> PARABENS</strong></h1>
                <p>VOCE NAO ESQUECEU NENHUM FLASHCARD</p>
            </div>

            {/* se a pessoa perder */}
            <div className="resultadoFInal2">
                <h1>EMOJI<strong> PUTZZ...</strong></h1>
                <p>AINDA FALTAM ALGUNS, MAS NÃO DESANIME</p>
            </div>

        </div>
    </>
    )
}