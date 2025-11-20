import logo from './logo.svg';
import './App.css';
import fotoperfil from './images/image 1.png';
import fotoRelleno from './images/image 2.png';
import fotoDitella from './images/image 4.png';
import fotoOrt from './images/image 5.png';
import Ellipse1 from './images/Ellipse 4.png';

function App() {

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const habilidades = [
    { id: 1, name: "Habilidad 1", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { id: 2, name: "Habilidad 2", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { id: 3, name: "Habilidad 3", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { id: 4, name: "Habilidad 4", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { id: 5, name: "Habilidad 5", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { id: 6, name: "Habilidad 6", image: fotoRelleno, texto: "Descripción de la habilidad iría acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  ];

  return (
    <div className="App">
      <img src={Ellipse1} className="Ellipse Ellipse1"/>
      <header className="Arriba">
        <div className="Nombre">
          <span>Félix</span>
          <span>Rozitchner</span>
        </div>
        <div className='Linea1'></div>
        <div className='Atajos'>
        <button className="botonFormacion" onClick={() => scrollToSection('formacion')}>Formación</button>
          <button className="botonMisProyectos" onClick={() => scrollToSection('misProyectos')}>Mis proyectos</button>
          <button className="botonHabilidades" onClick={() => scrollToSection('habilidades')}>Habilidades</button>
        </div>
      </header>

      <header className='Perfil'>
        <img className='FotoPerfil' src={fotoperfil}></img>
        <div className='TextoPerfil'>
            <span className='Titulo'>Félix Rozitchner</span>
            <span className='Descripcion'>Estudiante de economía con amplios conocimientos  en programación, gestión de equipos y análisis político y económico.</span>
        </div>
      </header>

      <header className="Formacion" id="formacion">
         <span className="TituloElemento">Formación</span>

         <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoDitella}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Licenciatura en economía</span>
              <span className="descIzquierda">Este es un texto provisorio para usarse en el wireframe, pero en el trabajo final sería reemplazado por información.
Este es un texto provisorio para usarse en el wireframe, pero en el trabajo final sería reemplazado por información.</span>
          </div>
        </div>

        <div className="elementoIzquierda">
          <img className="fotoIzquierda" src={fotoOrt}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Secundaria en Orientación TICs</span>
              <span className="descIzquierda">Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcos Texto que va a hacer MArcosTexto que va a hacer MArcosTexto que va a hacer MArcos</span>
          </div>
        </div>
      </header>


      <header className="misProyectos" id='misProyectos'>
        <span className="TituloElemento">Mis proyectos</span>
        
        <div className="elementoDerecha">
          <div className="textoDerecha">
              <span className="subtitulo">We-Play</span>
              <span className="descDerecha">Una aplicación en la que se pueden crear y compartir distintos juegos para jugar entre usuarios. La aplicación permite crear y jugar adivinanzas de palabras, crucigramas y cuastionarios, en la que me encargué del diseño de pantallas y estructura.</span>
          </div>
          <img className="fotoDerecha" src={fotoRelleno}></img>
        </div>

        <div className="elementoDerecha">
          <div className="textoDerecha">
              <span className="subtitulo">ApocalipTIC</span>
              <span className="descDerecha">Juego tower defense situado en una escuela, en la que el objetivo es sobrevivir por 30 rondas utilizando distintas torretas tematizadas. Trabajé en conjunto con otro diseñador, y me encargué del arte de enemigos e interfaz de usuario.</span>
          </div>
          <img className="fotoDerecha" src={fotoRelleno}></img>
        </div>

        <div className="elementoDerecha">
          <div className="textoDerecha">
              <span className="subtitulo">Statill</span>
              <span className="descDerecha">Aplicación para digitalización de comercios e interacción entre usuarios y compradores efectivamente. Además de diseñar la interfaz de la misma, colaboré en la gestión del equipo y en tareas de programación frontend.</span>
          </div>
          <img className="fotoDerecha" src={fotoRelleno}></img>
        </div>
      </header>

      <header className="Habilidades" id='habilidades'>
        <span className="TituloElemento">Habilidades</span>

        <div className="GridHabilidades">
        {habilidades.map((h) => (
        <div className="habilidad" key={h.id}>
          <img src={h.image} className="habilidadFoto" />
          <span className="habilidadTexto">{h.texto}</span>
        </div>
         ))}
        </div>
      </header>

      <header className='Contacto'>
        <span className='minitexto'>Félix Rozitchner</span>
        <div className='textoContacto'>
        <div className='contactoIzquierda'>
          <span className='minitexto'>LinkedIn</span>
          <span className='minitexto'>YouTube</span>
          <span className='minitexto'>Instagram</span>
          <span className='minitexto'>X/Twitter</span>
        </div>
        <div className='contactoDerecha'>
          <span className='minitexto'>Contacto:</span>
          <span className='minitexto'>+54 911 6948-0665</span>
          <span className='minitexto'>felixrozitchner@gmail.com</span>
        </div>
        </div>
      </header>

    </div> 
  );
}

export default App;
