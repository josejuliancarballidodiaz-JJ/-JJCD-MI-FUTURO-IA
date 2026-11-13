import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="wrap">
    <header><div class="logo">JJCD</div><div><h1>MI FUTURO IA</h1><p>Tu estudio creativo de inteligencia artificial</p></div></header>
    <section class="panel">
      <h2>¿Qué quieres crear?</h2>
      <label for="mode">Tipo de creación</label>
      <select id="mode">
        <option>Película completa desde un prompt</option>
        <option>Texto a vídeo</option>
        <option>Imagen a vídeo</option>
        <option>Animar fotografías</option>
        <option>Transformar un vídeo</option>
        <option>Crear imágenes</option>
      </select>
      <label for="duration">Duración deseada</label>
      <select id="duration">
        <option>15 segundos</option><option>30 segundos</option>
        <option>1 minuto</option><option>3 minutos</option>
        <option>5 minutos</option><option>10 minutos</option>
        <option>15 minutos</option><option>30 minutos</option>
      </select>
      <label for="prompt">Describe lo que quieres crear</label>
      <textarea id="prompt" rows="5" placeholder="Escribe aquí tu idea..."></textarea>
      <button id="create">Preparar mi creación</button>
      <p id="notice" role="status">Esta es una versión inicial. Aún falta conectar los motores de IA para generar contenido real.</p>
    </section>
    <footer>JJCD- MI FUTURO IA · Versión inicial</footer>
  </main>`;
document.querySelector('#create').addEventListener('click', () => {
  const prompt = document.querySelector('#prompt').value.trim();
  const notice = document.querySelector('#notice');
  notice.textContent = prompt
    ? 'Tu idea está preparada. La generación real estará disponible cuando conectemos los servicios de IA.'
    : 'Primero escribe una descripción de lo que quieres crear.';
});
