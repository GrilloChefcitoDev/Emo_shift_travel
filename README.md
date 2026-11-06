# EMO-SHIFT TRAVEL — Presskit

Sitio estático (HTML + CSS + JS vanilla) con el presskit oficial de **EMO-SHIFT TRAVEL**, listo para publicar en **GitHub** y servir a través de **Vercel**.

> Nara en coma. El Andén Cero. Cuatro emociones. Derrota a La Voz Original.
> © 2026 Grillo Studio · Jhon Didier Urbano Hernandez

---

## Estructura

```
.
├── index.html              # Página única con todas las secciones
├── 404.html                # Página de error personalizada
├── site.webmanifest        # Manifest PWA mínimo
├── vercel.json             # Config: headers, cache, clean URLs
├── .gitignore
├── README.md               # Este archivo
├── EMO-SHIFT_PRESSKIT.docx # Documento Word con todos los textos en negro
├── css/
│   └── presskit.css        # Estilos pixel-art (paleta del juego, SOLO Silkscreen)
├── js/
│   └── presskit.js         # Lightbox + nav scroll + active link
└── assets/
    ├── logos/              # logo.svg, logo-512.png, logo-256.png, favicon-64.png
    ├── fonts/              # Silkscreen Regular + Bold (SIL OFL 1.1)
    ├── screenshots/        # Capturas del juego v13.15
    ├── sprites/            # Sprites para decoración (Nara, tren, etc.)
    ├── icons/              # Iconos pixel-art en SVG (sin emojis)
    ├── promo/              # Key art / portada del juego (NO pixel-art)
    └── music/              # Muestras de música (menu, calma)
```

No requiere build. No requiere dependencias. No requiere Node. Solo archivos estáticos.

---

## Cómo publicarlo

### Opción A — GitHub + Vercel (recomendada)

1. Crea un repositorio nuevo en GitHub, por ejemplo `emo-shift-presskit`.
2. Sube el contenido de esta carpeta a la raíz del repo:

   ```bash
   cd presskit_v2
   git init
   git add .
   git commit -m "Presskit v2 v13.15"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/emo-shift-presskit.git
   git push -u origin main
   ```

3. Conéctalo a Vercel:
   - Entra a [vercel.com/new](https://vercel.com/new) e inicia sesión con GitHub.
   - Selecciona el repo `emo-shift-presskit`.
   - Vercel lo detecta automáticamente como sitio estático.
   - Pulsa **Deploy**.
   - En segundos tendrás una URL como `https://emo-shift-presskit.vercel.app`.

4. (Opcional) Dominio propio:
   - En el dashboard del proyecto en Vercel → **Settings → Domains** → añade tu dominio.

Cada `git push` a `main` publicará una nueva versión automáticamente.

### Opción B — Solo GitHub Pages

1. Sube el contenido a la raíz de un repo.
2. **Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`**.
3. En 1-2 minutos estará en `https://TU_USUARIO.github.io/emo-shift-presskit/`.

### Opción C — Probarlo localmente

```bash
cd presskit_v2
python3 -m http.server 8000
# Abre http://localhost:8000/
```

---

## Detalles técnicos

- **Sin frameworks, sin bundlers, sin dependencias.** HTML + CSS + JS puro.
- **Tipografía:** SOLO Silkscreen (Jason Kottke, SIL Open Font License 1.1) en TODO el sitio.
- **Sin emojis:** todos los iconos son pixel-art en SVG (`assets/icons/`).
- **`vercel.json`** configura: clean URLs, cache de 1 año para assets/css/js, headers de seguridad.
- **Open Graph + Twitter Card** con la portada del juego.
- **Accesible:** skip-link, aria-labels, navegación por teclado en el lightbox (ESC, ←, →), `prefers-reduced-motion` respetado.
- **Word descargable:** `EMO-SHIFT_PRESSKIT.docx` con todos los textos en color negro, organizado por secciones.

---

## Personalizar antes de publicar

Busca y reemplaza estos placeholders en `index.html`:

| Placeholder | Sustituir por |
|---|---|
| `href="#"` en `.social-btn` (si los hubiera) | URLs reales de redes sociales |

Los correos ya están configurados: `Durbanoh@correo.usbcali.edu.co` y `jeiron122@outlook.es`.
El enlace a itch.io apunta a Clarity Studios: https://clarity-studio.itch.io/

---

## Licencias

- **Tipografía Silkscreen** por Jason Kottke — SIL Open Font License 1.1 (ver `assets/fonts/OFL-Silkscreen.txt`).
- **Sprites, capturas y música** del juego — © 2026 Grillo Studio.
- **Código del presskit** (HTML/CSS/JS) — © 2026 Grillo Studio.
- Recursos externos de itch.io pendientes de atribución completa.

---

**¿Dudas?** Abre un issue en el repo o escribe a los correos de contacto.
