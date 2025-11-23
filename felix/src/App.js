
import './App.css';
import fotoperfil from './images/PHOTO-2025-11-22-20-25-39.jpg';
import fotoDitella from './images/image 4.png';
import fotoOrt from './images/image 5.png';
import Ellipse1 from './images/Ellipse 4.png';
import Ellipse2 from './images/Ellipse 5.png';
import fotoWePlay from './images/image 16.png';
import fotoApocalipTIC from './images/image 17.png';
import fotoStatill from './images/image 18.png';
import python from './images/image 19.png';
import c from './images/image 20.png';
import figma from './images/image 21.png';
import analisis from './images/image 22.png';
import informes from './images/image 23.png';
import politica from './images/image 15.png';

import { useEffect } from 'react';

function App() {

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // progress = how visible the element is (0 to 1)
        const progress = entry.intersectionRatio;
        entry.target.style.setProperty("--progress", progress);
      });
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // makes animation smooth
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  const habilidades = [
    { id: 1, name: "Python", image: python, texto: "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código." },
    { id: 2, name: "C#", image: c, texto: "C# es un lenguaje de programación moderno, orientado a objetos y desarrollado por Microsoft para escribir código de alto rendimiento.." },
    { id: 3, name: "Figma", image: figma, texto: "Plataforma utilizada para el desarrollo de interfaces. Es la principal herramienta online de UX/UI." },
    { id: 4, name: "Análisis macroeconómico", image: analisis, texto: "El análisis macroeconómico estudia las variables económicas a gran escala, como el PIB, la inflación y el desempleo." },
    { id: 5, name: "Elaboración de informes", image: informes, texto: "Redacción de informes economicos claros y precisos que traduzcan datos complejos en recomendaciones accesibles para los clientes." },
    { id: 6, name: "Diseño de políticas públicas", image: politica, texto: "Esto es un proceso mediante el cual se planifica, formula y ejecuta una medida gubernamental o programa destinado a influir en la economía de un país. " },
  ];

  return (
    <div className="App">
      <img src={Ellipse1} className="Ellipse Ellipse1" />
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

        <div className="elementoIzquierda scroll-animate myElement">
          <img className="fotoIzquierda" src={fotoDitella}></img>
          <div className="textoIzquierda">
            <span className="subtitulo">Licenciatura en economía</span>
            <span className="descIzquierda">La Licenciatura en Economía de la Universidad Torcuato Di Tella ofrece una sólida formación científica en el desarrollo de herramientas analíticas y cuantitativas de vanguardia. Los graduados  de esta carrera son muy demandados por sus habilidades y rigor analítico tanto en el sector público como en el privado.
            </span>
          </div>
        </div>
        
        <div className="elementoIzquierda scroll-animate myElement">
          <img className="fotoIzquierda" src={fotoOrt}></img>
          <div className="textoIzquierda">
            <span className="subtitulo">Secundaria en Orientación TICs</span>
            <span className="descIzquierda">Hice 3 años de educación especializada en ORT sede belgrano, en donde aprendí conocimientos básicos de programación, diseño digital y gestión de proyectos en equipo. Participé en distintas exposiciones donde exhibí distintas aplicaciones realizadas en plazos de 5 a 8 meses.</span>
          </div>
        </div>
        <img src={Ellipse2} className="Ellipse Ellipse2" />
      </header>

      <header className="misProyectos" id='misProyectos'>
        <span className="TituloElemento">Mis proyectos</span>

        <div className="proyectos">
          <div className="Tarjeta">
            <div className="CuadroTarjeta scroll-animate myElement">
              <img className="fotoTarjeta" src={fotoWePlay}></img>
              <span className="tituloTarjeta">We-Play</span>
              <span className="textoTarjeta">Una aplicación de escritorio en la que se pueden crear y compartir distintos juegos entre usuarios. Permite crear y jugar adivinanzas de palabras, crucigramas y cuestionarios. Yo me encargué del diseño de pantallas y estructura.</span>
            </div>
          </div>

          <div className="Tarjeta">
            <div className="CuadroTarjeta scroll-animate myElement">
              <img className="fotoTarjeta" src={fotoStatill}></img>
              <span className="tituloTarjeta">Statill</span>
              <span className="textoTarjeta">Aplicación para digitalización de comercios e interacción entre usuarios y compradores efectivamente. Además de diseñar la interfaz de la misma, colaboré en la gestión del equipo y en tareas de programación frontend.</span>
            </div>
          </div>

          <div className="Tarjeta">
            <div className="CuadroTarjeta scroll-animate myElement">
              <img className="fotoTarjeta" src={fotoApocalipTIC}></img>
              <span className="tituloTarjeta">ApocalipTIC</span>
              <span className="textoTarjeta">Juego tower defence tematizado en una escuela en el que hay que sobrevivir por 30 rondas usando distintas torretas. Hice este juego en medio año con un equipo de otro diseñador y 2 programadores. Diseñé las interfaces y los personajes.</span>
            </div>
          </div>
        </div>

      </header>

      <header className="Habilidades" id='habilidades'>
        <span className="TituloElemento">Habilidades</span>

        <div className="GridHabilidades">
          {habilidades.map((h) => (
            <div className="habilidad scroll-animate myElement" key={h.id}>
              <div className="habilidadFotoWrapper">
                <img src={h.image} className="habilidadFoto" />
              </div>
              <span className="habilidadTitulo">{h.name}</span>
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
