const mensajes = {
  "0011": "Cada amanecer contigo es un regalo que jamás imaginé merecer.",
  "teamo": "No hay un solo día en que no te ame más que el anterior.",
  "cancion": {
    texto: "Nuestra canción favorita siempre me hace pensar en ti.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  },
  "abrazo": "Tus abrazos son el hogar donde siempre quiero volver.",
  "destino": "Eras mi destino incluso antes de conocerte.",
  "regalo": {
    texto: "Aquí tienes un regalo especial, solo para ti.",
    archivo: "regalo.pdf"
  },
  "sorpresa": {
    texto: "Haz clic en el enlace para ver tu sorpresa...",
    link: "https://example.com/sorpresa.html"
  }
};

function checkCode() {
  const input = document.getElementById("codeInput");
  const code = input.value.trim().toLowerCase();
  const contenido = document.getElementById("contenido");
  const correctSound = document.getElementById("correctSound");
  const incorrectSound = document.getElementById("incorrectSound");

  if (mensajes.hasOwnProperty(code)) {
    let desbloqueados = JSON.parse(localStorage.getItem("desbloqueados") || "[]");

    if (!desbloqueados.includes(code)) {
      desbloqueados.push(code);
      localStorage.setItem("desbloqueados", JSON.stringify(desbloqueados));
    }

    const data = mensajes[code];
    let html = '';

    if (typeof data === 'string') {
      html = `<p>${data}</p>`;
    } else if (typeof data === 'object') {
      html = `<p>${data.texto || ''}</p>`;

      if (data.video) {
        window.open(data.video, "_blank");
      }

      if (data.link) {
        window.open(data.link, "_blank");
      }

      if (data.archivo) {
        const link = document.createElement("a");
        link.href = data.archivo;
        link.download = data.archivo;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    contenido.innerHTML = html;
    contenido.classList.add("show");
    correctSound.play();
  } else {
    contenido.innerHTML = "<p style='color: red;'>Código no válido. Intenta con otro.</p>";
    contenido.classList.add("show");
    incorrectSound.play();
  }

  input.value = "";
  actualizarProgreso();
}
