const mensajes = {
  "0011": "Cada amanecer contigo es un regalo que jamás imaginé merecer.",
  "teamo": "No hay un solo día en que no te ame más que el anterior.",
  "cancion": {
    texto: "Nuestra canción favorita siempre me hace pensar en ti.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  },
  "abrazo": "Tus abrazos son el hogar donde siempre quiero volver.",
  "destino": "Eras mi destino incluso antes de conocerte.",
  "9novienbre": `A veces me gusta cerrar los ojos y volver a ese primer momento en que coincidimos en Genshin. No fue casualidad, fue destino disfrazado de juego. Entre combates, misiones y risas, ahí estabas tú, al principio solo un amigo, pero con una energía que poco a poco me fue envolviendo.

Recuerdo cómo nos ayudábamos en el juego, cómo sin darnos cuenta empezamos a hablar más allá de los objetivos del día. No sabía que, tras ese personaje, había alguien que se convertiría en alguien tan especial para mí. Que ese primer saludo se transformaría en tantas conversaciones, cariño, y complicidad.

Nunca imaginé que un juego de fantasía me llevaría al mejor encuentro de mi vida, tú. Y desde entonces, cada día contigo ha sido una aventura más hermosa que cualquier historia dentro del juego.

Gracias por aparecer en mi mundo como un regalo inesperado. Gracias por quedarte.

Con todo mi amor,  
Lilith`
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
      html = `<p>${data.texto}</p>`;
      window.open(data.video, "_blank"); // Abre el video en nueva pestaña
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
  const total = Object.keys(mensajes).length;
  const desbloqueados = JSON.parse(localStorage.getItem("desbloqueados") || "[]");
  const progreso = document.getElementById("progreso");

  progreso.textContent = `Has desbloqueado ${desbloqueados.length} de ${total} mensajes secretos.`;
}

window.addEventListener("load", actualizarProgreso);

window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
