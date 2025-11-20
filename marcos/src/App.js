import logo from './logo.svg';
import './App.css';
import fotoperfil from './images/image 1.png';
import fotoRelleno from './images/image 2.png';
import fotoDitella from './images/image 25.png';
import fotoOrt from './images/image 5.png';
import fotoImage from './images/image 6.png';
import Ellipse1 from './images/Ellipse 1 (1).png'
import fotoApocaliptic from './images/image 17.png';
import fotoGetOffMyTrain from './images/image 24.png';
import Ellipse2 from './images/Group 10.png';
import fotoUnity from './images/image 30.png';
import fotoAsesprite from './images/image 29.png';
import fotoFLStudio from './images/image 28.png';

import { useEffect } from "react";


function App() {

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
  
    function updateElements() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
    
      // --- PARALLAX FOR ELLIPSES ---
      document.querySelectorAll(".Ellipse").forEach((el) => {
        const speed = 0.05;          // Try 0.1 to 0.5 for different depths
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    
      // --- REVEAL SCROLL PROGRESS EFFECT ---
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
    
        const start = windowHeight * 0.9;
        const end = windowHeight * 0.2;
    
        let progress = (start - elementTop) / (start - end);
        progress = Math.min(Math.max(progress, 0), 1);
    
        const translate = 100 * (1 - progress);
    
        el.style.opacity = progress;
        el.style.transform = `translateY(${translate}px)`;
      });
    }
  
    window.addEventListener("scroll", updateElements);
    window.addEventListener("resize", updateElements);
    updateElements(); // run on load
  
    return () => {
      window.removeEventListener("scroll", updateElements);
      window.removeEventListener("resize", updateElements);
    };
  }, []);
  
  
  return (
    <div className="App">
      <header className="Arriba">
        <div className="Nombre">
          <span>Marcos</span>
          <span>Tannenbaum</span>
        </div>
        <div className='Linea1'></div>
        <div className='Atajos'>
          <button className="botonMisProyectos" onClick={() => scrollToSection('misProyectos')}>Mis proyectos</button>
          <button className="botonFormacion" onClick={() => scrollToSection('formacion')}>Formación</button>
          <button className="botonHabilidades" onClick={() => scrollToSection('habilidades')}>Habilidades</button>
        </div>
      </header>

      <header className='Perfil'>
        <div className='TextoPerfil'>
           <span className='Titulo'>Desarrollador de videojuegos independiente</span>
           <span className='Descripcion'>Estudiante de licenciatura en Tecnología Digital UTDT y tecnicatura en Programación Avanzada de Videojuegos.</span>
        </div>
        <img className='FotoPerfil' src={fotoperfil}></img>
      </header>

      <header className="misProyectos" id='misProyectos'>
      <img src={Ellipse1} className="Ellipse Ellipse1"/>
        <span className="TituloElemento">Mis proyectos</span>
        <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoApocaliptic}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">ApocalipTIC</span>
              <span className="descIzquierda">Juego tower defence tematizado en una escuela, en el que hay que sobrevivir por 30 rondas usando distintas torretas. Hice este juego en 1 año con un equipo de otro programador y 2 diseñadores. Programé las torretas y el sistema de construcción y mejora de las mismas.</span>
          </div>
        </div>

        <div className="elementoDerecha reveal">
          <div className="textoDerecha">
              <span className="tituloDerecha">Get Off My Train</span>
              <span className="descDerecha">Juego estilo roguelike en el que controlas a un maquinistaa de tren que tiene que despejar infinitos vagones llenos de enemigos con armas y habilidades aleatorias. Hice este juego en un plazo de 4 meses totalmente por mi cuenta, haciendo diseño, música y programación.</span>
          </div>
          <img className="fotoDerecha" src={fotoGetOffMyTrain}></img>
        </div>
      </header>

      <header className="Formacion" id="formacion">
         <span className="TituloElemento">Formación</span>

         <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoDitella}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Licenciatura en Tecnología Digital</span>
              <span className="descIzquierda">Estoy estudiando en UTDT hace 2 años y me estoy formando en diversas tecnologías como C, C++, C#,  Python, JS, HTML, CSS. Además la formación se complementa con una persspectiva de emprendedurismo para prepararse en la cultura laboral empresarial.</span>
          </div>
        </div>

        <div className="elementoDerecha reveal">
          <div className="textoDerecha">
              <span className="tituloDerecha">Secundaria en Orientación TICs</span>
              <span className="descDerecha">Completé el colegio secundario en ORT con un promedio de 9.20, estudiando los últimos 3 años en una orientación en TICs. En al misma aprendí conocimientos básicos de programación, diseño y Unity, además de cómo gestionar proyectos en equipo.</span>
          </div>
          <img className="fotoDerecha" src={fotoOrt}></img>
        </div>

        <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoImage}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Tecniciatura en programación avanzada de videojuegos</span>
              <span className="descIzquierda">Hice un curso de 4 años complementario en Image Campus, en el que aprendí aspectos más específicos del desarrollo de videojuegos, la gestión y funcionamiento de equipos de desarrollo, la colaboración entre diseñadores, escritores y programadores, y cómo avanzar en la industria desde cero.</span>
          </div>
        </div>
      </header>

      <header className="Habilidades" id='habilidades'>
        <img src={Ellipse2} className="Ellipse Ellipse2"/>
        <span className="TituloElemento">Habilidades</span>

        <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoUnity}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Programación orientada a objetos</span>
              <span className="descIzquierda">Sé manejar clases y métodos en distintos lenguajes, principalmente C# adaptado a Unity. También tengo conocimientos en Python, C++, JS, HTML y CSS. Aprendí a desarrollarme en tareas de Frontend y Backend, tanto mediante educación formal como con aprendizaje autodidacta.</span>
          </div>
        </div>

        <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoAsesprite}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Ilustración en pixel art</span>
              <span className="descIzquierda">Aprendí por mi cuenta a diseñar en estilo 2D pixel art, diseño que usé para crear mis juegos. Amplié mis conocimientos en Image Campus, pero principalmente aprendí gracias a práctica y asistencia en foros públicos, especializándome en la herramienta Asesprite.</span>
          </div>
        </div>

        <div className="elementoIzquierda reveal">
          <img className="fotoIzquierda" src={fotoFLStudio}></img>
          <div className="textoIzquierda">
              <span className="subtitulo">Producción musical</span>
              <span className="descIzquierda">Tomé cursos de producción en Arjaus para entender como funcionan los principales DAWs, como Ableton Live y FL Studio 22. Suelo producir la música para mis juegos, incluyendo los proyectos ya mencionados ApocalipTIC y Get Off My Train.</span>
          </div>
        </div>
      </header>

      <header className='Contacto'>
        <span className='minitexto'>Marcos Tannenbaum</span>
        <div className='textoContacto'>
        <div className='contactoIzquierda'>
          <span className='minitexto'>LinkedIn</span>
          <span className='minitexto'>YouTube</span>
          <span className='minitexto'>Instagram</span>
          <span className='minitexto'>TikTok</span>
          <span className='minitexto'>X/Twitter</span>
        </div>
        <div className='contactoDerecha'>
          <span className='minitexto'>Contacto:</span>
          <span className='minitexto'>+54 911 6685-0342</span>
          <span className='minitexto'>marcostannenbaum@gmail.com</span>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
