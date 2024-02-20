import React from 'react'
import '../assets/responsive.css'
/* Importa lo que necesites */

function Responsive() {
  return (
    <div className="MainResponsive">
      {/* Quita el h2 y genera aquí la interfaz responsive */}
      <div className="primerCuadrado">
      <div className="cuadradoMitad1"></div>
      <div className="cuadradoMitad2"></div>
      </div>
      <div className="segundoCuadrado">
        <div className="inter1Cuadrado"></div>
        <div className="inter2Cuadrado">
          <div className="inter3Cuadrado"></div>
          <div className="inter4Cuadrado"></div>
        </div>
      </div>
      {/* Fin de tus cambios */}
    </div>
  )
}

export default Responsive
