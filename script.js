const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // NOTA PARA EL EQUIPO DE ELEMENT PALLETS:
    // Este formulario aún no está conectado a un correo, CRM o backend real.
    // Hay que conectarlo antes de publicar el sitio para que los leads lleguen a ventas.
    status.textContent = 'Gracias — recibimos tu información. Un asesor te contactará pronto.';
    form.reset();
  });
