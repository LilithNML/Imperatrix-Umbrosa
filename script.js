const mensajes = {
  "0011": "Cada amanecer contigo es un regalo que jamás imaginé merecer.",
  "tequiero": "No hay un solo día en que no te ame más que el anterior.",
  "cancion": {
    texto: "Nuestra canción favorita siempre me hace pensar en ti.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  },
  "abrazo": "Tus abrazos son el hogar donde siempre quiero volver.",
  "fotoespecial": {
    texto: "Esta imagen siempre me recuerda a ti.",
    imagen: "archivo-sorpresa.png"
  },
  "foto": {
    texto: "Esta imagen siempre me recuerda a ti.",
    imagen: "Imagen de prueba.jpg"
  },
  "fotohorizontal": {
    texto: "Esta imagen siempre me recuerda a ti.",
    imagen: "1000150104.jpg"
  },
  "destino": "Eras mi destino incluso antes de conocerte.",
  "regalos": {
    texto: "Aquí tienes un regalo especial, solo para ti.",
    archivo: "archivo-sorpresa.png"
  },
  "wikipedia": {
    texto: "Haz clic en el enlace para ver tu sorpresa...",
    link: "https://es.m.wikipedia.org/wiki/Lilit"
  }
};

// Elimina acentos, espacios y convierte a minúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function checkCode() {
  const input = document.getElementById("codeInput");
  const code = normalizarTexto(input.value);
  const contenido = document.getElementById("contenido");
  const correctSound = document.getElementById("correctSound");
  const incorrectSound = document.getElementById("incorrectSound");

  if (mensajes.hasOwnProperty(code)) {
    const data = mensajes[code];
    let desbloqueados = JSON.parse(localStorage.getItem("desbloqueados") || "[]");

    if (!desbloqueados.includes(code)) {
      desbloqueados.push(code);
      localStorage.setItem("desbloqueados", JSON.stringify(desbloqueados));
    }

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
        const a = document.createElement("a");
        a.href = data.archivo;
        a.download = data.archivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      if (data.imagen) {
        mostrarImagenModal(data.imagen);
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

function actualizarProgreso() {
  const progreso = document.getElementById("progreso");
  const total = Object.keys(mensajes).length;
  const desbloqueados = JSON.parse(localStorage.getItem("desbloqueados") || "[]");
  if (progreso) {
    progreso.textContent = `Has desbloqueado ${desbloqueados.length} de ${total} mensajes secretos.`;
  }
}

window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });

window.addEventListener("load", () => {
  // Permitir que Enter también desbloquee el código
document.getElementById("codeInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que recargue la página o haga otra acción por defecto
    checkCode(); // Llama a la función para verificar el código
  }
});
  actualizarProgreso();
});

function mostrarImagenModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function cerrarModal() {
  document.getElementById("imageModal").style.display = "none";
}
