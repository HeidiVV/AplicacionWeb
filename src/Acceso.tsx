import { useState } from "react";
import banner from "./assets/banner.png";
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => {
    const nav= useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const onIngresar = async () =>{{
        const url = "http://localhost:4000/acceso/ingresar";
        const resp = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CorreoElectronico: correo,
                Contraseña: password
            })
        });

        if(resp.ok){
            nav("/categorias");
        }
        else{
            const error = await resp.text();
            alert(error);
        }
    }}

    return (
        <div className="contenedor">

            <div>
                <img src={banner} className="banner"/>
            </div>

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

            <div className="agrupador-password">
                <div>Contraseña</div>
                <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="caja-password"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      />
                </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
            </div>

            <div className="otros-botones">
                <a href="/registro" className="link-registro">¿No tienes cuenta? Crea una cuenta </a>
                <a href="/recuperar-password" className="link-password">¿Olvidaste tu contraseña?</a>
            </div>

        </div>
    )
}

export default Acceso