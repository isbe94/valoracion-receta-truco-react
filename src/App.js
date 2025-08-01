// import logo from './logo.svg';
import './App.css';
import Valoracion from './componentes/Valoracion.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros lectores sobre Recetas con Truco</h1>
        <Valoracion
          nombre='Shawn Wang'
          pais='Filipinas'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Tech Solutions'
          estrellas={4}
          valoracion='Nunca pensé que podría cocinar bien, pero siguiendo los consejos de este blog aprendí trucos fáciles que han mejorado mucho mis platos diarios. Ahora disfruto más preparando la comida en casa.'
        />

        <Valoracion
          nombre='Sarah Chima'
          pais='Estados Unidos'
          imagen='sarah'
          cargo='Diseñadora Gráfica'
          empresa='Creativa Studio'
          estrellas={4}
          valoracion='Este blog me enseñó a darle sabor a mis comidas con técnicas sencillas y consejos útiles. Me encanta que las recetas sean fáciles de seguir y que pueda sorprender a mi familia con platos deliciosos.'
        />

        <Valoracion
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Profesora de Inglés'
          empresa='Escuela Global'
          estrellas={5}
          valoracion='Antes me costaba organizarme para cocinar, pero con los tips y recetas de este blog ahora preparo comidas saludables y variadas sin estrés. Ha cambiado mi forma de ver la cocina.'
        />
      </div>
    </div>
  );
}

export default App;
