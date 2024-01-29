import { useEffect, useState } from "react"

export function Contador(){
    const[cont, setCont] = useState(0);
    const[avanza, setAvanza] = useState(0);
    const[regresa, setRegresa] = useState(0);

    function avanzar(){
        setCont(cont + 1);
        setAvanza(avanza + 1);
    }
    function regresar(){
        setCont(cont - 1);
        setRegresa(regresa - 1);
    }

    useEffect(()=>{
        console.log("Use effect ejecutado");
    },[avanza, regresa]);

    return(
        <>  
            <div>El contador es: {cont}</div>
            <button onClick = {avanzar}>Incrementar el contador</button>
            <button onClick = {regresar}>Decrementar el contador</button>

        </>
    )
}