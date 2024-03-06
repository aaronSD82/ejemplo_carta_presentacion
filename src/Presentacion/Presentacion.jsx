import { useContext } from "react";
import { ModeTheme } from "../App";

function Presentacion() {
  const theme = useContext(ModeTheme);
  return (
    <>
      <div id="info" className={theme}>
        <h2 style={{ marginTop: "25px" }}>Carta de presentaci&oacute;n</h2>
        <p>
          Hola, me llamo Aar&oacute;n y tengo 41 años, desde los 18 años en que
          termin&eacute; de estudiar electricidad hasta hoy me he dedicado dicha
          profesi&oacute;n.
        </p>
        <p>
          Siempre me ha apasionado todo lo relacionado con la tecnolog&iacute;a
          y sobre todo con los ordenadores y en el año 2016 me decidí a hacer el
          acceso a la univeridad porque quer&iacute;a empezar a estudiar
          ingeniería informática y aprob&eacute; el acceso.
        </p>
        <p>
          Por motivos laborales no pude inscribirme en la universidad pero
          ten&iacute;a muchas ganas de aprender y empec&eacute; a ver cursos de
          programación en C. Y me encant&oacute;. Me gustan los juegos de
          acertijos y esto era como el mejor juego de acertijos que hab&iacute;a
          visto mezclado con la creaci&oacute;n de automatismos que es lo que
          más me gusta de mi profesión, vamos que amor a primera vista.
        </p>
        <p>
          Luego en el 2017 ya me pude apuntar a la UNED y me di cuenta con con
          mi trabajo de entonces que viajaba mucho se me hizo muy cuesta arriba
          y lo dejé en unos meses. Pues la otra opción era un ciclo superior de
          desarrollo web o multiplataforma que era lo que me gustaba de verdad y
          conseguí plaza el curso 22/23, y aquí estoy cursando el segundo año.
        </p>
        <p>
          Mi principal motivación para empezar con todo esto es simplemente que
          me encanta, no era tanto un cambio laboral o más dinero. Es que
          realmente me gusta mucho programar.
        </p>
        <p>
          He hecho algún mini-proyecto en Java que consiste en un CRUD a una
          base de datos con una interfaz con swing. Con HTML, CSS y JavaScript
          tengo hechos varios ejemplos de consumo de API´s y dos juegos muy
          sencillos. También he practicado algo con React con una To-do-list y
          esta carta de presentacíon.
        </p>
        <p>
          Ahora estoy haciendo un curso de Spring y siempre ando mirando vídeos,
          tutoriales, blogs, GPT, y lo que pille para seguir aprendiendo ante
          las dudas que me surgen o solucionar problemas que se me presentan.
        </p>
        <p>
          Se que a lo mejor no soy un perfil idóneo para un junior pero le
          aseguro que las ganas y la motivación las tengo por las nubes. Y con
          esta carta más que explicar un poco lo que se hacer, es poner un buen
          contexto de porque estoy aquí y como he llegado.
        </p>
        <p>Un saludo y mil gracias por la molestia de leer mi carta.</p>
      </div>
    </>
  );
}

export default Presentacion;
