import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

  //state para iniciar sesion
  const [usuario, guardarUsuario]= useState ({
    email: '',
   passaword: '',


  });

  //extraer de usuario
  const {email, passaword}= usuario;

  
  const OnChange = e => {

    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value

    })
  }

  //cuando el usuario quiere iniciar sesion
  const onsubmit = e => {
    e.preventDefault();


    //validar que haya campos vacios

    //pasarlo al action
  }


  
  
  return (
    
    <div className="form-usuario">
    <div className= "contenedor-form sombra-dark" >
    <h1>Iniciar Sesion</h1>
    <form
    onSubmit={onsubmit}
    >
    <div className ="campo-form">
    <label htmlFor="email">Correo</label>
    <input
    type="email"
    id="email"
    name="email"
    placeholder="Correo"
    onChange={OnChange} 
    value={email}
    />
    </div>
    
    <div className ="campo-form">
    <label htmlFor="password">Contraseña</label>
    <input
    type="password"
    id="password"
    name="password"
    placeholder="Contraseña"
    onChange={OnChange} 
    value={passaword}
    />
    </div>

<div className="campo-from">
  <input
  type="submit"
  className="btn btn-primario btn-block"
  value="Iniciar Sesion"
  />

</div>

<Link to={'/nueva-cuenta'} className="enlace-cuenta" >
  Crear Cuenta
</Link>

    </form>
    </div>
    
    </div>
    );
  }
  
  export default Login;