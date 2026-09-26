# Smart Fit Cusco — MVP (sitio multipágina)

Sitio de validación para el proyecto universitario "Diseño de la Propuesta de Valor": un dispensador inteligente de moda plus size para tiendas de Cusco.

## Estructura

```
index.html            → Inicio
problema.html          → El problema (cifras del sector)
propuesta.html         → Propuesta de valor (rapidez, tallas a medida, comodidad)
como-funciona.html     → Proceso paso a paso (interactivo)
respaldo.html          → Fuentes y datos de mercado
contacto.html          → Formulario de validación
assets/style.css       → Estilos compartidos por todas las páginas
assets/script.js       → Menú móvil, nav dinámica y el navegador de pasos interactivo
```

Todas las páginas comparten la misma navegación real (no son anclas dentro de una sola página): cada botón del menú te lleva a un archivo `.html` distinto.

## Cómo subir la carpeta completa a GitHub

1. Crea el repositorio en GitHub (puede estar vacío, sin README inicial).
2. Entra al repo → **Add file → Upload files**.
3. Arrastra la carpeta `assets` completa (o los dos archivos que contiene) y todos los `.html` sueltos, manteniendo la estructura: `assets/style.css` y `assets/script.js` deben quedar dentro de una carpeta llamada `assets`. La mayoría de navegadores permiten arrastrar la carpeta entera y GitHub respeta esa ruta.
4. Escribe un mensaje de commit y confirma.
5. Ve a **Settings → Pages**, selecciona `main` y `/ (root)`, guarda.
6. Espera el link (algo como `https://tuusuario.github.io/tu-repo/`) y pruébalo: navega entre las páginas usando el menú de arriba.

## Antes de publicar

En `contacto.html`, reemplaza el `src` del `<iframe>` por el link de embed de tu Google Form (Google Forms → Enviar → pestaña "<>" → copia el link dentro de `src="..."`).

## Fuentes de los datos citados

- Perú Retail (citando DANE) — mercado de tallas grandes en Perú y Colombia.
- Global Market Insights — tamaño y proyección del mercado global plus size.
- DHL / KPMG (vía Falabella Blog) — devoluciones por talla incorrecta.
- Forrester (vía Aila Technologies) — preferencia por autoservicio y valor del tiempo del cliente.
