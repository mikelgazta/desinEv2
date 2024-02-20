import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
/* Importa y modifica lo que necesites */

function Navegacion() {
  return(
    <nav>
          <ul>
            <li>
              <Link to="/Responsive">Responsive</Link>
            </li>
            <li>
              <Link to="/Lista">Lista</Link>
            </li>
            <li>
              <Link to="/Reactividad">Reactividad</Link>
            </li>
            <li>
              <Link to="/Recarga">Recarga</Link>
            </li>
            <li>
              <Link to="/Crud">Crud</Link>
            </li>
          </ul>
    </nav>
  )
}

export default Navegacion
