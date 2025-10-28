import logo from './logo.svg';
import './App.css';

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
        <image className='FotoPerfil'></image>
      </header>
    </div>
  );
}

export default App;
