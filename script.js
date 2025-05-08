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
  const correctSound = document.getElementById("correctSound");
  const incorrectSound = document.getElementById("incorrectSound");

  const modal = document.getElementById("modal");
  const modalMensaje = document.getElementById("modalMensaje");

  if (mensajes.hasOwnProperty(code)) {
    const data = mensajes[code];
    let html = "";

    if (typeof data === "string") {
      html = `<p>${data}</p>`;
    } else if (typeof data === "object") {
      html = `<p>${data.texto}</p><p style="color:#9A8C8B;">(Video abierto en otra pestaña)</p>`;
      setTimeout(() => {
        const videoUrl = data.video.replace("embed/", "watch?v=");
        window.open(videoUrl, "_blank");
      }, 100);
    }

    modalMensaje.innerHTML = html;
    modal.style.display = "flex";
    correctSound.play();
  } else {
    modalMensaje.innerHTML = `<p style='color: red;'>Código no válido. Intenta con otro.</p>`;
    modal.style.display = "flex";
    incorrectSound.play();
  }

  input.value = "";
}

function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
  input.value = "";
}
window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
