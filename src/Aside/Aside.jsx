import { useContext } from "react";
import { ModeTheme } from "../App";
import foto from "/FotoAaron.jpg";
import pdf from "/adobe_pdf_document_14979.png";
import download_pdf from "/Curriculum_dev.pdf";

function downloadPDF() {
  let newLink = document.createElement("a");
  newLink.href = download_pdf;
  newLink.setAttribute("download", "curriculum.pdf");
  newLink.style.display = "none";
  document.body.appendChild(newLink);
  newLink.click();

  document.body.removeChild(newLink);
}

function Aside() {
  const theme = useContext(ModeTheme);

  return (
    <>
      <aside id="aside" className={theme}>
        <img src={foto} alt="foto" id="photo" />
        <p style={{ marginTop: "50px", fontSize: "2em" }}>De</p>
        <p>Aarón</p>
        <p>Sanz</p>
        <hr />
        <p style={{ fontSize: "2em" }}>A</p>
        <p>Reclutador</p>
        <hr />
        <a
          id="downloadLink"
          href="#"
          style={{ display: "flex" }}
          onClick={(e) => {
            e.preventDefault();

            downloadPDF();
          }}
        >
          <img src={pdf} alt="pdf" />
          Descargar Curriculum
        </a>
      </aside>
    </>
  );
}

export default Aside;
