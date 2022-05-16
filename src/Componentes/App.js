import React from "react";
import Init from "./Init";
import Perguntas from "./Perguntas";

export default function App() {

    const [começar, setComeçar] = React.useState(false);

    return (
        <>
           {
              começar ? <Perguntas /> : <Init setComeçar={setComeçar}/>
           }
        </>
    );
}
