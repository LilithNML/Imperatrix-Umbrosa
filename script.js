const mensajes = {
  "amanecer": "Cada amanecer contigo es un regalo que jamás imaginé merecer.",
  "teamo": "No hay un solo día en que no te ame más que el anterior.",
  "cancion": {
    texto: "Nuestra canción favorita siempre me hace pensar en ti.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  },
  "abrazo": "Tus abrazos son el hogar donde siempre quiero volver.",
  "destino": "Eras mi destino incluso antes de conocerte."
};

function checkCode() {
  const input = document.getElementById("codeInput");
  const code = input.value.trim().toLowerCase();
  const contenido = document.getElementById("contenido");

  // Reproducir sonido de código correcto
  const correctSound = document.getElementById("correctSound");
  const incorrectSound = document.getElementById("incorrectSound");

  if (mensajes.hasOwnProperty(code)) {
    const data = mensajes[code];
    let html = '';

    if (typeof data === 'string') {
      html = `<p>${data}</p>`;
    } else if (typeof data === 'object') {
      html = `<p>${data.texto}</p><br><p><a href="${data.video}" target="_blank" rel="noopener noreferrer">Haz clic aquí para ver el video en YouTube</a></p>`;
window.open(data.video, "_blank");
    }

    contenido.innerHTML = html;
    contenido.classList.add("show");

    // Reproducir sonido de éxito
    correctSound.play();
  } else {
    contenido.innerHTML = "<p style='color: red;'>Código no válido. Intenta con otro.</p>";
    contenido.classList.add("show");

    // Reproducir sonido de error
    incorrectSound.play();
  }

  input.value = "";
}
window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
