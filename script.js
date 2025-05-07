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
      html = `<p>${data.texto}</p><br><iframe width="100%" height="315" src="${data.video}" frameborder="0" allowfullscreen></iframe>`;
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