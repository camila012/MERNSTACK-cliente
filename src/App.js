import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './componentes /auth/Login';
import NuevaCuenta from './componentes /auth/NuevaCuenta';
import Proyectos from './componentes /proyectos/Proyectos';





function App() {
  return (
    <Router>
      <p >texto</p>
    <Switch>
    
    <Route exact path="/" component={Login} />
    
    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
    <Route exact path="/proyectos" component={Proyectos}  />
    
    </Switch>
    </Router>
    );
  }
  
  export default App;
  