import { useState } from "react";
import React, { useEffect } from 'react';
import Mensaje from './Mensaje';



function Login  () {
    

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) 
            .then(setUsers);
    }, []);

    const handleusuariochange = (e) => setUsuario(e.target.value);
    const handlepasswordchange = (e) => setPassword(e.target.value);

    const handlesubmit = (e) => {
        e.preventDefault();
        const usuariofind = users.find(
            (user) => user.email === usuario && user.username === password

        );


        if(usuariofind){
            setMensaje('Hola que tal, ' + usuariofind.name);

        }else{
            setMensaje('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="usuario">Usuario:</label>
                <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={handleusuariochange}
                />
                <br />
                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlepasswordchange}
                />
                <br />
                <button type="submit">Iniciar sesión</button>
            </form>
            {mensaje && <Mensaje mensaje={mensaje} />}
        </div>

    );

};
export default Login;


