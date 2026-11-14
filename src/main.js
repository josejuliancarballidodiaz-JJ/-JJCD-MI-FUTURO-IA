
import './style.css';

const app = document.querySelector('#app');

const style = document.createElement('style');
style.textContent = `
*{box-sizing:border-box}
body{margin:0;background:#090e1c;color:#f8fafc;font-family:Arial,sans-serif}
.wrap{max-width:950px;margin:auto;padding:24px 16px}
header{display:flex;align-items:center;gap:14px;margin:12px 0 28px}
.logo{width:58px;height:58px;border-radius:16px;background:linear-gradient(135deg,#7668ff,#b14cff);display:grid;place-items:center;font-weight:900;font-size:20px}
h1{font-size:25px;margin:0}
header p{margin:5px 0;color:#aab4cc}
.panel{background:#151d31;border:1px solid #2a3652;border-radius:18px;padding:22px;margin-bottom:18px}
h2{margin-top:0}
label{display:block;margin:17px 0 7px;color:#cbd5e1;font-weight:600}
select,textarea,input[type=text]{width:100%;padding:13px;border-radius:10px;border:1px solid #394766;background:#0d1425;color:#fff;font:inherit}
textarea{resize:vertical}
.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
button{cursor:pointer;padding:14px;border:0;border-radius:10px;background:#7668ff;color:white;font-size:16px;font-weight:700}
#prepare{width:100%;margin-top:22px}
button.secondary{background:#26334e;margin-top:10px;width:100%}
.upload{display:block;padding:16px;border:1px dashed #65749a;border-radius:12px;background:#0d1425;margin-top:8px}
.upload input{display:block;margin-top:10px;max-width:100%}
.result{margin-top:20px;padding:16px;background:#0d1425;border:1px solid #394766;border-radius:12px}
.result pre{white-space:pre-wrap;overflow-wrap:anywhere;color:#dbeafe;font:14px/1.6 Arial,sans-serif}
.note{color:#facc15;line-height:1.5;font-size:14px}
.small{font-size:13px;color:#9eabc3}
footer{text-align:center;color:#8793aa;margin:24px 0;font-size:13px}
@media(max-width:600px){.two{grid-template-columns:1fr}.panel{padding:16px}h1{font-size:21px}}
`;
document.head.appendChild(style);

app.innerHTML = `
<main class="wrap">
  <header>
    <div class="logo">JJCD</div>
    <div>
      <h1>MI FUTURO IA</h1>
      <p>Tu estudio creativo de inteligencia artificial</p>
    </div>
  </header>

  <section class="panel">
    <h2>🎬 ¿Qué quieres crear?</h2>
    <p class="small">Prepara películas, vídeos, imágenes e ideas creativas.</p>

    <label for="mode">Método de creación</label>
    <select id="mode">
      <option>Película completa desde una idea</option>
      <option>Texto a vídeo</option>
      <option>Imagen a vídeo</option>
      <option>Vídeo a vídeo / transformar estilo</option>
      <option>Animar fotografías</option>
      <option>Texto a imagen</option>
      <option>Crear imágenes con referencias visuales</option>
      <option>Usar fotograma inicial y final</option>
      <option>Avatar y sincronización de labios</option>
      <option>Crear guion e historia</option>
    </select>

    <div class="two">
      <div>
        <label for="duration">Duración</label>
        <select id="duration">
          <option>15 segundos</option>
          <option>30 segundos</option>
          <option>1 minuto</option>
          <option>3 minutos</option>
          <option>5 minutos</option>
          <option>10 minutos</option>
          <option>15 minutos</option>
          <option>30 minutos</option>
        </select>
      </div>
      <div>
        <label for="format">Formato</label>
        <select id="format">
          <option>Horizontal 16:9</option>
          <option>Vertical 9:16</option>
          <option>Cuadrado 1:1</option>
        </select>
      </div>
    </div>

    <label for="style">Estilo visual</label>
    <select id="style">
      <option>Cinematográfico realista</option>
      <option>Película familiar</option>
      <option>Animación 3D</option>
      <option>Anime</option>
      <option>Documental</option>
      <option>Suspenso y misterio</option>
      <option>Romántico</option>
      <option>Fantástico</option>
      <option>Terror</option>
    </select>

    <label for="prompt">Describe tu creación</label>
    <textarea id="prompt" rows="5" placeholder="Ejemplo: Una película familiar sobre una mujer que descubre un secreto que cambiará su vida..."></textarea>

    <div class="two">
      <div>
        <label for="language">Idioma</label>
        <select id="language">
          <option>Español</option>
          <option>Inglés</option>
          <option>Francés</option>
          <option>Portugués</option>
        </select>
      </div>
      <div>
        <label for="voice">Narración</label>
        <select id="voice">
          <option>Sin narración</option>
          <option>Voz masculina</option>
          <option>Voz femenina</option>
          <option>Diálogos entre personajes</option>
        </select>
      </div>
    </div>

    <label>Archivos de referencia (opcional)</label>
    <div class="upload">
      <strong>🖼️ Imagen o fotografía</strong>
      <input id="imageFile" type="file" accept="image/*">
    </div>
    <div class="upload">
      <strong>🎞️ Vídeo de referencia</strong>
      <input id="videoFile" type="file" accept="video/*">
    </div>
    <div class="upload">
      <strong>🎵 Audio de referencia</strong>
      <input id="audioFile" type="file" accept="audio/*">
    </div>

    <button id="prepare">✨ Preparar mi creación</button>

    <div id="result" class="result" hidden>
      <h2>Tu proyecto está preparado</h2>
      <pre id="output"></pre>
      <button id="copy" class="secondary">Copiar instrucciones</button>
      <button id="download" class="secondary">Descargar proyecto TXT</button>
    </div>

    <p class="note">
      Importante: esta versión prepara las instrucciones y los archivos de referencia.
      Para generar vídeos o imágenes reales será necesario conectar motores de IA.
      No se te cobrará nada desde esta página.
    </p>
  </section>
  <footer>JJCD – MI FUTURO IA · Estudio creativo</footer>
</main>
`;

let projectText = '';

document.querySelector('#prepare').addEventListener('click', () => {
  const prompt = document.querySelector('#prompt').value.trim();

  if (!prompt) {
    alert('Primero escribe lo que quieres crear.');
    document.querySelector('#prompt').focus();
    return;
  }

  const image = document.querySelector('#imageFile').files[0];
  const video = document.querySelector('#videoFile').files[0];
  const audio = document.querySelector('#audioFile').files[0];

  projectText = `PROYECTO: JJCD – MI FUTURO IA

MÉTODO: ${document.querySelector('#mode').value}
DURACIÓN: ${document.querySelector('#duration').value}
FORMATO: ${document.querySelector('#format').value}
ESTILO: ${document.querySelector('#style').value}
IDIOMA: ${document.querySelector('#language').value}
NARRACIÓN: ${document.querySelector('#voice').value}

IDEA PRINCIPAL:
${prompt}

ARCHIVOS DE REFERENCIA:
Imagen: ${image ? image.name : 'No adjuntada'}
Vídeo: ${video ? video.name : 'No adjuntado'}
Audio: ${audio ? audio.name : 'No adjuntado'}

INSTRUCCIONES:
Desarrolla la idea respetando el método, duración, formato y estilo seleccionados.
Mantén la coherencia visual de los personajes y la continuidad de las escenas.
Si es una película, crea una historia completa con inicio atractivo, desarrollo,
conflicto, giros y un final satisfactorio.

ESTADO:
Proyecto preparado. Falta conectar un motor de generación de IA para producir
el contenido audiovisual real.`;

  document.querySelector('#output').textContent = projectText;
  document.querySelector('#result').hidden = false;
  document.querySelector('#result').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(projectText);
    alert('¡Instrucciones copiadas!');
  } catch {
    alert('No se pudo copiar automáticamente. Puedes seleccionar el texto y copiarlo.');
  }
});

document.querySelector('#download').addEventListener('click', () => {
  const file = new Blob([projectText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mi-proyecto-JJCD.txt';
  link.click();
  URL.revokeObjectURL(url);
});
