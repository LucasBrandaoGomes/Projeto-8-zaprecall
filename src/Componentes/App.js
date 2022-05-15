import React from "react";
import Init from "./Init";
import MainScreen from "./Perguntas";

export default function App() {

    const [começar, setComeçar] = React.useState(false);

    return (
        <>
           {
              começar ? <MainScreen /> : <Init setComeçar={setComeçar}/>
           }
        </>
    );
}
