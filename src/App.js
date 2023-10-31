import "./App.css";
import Testimonio from "./components/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          Esto es lo que dicen nuestros antiguos alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="1"
          cargo="Ingeniero de software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de las cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida"
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="2"
          cargo="Ingeniera de software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble"
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="3"
          cargo="Ingeniera de software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó atascado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify"
        />
      </div>
    </div>
  );
}

export default App;
