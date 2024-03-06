import { useState } from "react";
import { createContext } from "react";
import Principal from "./Principal/Principal";
import Aside from "./Aside/Aside";
import Presentacion from "./Presentacion/Presentacion";
import "./App.css";

export const ModeTheme = createContext("light");

let theme;

function App() {
  let props = {
    nombre: "Aarón",
    apellido1: "Sanz",
    apellido2: "Dorta",
    tlf: "603895431",
    email: "aaronyo82@gmail.com",
    modo: changeMode,
  };

  const [mode, setMode] = useState(true);

  function changeMode() {
    setMode(!mode);

    mode ? (theme = "dark") : (theme = "light");

    document.querySelector("body").className = theme;
  }

  return (
    <>
      <ModeTheme.Provider value={theme}>
        <Aside />
        <Principal data={props}></Principal>
        <Presentacion />
      </ModeTheme.Provider>
    </>
  );
}

export default App;
