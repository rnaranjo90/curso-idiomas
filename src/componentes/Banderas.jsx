import { useContext, useState } from "react";
import React  from 'react'
import { Contexto } from "../contexto/Contexto";
import { Provaider } from "../contexto/Provider";

function Banderas() {
    const {alumno} = useContext(Contexto);
    const {setAlumno} = useContext(Contexto);
  
    let idioma = alumno[3].idioma;
    const [ocultarProfe, setOcultarProfe] = useState(false);
    const [ocultarLugar, setOcultarLugar] = useState(false);


    const t_Espanol = () => {
        setAlumno(
            alumno.map((d,posicion) => 
               posicion == 3 
               ? {...d, idioma:0}
               : {...d}
                )
        );
        
    }

    const t_Uk = () => {
        setAlumno(
            alumno.map((d,posicion) => 
               posicion == 3 
               ? {...d, idioma:1}
               : {...d}
                )
        );
        
    }

    const t_France = () => {
        setAlumno(
            alumno.map((d,posicion) => 
               posicion == 3 
               ? {...d, idioma:2}
               : {...d}
                )
        );
        
    }

    
  return (
    <>
        <div className="idiomas">
          <div className='banderas' onClick={t_Espanol}><img src='../img/spain.jpg'/></div>
          <div className='banderas' onClick={t_Uk}><img src='../img/uk.png'/></div>
          <div className='banderas' onClick={t_France}><img src='../img/francia.png'/></div>
        </div>
    </>
  )
}

export default Banderas
