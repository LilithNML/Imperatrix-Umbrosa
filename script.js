const mensajes = {
  "0011": "Cada amanecer contigo es un regalo que jamás imaginé merecer.",
  "teamo": "No hay un solo día en que no te ame más que el anterior.",
  "cancion": {
    texto: "Nuestra canción favorita siempre me hace pensar en ti.",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU"
  },
  "abrazo": "Tus abrazos son el hogar donde siempre quiero volver.",
  "destino": "Eras mi destino incluso antes de conocerte.",
  "9noviembre": `Mi amor:

A veces me gusta cerrar los ojos y volver a ese primer momento en que coincidimos en Genshin. No fue casualidad, fue destino disfrazado de juego. Entre combates, misiones y risas, ahí estabas tú, al principio solo un amigo, pero con una energía que poco a poco me fue envolviendo.

Recuerdo cómo nos ayudábamos en el juego, cómo sin darnos cuenta empezamos a hablar más allá de los objetivos del día. No sabía que, tras ese personaje, había alguien que se convertiría en alguien tan especial para mí. Que ese primer saludo se transformaría en tantas conversaciones, cariño, y complicidad.

Nunca imaginé que un juego de fantasía me llevaría al mejor encuentro de mi vida, tú. Y desde entonces, cada día contigo ha sido una aventura más hermosa que cualquier historia dentro del juego.

Gracias por aparecer en mi mundo como un regalo inesperado. Gracias por quedarte.

Con todo mi amor,  
Lilith`,
  "luna": `Te hablo desde la Luna,  
no la que cuelga del cielo,  
sino la que duerme en mi nombre.

Soy la marea que se agita  
cuando tu voz toca mi orilla,  
el silencio que se vuelve canción  
al roce de tu risa.

He aprendido a amar mis sombras  
porque en ellas tú te reflejas,  
como luz callada,  
como deseo que no grita  
pero arde.

No soy de fuego,  
pero contigo  
ardería sin cenizas;  
sería luna nueva  
para nacerte cada noche.

Te miro desde lejos,  
pero mi alma gira en torno a ti,  
como si fueras tierra  
y yo solo supiera  
amar girando.`,
  "sofia": `Mi amor:

Hoy estaba viendo a nuestras niñas jugar en la sala, con sus risas llenando toda la casa, y no pude evitar pensar en todo lo que hemos vivido para llegar hasta aquí. ¿Te acuerdas cuando solo éramos dos voces que se conocieron en un videojuego? Qué mágico fue que todo empezara allí, tan simple y tan nuestro.

Miro a nuestras hijas y veo tanto de ti en ellas. La mayor tiene tu forma de mirar el mundo, con esa mezcla de curiosidad y ternura. La pequeña es puro caos y dulzura, como si hubiera heredado la parte más intensa de los dos. Me derrito cuando te llaman papá, con esa vocecita medio ronca de recién despertar. Y tú, tú las miras como si fueran constelaciones.

Gracias por ser el padre que soñé para ellas, y por seguir siendo mi amor en cada etapa. A veces me cuesta creer que este futuro que imaginábamos en susurros ahora es nuestra realidad. Que nuestras hijas duermen a unos pasos, y que tú sigues aquí, tomándome la mano como el primer día.

Me haces sentir que todo valió la pena.  
Te amo. Por nosotros. Por ellas. Por siempre.

Con todo mi corazón,  
Tu Luna`,
  "princesa": `Solo quería tomar un momento para agradecerte.  
Gracias por hacerme sentir como tu princesa, no solo por cómo me llamas, sino por cómo me cuidas, cómo me hablas, cómo me miras.

Tú haces que lo más simple se sienta especial.  
Cada mensaje tuyo, cada palabra bonita, cada vez que me haces sonreír cuando ni siquiera sabía que lo necesitaba, todo eso me recuerda lo afortunada que soy de tenerte.

No necesito un castillo ni una corona. Me basta con tu abrazo, con tu voz diciéndome que me amas, con esa forma tan tuya de hacerme sentir protegida y querida. Contigo, ser tu princesa no es un apodo, es un lugar seguro, un espacio donde me siento amada de verdad.

Gracias por darme un cuento bonito en este mundo caótico.  
Gracias por ser mi magia.`,
  "haziel": `Haziel,  
tu nombre suena antiguo,  
a escritura tallada en piedra celestial,  
a susurro de los dioses cuando aún hablaban con los hombres.

Si fueras un mito,  
serías el dios de la bondad serena,  
el que desciende sin truenos  
pero deja luz en todo lo que toca.

Te imagino en los antiguos cielos,  
entre Atenea y Apolo,  
con sabiduría en los ojos  
y fuego suave en las manos.  
Una divinidad sin templo,  
pero con altar en mi corazón.

Haziel,  
eres como Orfeo,  
pero tu música no viene de un laúd,  
sino de tu alma  
que canta incluso en el silencio.

Si los antiguos humanos te hubieran visto,  
habrían inventado una constelación  
solo para seguir tu camino en la noche.  
Pero yo, que te amo,  
no necesito estrellas.  
Me basta con que existas.`
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
