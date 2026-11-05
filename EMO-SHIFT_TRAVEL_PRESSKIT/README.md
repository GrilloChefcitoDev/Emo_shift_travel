# EMO-SHIFT TRAVEL — Presskit

Sitio estático HTML/CSS/JS para prensa, evaluadores y comunidad.

## Cómo usarlo

1. **Abrir localmente:** doble-clic en `index.html` o ábrelo en cualquier navegador moderno (Chrome, Edge, Firefox). No requiere servidor.
2. **Servirlo:** opcionalmente, sirve la carpeta con cualquier servidor estático:
   ```bash
   python3 -m http.server 8000
   ```
   Y abre `http://localhost:8000/`.

## Estructura

```
EMO-SHIFT_TRAVEL_PRESSKIT/
├── index.html              # Página única con todas las secciones
├── css/
│   └── presskit.css        # Estilos pixel-art loyal
├── js/
│   └── presskit.js         # Lightbox + nav scroll
├── assets/
│   ├── fonts/              # Silkscreen Regular + Bold (OFL 1.1)
│   ├── screenshots/        # 21 capturas del juego v13.14
│   ├── sprites/            # Sprites para decoración (Nara, tren, etc.)
│   └── music/              # Muestras de música (menu, calma)
└── README.md               # Este archivo
```

## Secciones

1. **Hero** — Logo, eslogan, badges y CTAs
2. **Sinopsis corta** — Pitch + tags de género
3. **Historia** — 4 actos + aviso de contenido + personajes
4. **Características** — 12 features con íconos
5. **Las 4 emociones** — Cards de Ira, Calma, Miedo, Alegría
6. **Galería** — 21 capturas con lightbox (teclado: ← → ESC)
7. **Ficha técnica** — Tabla completa de datos
8. **Equipo** — Bio de Grillo Studio + 4 tarjetas de personas + colaboradores
9. **GDD / Docs** — Enlaces a documentos (placeholders, personalízalos)
10. **Contacto** — Email, redes sociales, assets descargables

## Personalización

### Email de contacto
Edita en `index.html`:
```html
<a href="mailto:press@grillostudio.example" class="contact-email">press@grillostudio.example</a>
```

### Redes sociales
Edita los `href="#"` en la sección de contacto con tus URLs reales.

### Documentos GDD
Los enlaces apuntan a `docs/VISION_DEL_JUEGO.pdf`, `docs/MANUAL_COMPLETO.pdf`, etc.
Crea esa carpeta `docs/` y coloca tus PDFs o cambia los `href` a tus documentos.

### Logo
El logo es tipográfico (Silkscreen Bold). Para usar un logo PNG, reemplaza el `<h1 class="hero-logo">EMO-SHIFT</h1>` con:
```html
<img src="assets/logos/logo.png" alt="EMO-SHIFT TRAVEL" class="hero-logo-img">
```

### Capturas
Las capturas están en `assets/screenshots/`. Para añadir más, copia tus PNGs ahí y añade un `<button class="gallery-item">` en la sección galería.

## Accesibilidad

- Skip-link "Saltar al contenido"
- Focus-visible en todos los links y botones
- aria-label en navegación y lightbox
- prefers-reduced-motion respetado
- Lightbox navegable con teclado (←, →, ESC, Tab)
- Contraste AA en textos principales

## Compatibilidad

- Chrome, Edge, Firefox modernos
- Funciona sin JavaScript (sólo se pierde el lightbox)
- Responsive: 320px a 4K
- Tipografía Silkscreen carga desde `assets/fonts/` (sin CDN)

## Créditos

- **Estilo y código:** Presskit generado para Grillo Studio
- **Tipografía:** Silkscreen por Jason Kottke (SIL Open Font License 1.1)
- **Capturas:** Del propio juego EMO-SHIFT TRAVEL v13.14
- **Sprites:** Originales del juego (Jhon Didier Urbano Hernandez)

© 2026 Grillo Studio. Todos los recuerdos reservados.
