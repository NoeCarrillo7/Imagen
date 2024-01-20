import { useState } from "react";

    export function Texto(){
        /*var texto = "Encendido";
        var [texto, setTexto] = useState("Encendido");
        
        function switch2(){
            if(texto === "Encendido"){
                setTexto("Apagado");
            }
            else{
                setTexto("Encendido");
            }  
        }*/

        /*const [ar, setAr] = useState(0);
        function aumentar(){
            if(ar < 10)
                setAr(ar + 2); 
        }
        function disminuir(){
            if(ar > 0)
                setAr(ar - 2); 
        }
        function reiniciar(){
            setAr(0);
        }*/

        const [ar] = useState(["Apagado", "25%", "50%", "75%", "100%"]);
        const [post, setPost] = useState(0);

        function aumentar(){
            if (post < 4) setPost(post + 1);
            
        }
        function disminuir(){
            if (post > 0) setPost(post - 1);
        }
        function reiniciar(){
            setPost(0);
        }

        return(
            <>
                <div>{ar[post]}</div>
                <button onClick = {aumentar}>+</button>
                <button onClick = {disminuir}>-</button>
                <button onClick = {reiniciar}>Reset</button>
            </>
        );
    }