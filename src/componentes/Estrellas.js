export function Estrellas({ cantidad }) {
  const estrellas = []

  for (let i = 0; i < cantidad; i++) {
    estrellas.push(
      <span key={i} className="estrella-llena">
        ★
      </span>,
    )
  }

  // Llena con estrellas vacías hasta completar 5
  for (let i = cantidad; i < 5; i++) {
    estrellas.push(
      <span key={i} className="estrella-vacia">
        ☆
      </span>,
    )
  }

  return <div className="contenedor-estrellas">{estrellas}</div>
}

export default Estrellas