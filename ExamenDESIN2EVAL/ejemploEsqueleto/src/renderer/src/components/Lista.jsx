import React from 'react'
import Pelicula from './Pelicula'
import { useState } from 'react'
/* Importa lo que necesites */

function Lista() {
  const [peliculas, setpeliculas] = useState([
    'Terminator',
    'Matrix',
    'Gladiator',
    'El gigante de hierro'
  ])
  return (
    <div className="Ejercicios">

      <h1>Peliculas</h1>
      {/* Borra las etiquetas p, y genera lo mismo a partir de
      un array peliculas, y apoyandote en el componente Pelicula */}
      {peliculas.map((pelicula, i) => (
        <div key={i}>
        <Pelicula
        titulo={pelicula}
        />
      </div>
      ))}
      {/* Fin de tus cambios */}
    </div>
  )
}

export default Lista
