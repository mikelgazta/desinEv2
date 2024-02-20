import React from 'react'
import { useState } from 'react'
/* Importa y modifica lo que necesites */

function Crud() {
  const [peliculas, setpeliculas] = useState([
    'Terminator',
    'Matrix',
    'Gladiator',
    'El gigante de hierro'
  ])

  const [nuevaPelicula, setNuevaPelicula] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    peliculas.push(nuevaPelicula)
    console.log(peliculas)
    setpeliculas(peliculas);
    setNuevaPelicula('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNuevaPelicula(value)
  };

  const handleDelete = (peliculaNum) => {
    const newPeliculas = [...peliculas]
    newPeliculas.splice(peliculaNum, 1)
    setpeliculas(newPeliculas);
    console.log(newPeliculas);
  }

  return (
    <div className="Ejercicios">
      <h1>Peliculas Favoritas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nuevaPelicula} onChange={handleChange}/>
        <button type="submit">Agregar</button>
      </form>
      {peliculas.map((pelicula, i) => (
        <div key={i}>
          <p>{pelicula}</p>
          <button onClick={() => handleDelete(i)}>Borrar</button>
        </div>
      ))}
    </div>
  )
}

export default Crud
