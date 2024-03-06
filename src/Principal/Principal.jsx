import { useContext } from "react";
import { ModeTheme } from "../App";
import github from "/github_6424084.png";
import phone from "/phone-flip_9768623.png";
import mail from "/envelope_3916631.png";

/* eslint-disable react/prop-types */
function Principal({ data }) {
  const { nombre, apellido1, apellido2, tlf, email, modo } = data;
  const theme = useContext(ModeTheme);

  return (
    <>
      <div id="name" className={theme}>
        <aside id="user">
          <p style={{ marginTop: "25px" }} className={theme}>
            {nombre}
          </p>
          <p className={theme}>{apellido1}</p>
          <p className={theme}>{apellido2}</p>
          <small className={theme}>Novato</small>
        </aside>
        <div id="my_data" className={theme}>
          <a href="https://github.com/aaronSD82" target="blank">
            <img src={github} alt="image_github" />
            Mi Git-hub
          </a>
          <span style={{ display: "flex", color: "#616161" }}>
            <img src={phone} alt="tlf" />
            {tlf}
          </span>
          <span style={{ display: "flex", color: "#616161" }}>
            <img src={mail} alt="mail" />
            {email}
          </span>
        </div>
        <div id="toggle_night_mode">
          <button id="toggle" onClick={modo} className={theme}></button>
        </div>
      </div>
    </>
  );
}

export default Principal;
