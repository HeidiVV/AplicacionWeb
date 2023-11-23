import { useState } from "react";
import logotipo2 from "./assets/logotipo2.png";
import "./estilos/acceso.css";

const Recuperar = () => {
    const [correo, setCorreo] = useState("");


    const onIngresar = async () => {{
        const url = "http://localhost:4000/recuperar/password";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                CorreoElectronico: correo
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.text();
            alert(mensaje);
        }
        else{
            alert ("Correo enviado");
        }
    }}


    return (
        <div className="contenedor">

            <div className="titulo">RECUPERACIÓN</div>

            <div className="agrupador-correo">
                <div>Correo Electronico</div>
                <div>
                    <input
                        type="text"
                        placeholder="Correo electronico"
                        className="caja-correo"
                        value={correo}
                        onChange={(e)=> setCorreo(e.target.value)} />
                </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Aceptar</button>
            </div>

            <div>
                <img src={logotipo2} className="logo2"/>
            </div>

        </div>
    )
}

export default Recuperar