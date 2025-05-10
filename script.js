const mensajes = {
  "flor": "Eres el amor más bonito que la vida me regaló.",
  "musica": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "regalo": "descargar:archivos/archivo-sorpresa.png"
};

const inputCodigo = document.getElementById("codigoInput");
const boton = document.getElementById("botonCodigo");
const resultado = document.getElementById("resultado");
const audioCorrecto = new Audio("audio/correcto.mp3");
const audioIncorrecto = new Audio("audio/incorrecto.mp3");

function mostrarMensaje(texto) {
  resultado.textContent = texto;
  resultado.classList.add("mostrar");
  setTimeout(() => {
    resultado.classList.remove("mostrar");
  }, 4000);
}

boton.addEventListener("click", () => {
  const clave = inputCodigo.value.trim().toLowerCase();

  if (mensajes[clave]) {
    audioCorrecto.play();
    const valor = mensajes[clave];

    if (valor.startsWith("descargar:")) {
      const archivo = valor.replace("descargar:", "");
      const enlace = document.createElement("a");
      enlace.href = archivo;
      enlace.download = archivo.split("/").pop();
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
      mostrarMensaje("Descargando archivo sorpresa...");
    } else if (valor.startsWith("https://")) {
      window.open(valor, "_blank");
      mostrarMensaje("Abriendo video en otra pestaña...");
    } else {
      mostrarMensaje(valor);
    }
  } else {
    audioIncorrecto.play();
    mostrarMensaje("Código incorrecto. Intenta de nuevo.");
  }

  inputCodigo.value = "";
});
