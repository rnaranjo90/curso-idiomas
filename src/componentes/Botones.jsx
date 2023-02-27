import React, {useContext, useState } from 'react'
import { Contexto} from '../contexto/Contexto';
import Profesora from '../componentes/Profesora';
import Lugar from '../componentes/Lugar';

function Botones() {

    const {alumno} = useContext(Contexto);
  
  let idioma = alumno[3].idioma;
  const [ocultarProfe, setOcultarProfe] = useState(false);
  const [ocultarLugar, setOcultarLugar] = useState(false);

  const mostrar1 = () => {
    setOcultarProfe(!ocultarProfe)
    setOcultarLugar(false);
  }

  const mostrar2 = () => {
    setOcultarLugar(!ocultarLugar)
    setOcultarProfe(false);
  }


  return (
    <>

        <div className='botones'>
          <button onClick={mostrar1}>{alumno[idioma].boton1}</button>
          <button onClick={mostrar2}>{alumno[idioma].boton2}</button>
        </div>


        {
          ocultarProfe ? <Profesora/>
          : null
          }
          
          {
          ocultarLugar ? <Lugar/>
          : null
          }
      
    </>
  )
}

export default Botones
