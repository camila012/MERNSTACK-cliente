import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

  //state para iniciar sesion
  const [usuario, guardarUsuario]= useState ({
   
    nombre: '',
    email:'',
    passaword:'',
    confirmar: '',
    



  });

  //extraer de usuario
  const {nombre, email, confirmar, passaword}= usuario;

  
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
    <h1>Obtener una Cuenta</h1>
    <form
    onSubmit={onsubmit}
    >
    <div className ="campo-form">
    <label htmlFor="nombre">Nombre</label>
    <input
    type="text"
    id="nombre"
    name="nombre"
    placeholder="Nombre"
    onChange={OnChange} 
    value={nombre}
    
    />
    </div>
    
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

    <div className ="campo-form">
    <label htmlFor="confirmar"> Confirmar Contraseña</label>
    <input
    type="password"
    id="confirmar"
    name="confirmar"
    placeholder=" Confirmar Contraseña"
    onChange={OnChange} 
    value={confirmar}
    />
    </div>



<div className="campo-from">
  <input
  type="submit"
  className="btn btn-primario btn-block"
  value="Registrar"
  />

</div>



<Link to={'/'} className="enlace-cuenta" >
  Obtener Cuenta
</Link>

    </form>
    </div>
    
    </div>
    );
  }
  
  export default NuevaCuenta;