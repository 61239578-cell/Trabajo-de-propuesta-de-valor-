# Smart Fit Cusco — Prototipo con asesor de tienda

Sitio multipágina + prototipo interactivo (`prototipo.html`) con 7 pasos transparentes y encuesta final conectada a Excel (Google Sheets).

## Estructura
```
index.html, problema.html, propuesta.html, como-funciona.html, respaldo.html, contacto.html
prototipo.html            -> la app (pasos + encuesta)
apps-script.gs            -> código para guardar la encuesta en tu hoja
assets/style.css, script.js, prototipo.css, app.js, config.js
assets/img/               -> (opcional) fotos reales de prendas
```

## Conectar la encuesta con Excel (una sola vez)
1. Crea una hoja nueva en Google Sheets (déjala vacía).
2. Extensiones -> Apps Script. Borra lo que haya y pega el contenido de `apps-script.gs`. Guarda.
3. Implementar -> Nueva implementación -> tipo "Aplicación web". Ejecutar como: Yo. Acceso: Cualquier persona. Implementar y autorizar.
4. Copia la URL que termina en `/exec` y pégala en `assets/config.js` dentro de `ENDPOINT: ''`.
5. Sube todo a GitHub y prueba el prototipo. Cada encuesta enviada crea una fila.
6. Para tener el Excel: Archivo -> Descargar -> Microsoft Excel (.xlsx).

Si cambias el código del Apps Script, debes crear una *nueva implementación* para que se aplique.

## Subir a GitHub
Repositorio -> Add file -> Upload files -> arrastra TODO el contenido (incluida la carpeta `assets`). Settings -> Pages -> rama `main`, carpeta `/ (root)`.

## Fotos reales
Los dibujos de las prendas son SVG generados por el código (cambian de color y talla). Para usar fotos, copia las imágenes a `assets/img/` y escribe la ruta en el campo `foto` de cada prenda en `assets/app.js`.
