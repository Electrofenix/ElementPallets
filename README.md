# Element Pallets — Sitio web

Rediseño del sitio de Element Pallets (Marín, Nuevo León). Sitio estático, sin build ni dependencias — solo HTML, CSS y JS.

## Estructura

```
index.html      Página principal
styles.css      Estilos
script.js       Lógica del formulario de contacto
assets/logo.png Logotipo de la marca
```

## Pendiente antes de publicar

El formulario de contacto (`#contactForm` en `script.js`) todavía **no está conectado** a ningún correo, CRM o backend real — por ahora solo simula el envío. Hay que conectarlo a un servicio (ej. Formspree, Google Sheets, un backend propio, etc.) para que los leads lleguen realmente al equipo de ventas.

## Cómo verlo localmente

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```
python3 -m http.server 8000
```

y visita `http://localhost:8000`.
