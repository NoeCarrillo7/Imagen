import { useState } from "react"


export function Imagen(){
    var [img, setImg] = useState("/images/puerta1.jpg");

    function abierta() {
        if (img === ("/images/puerta1.jpg")) {
            setImg("/images/puerta2.jpg");
        } else {
            setImg("/images/puerta1.jpg");
        }
    }
    return (
        <>
            <p> <img src={process.env.PUBLIC_URL + img} alt="Puerta" /> </p>
            <button onClick={abierta}>Abrir/Cerrar</button>
        </>
    );
    /*var [img, setImg] = useState([{"./public/images/puerta1.jpg"}]);
    function abierta(){
        if(img === [puerta1]){
            setImg([puerta2]);
        }
        else{
            setImg([puerta1]);
        }  
    }
    return(
        <>
            <p> <img src={process.env.PUBLIC_URL + "./public/images/puerta2.jpg" } /> </p>
            <button onClick={abierta}>abierta</button>
        </>
    )*/
}