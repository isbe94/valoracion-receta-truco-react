import '../estilos/Valoracion.css';
import Estrellas from './Estrellas.js';

export function Valoracion(props) {

  return (

    <div className='contenedor-valoracion'>
      <img
        className='imagen-valoracion'
        src={require(`../imagenes/valoracion-${props.imagen}.png`)}
        alt='fotoPerfil' />
      <div className='contenedor-texto-valoracion'>
        <p className='nombre-valoracion'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-valoracion'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <Estrellas cantidad={props.estrellas} />
        <p className='texto-valoracion'>
          {props.valoracion}
        </p>
      </div>
    </div>

  );
}

export default Valoracion;