import React, { useState } from 'react';

function Recarga() {
  const [contador, setContador] = useState(5);

  const contar = () => {

    // Configuramos un intervalo para disminuir el contador cada segundo
    const intervalId = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);

    // Limpiamos el intervalo cuando el contador llega a cero
    if (contador === 0) {
      clearInterval(intervalId);
    }
  };

  return (
    <div className="Ejercicios">
      <p>{contador}</p>
      <button onClick={contar}>Count down</button>
    </div>
  );
}

export default Recarga;