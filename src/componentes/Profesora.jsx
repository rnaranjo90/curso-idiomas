import React, {useContext, useState} from 'react'
import { Contexto } from '../contexto/Contexto'

function Profesora() {
    const {alumno} = useContext(Contexto);
    let idioma = alumno[3].idioma ;
    let imagen = `../img/${alumno[idioma].foto}`;
  return (
    <div className='profesora'>
        <h2>{alumno[idioma].boton1}</h2>
        <img className='imagen_profesora ' src={imagen}/>
        <h3>{alumno[idioma].nombre}</h3>
      
    </div>
  )
}

export default Profesora
