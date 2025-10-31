import logo from './logo.svg';
import './App.css';
import fotoperfil from './images/image 1.png';
import fotoRelleno from './images/image 2.png';
import fotoDitella from './images/image 4.png';
import fotoOrt from './images/image 5.png';
import fotoImage from './images/images.png';

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
        <span className="TituloElemento">Mis proyectos</span>
        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoRelleno}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">ApocalipTIC</span>
              <span className="descIzquierda">Juego tower defense con kiajgoú wenrgjkn ber kweel bgflekwrbgi ewurbgke wwrjhbgk jebrgkjebgvkjljerbg kjhheww rfbgkljehrbg kherbge erlkeghrg lkerughek jlrhg luh bbgvkjw bgvkjbwrgkljw rbgkjwr  wñjjb rg.kjwbeeglkjwbgk ljwbgkjwbgkj webgkjbwkjbgj.</span>
          </div>
        </div>

        <div className="elementoDerecha">
          <div className="textoDerecha">
              <span className="tituloDerecha">Get Off My Train</span>
              <span className="descDerecha">Juego tower defense con kiajgoú wenrgjkn ber kweel bgflekwrbgi ewurbgke wwrjhbgk jebrgkjebgvkjljerbg kjhheww rfbgkljehrbg kherbge erlkeghrg lkerughek jlrhg luh bbgvkjw bgvkjbwrgkljw rbgkjwr  wñjjb rg.kjwbeeglkjwbgk ljwbgkjwbgkj webgkjbwkjbgj.</span>
          </div>
          <img className="fotoDerecha" src={fotoRelleno}></img>
        </div>
      </header>

      <header className="Formacion">
         <span className="TituloElemento">Formación</span>

         <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoDitella}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Licenciatura en Tecnología Digital</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>

        <div className="elementoDerecha">
          <div className="textoDerecha">
              <span className="tituloDerecha">Secundaria en Orientación TICs</span>
              <span className="descDerecha">Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcosTexto que va a hacer MArcosTexto que va a hacer MArcos</span>
          </div>
          <img className="fotoDerecha" src={fotoOrt}></img>
        </div>

        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoImage}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Tecniciatura en programación avanzada de videojuegos</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>
      </header>

      <header className="Habilidades">
        <span className="TituloElemento">Habilidades</span>

        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoRelleno}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Habilidad</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>

        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoRelleno}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Habilidad</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>

        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoRelleno}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Habilidad</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>
      </header>

      <header className='Contacto'>
        <span className='minitexto'>Marcos Tannenbaum</span>
        <div className='contactoDerecha'>
          <span className='minitexto'>LinkedIn</span>
          <span className='minitexto'>YouTube</span>
          <span className='minitexto'>Instagram</span>
          <span className='minitexto'>TikTok</span>
          <span className='minitexto'>X / Twitter</span>
        </div>
      </header>
    </div>
  );
}

export default App;
