import React from 'react'
import { useState } from 'react'
/* Importa y modifica lo que necesites */

function Reactividad() {
  const[contador, setContador] = useState(0)
  
  

  return (
    <div className="Ejercicios">
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  )
}

export default Reactividad
