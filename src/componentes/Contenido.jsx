import React, { useContext } from "react"
import { Contexto } from "../contexto/Contexto"

function Contenido() { 
    
    const {alumno} = useContext(Contexto);
    let idioma = alumno[3].idioma;



  return (
    <>
      <h1>{alumno[idioma].titulo}</h1>
      <h2>{alumno[idioma].texto}</h2>

    </>
  )
}

export default Contenido
