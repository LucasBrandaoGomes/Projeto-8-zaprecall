import logo from "../assets/images/logo.png"

export default function Init({setComeçar}) {

    function iniciar() {
        setComeçar(true);
    }

    return (
        <div className="Tela1">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <div className="começar" onClick={iniciar} >Iniciar Recall!</div>
        </div>        
    );  
}