import React, {useContext,useState} from 'react'
import { Contexto } from '../contexto/Contexto';

function Lugar() {
    const {alumno} = useContext(Contexto);
    let idioma = alumno[3].idioma

  return (
    <div className='lugar'>
        <h2>{alumno[idioma].boton2}</h2>
        <h4>{alumno[idioma].direccion}</h4>
      
    </div>
  )
}

export default Lugar
