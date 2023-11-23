import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo2 from "./assets/logotipo2.png";
import "./estilos/acceso.css";

const Registro = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");

    const onRegistrar = async () => {{
        const url = "http://localhost:4000/datosregistro/crear-cuenta";
        const response = await fetch(url ,{
            method: "POST",
            body: JSON.stringify({
                Usuario: nombre,
                CorreoElectronico: correo,
                Contraseña: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!response.ok){
            const mensaje = await response.json();
            alert(mensaje);
        }
        else {
            alert("Usuario registrado correctamente");
            navigate("/");
        }
    }}

    return (
        <div className="contenedor">

            <div className="titulo">REGISTRO</div>

            <div className="agrupador-correo">
                <div>Nombre</div>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="caja-correo"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)} />
                </div>
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
                <button className="boton-crear-cuenta" onClick={()=> onRegistrar() }>Crear cuenta</button>
            </div>

            <div>
                <img src={logotipo2} className="logo2"/>
            </div>

        </div>
    )
}

export default Registro