const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form).entries());

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(formData),
  })
    .then(() => {
      status.textContent = 'Gracias — recibimos tu información. Un asesor te contactará pronto.';
      form.reset();
    })
    .catch(() => {
      status.textContent = 'Hubo un problema al enviar el formulario. Por favor intenta de nuevo o llámanos directamente.';
    });
});
