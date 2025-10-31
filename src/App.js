import logo from './logo.svg';
import './App.css';
import fotoperfil from './images/image 1.png';
import fotoRelleno from './images/image 2.png';

function App() {
  return (
    <div className="App">
      <header className="Arriba">
        <div className="Nombre">
          <span>Marcos</span>
          <span>Tannenbaum</span>
        </div>
        <div className='Linea1'></div>
        <div className='Atajos'>
          <button className="botonMisProyectos" >Mis proyectos</button>
          <button className="botonFormacion">Formación</button>
          <button className="botonHabilidades">Habilidades</button>
        </div>
      </header>

      <header className='Perfil'>
        <div className='TextoPerfil'>
           <span className='Titulo'>Desarrollador de videojuegos independiente</span>
           <span className='Descripcion'>Estudiante de licenciatura en Tecnología Digital UTDT y tecnicatura en Programación Avanzada de Videojuegos.</span>
        </div>
        <img className='FotoPerfil' src={fotoperfil}></img>
      </header>

      <header className="misProyectos">
        <span className="textoMisProyectos">Mis proyectos</span>
        <div className="apocaliptic">
          <img className="fotoApocaliptic" src={fotoRelleno}></img>
          <div className="textoApocaliptic">
              <span className="subtitulo">ApocalipTIC</span>
              <span className="descApocaliptic">Juego tower defense con kiajgoú wenrgjkn ber kweel bgflekwrbgi ewurbgke wwrjhbgk jebrgkjebgvkjljerbg kjhheww rfbgkljehrbg kherbge erlkeghrg lkerughek jlrhg luh bbgvkjw bgvkjbwrgkljw rbgkjwr  wñjjb rg.kjwbeeglkjwbgk ljwbgkjwbgkj webgkjbwkjbgj.</span>
          </div>
        </div>

        <div className="getOffMyTrain">
          <div className="textoGetOffMyTrain">
              <span className="tituloGetOffMyTrain">Get Off My Train</span>
              <span className="descGetOffMyTrain">Juego tower defense con kiajgoú wenrgjkn ber kweel bgflekwrbgi ewurbgke wwrjhbgk jebrgkjebgvkjljerbg kjhheww rfbgkljehrbg kherbge erlkeghrg lkerughek jlrhg luh bbgvkjw bgvkjbwrgkljw rbgkjwr  wñjjb rg.kjwbeeglkjwbgk ljwbgkjwbgkj webgkjbwkjbgj.</span>
          </div>
          <img className="fotoGetOffMyTrain" src={fotoRelleno}></img>
        </div>
      </header>
    </div>
  );
}

export default App;
