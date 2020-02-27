import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto';

const Sidebar = () => {
  return (

    <aside>

      <h1>MIS NOTAS <span>agregar</span></h1>

      <NuevoProyecto />

      <div className="proyectos">

        <h2>tus proyectos</h2>

      </div>

    </aside>
    );
}
 
export default Sidebar;