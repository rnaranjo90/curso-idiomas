import './App.css';
import Contenido from './componentes/Contenido';
import Provider from "./contexto/Provider";
import React, { useContext, useState } from "react";
import { Contexto } from "./contexto/Contexto"
import Botones from './componentes/Botones';
import Banderas from './componentes/Banderas';

function App() {
  
  
  return (
    <div className="App">
      <Provider>
        <div>
          <Banderas/>
        </div>

        <div>
          <Contenido/>
        </div>

        <div>
          <Botones/>
        </div>

          
      </Provider>
    </div>
  );
}

export default App;