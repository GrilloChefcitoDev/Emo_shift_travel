# EMO-SHIFT TRAVEL — Presskit

Sitio estático (HTML + CSS + JS vanilla) con el presskit oficial de **EMO-SHIFT TRAVEL**, listo para publicar en **GitHub** y servir a través de **Vercel**.

> Pixel-art emocional: cambia lo que sientes, cambia lo que es posible.
> © 2026 Grillo Studio · Jhon Didier Urbano Hernandez

---

## 📁 Estructura

```
.
├── index.html              # Página única con todas las secciones
├── 404.html                # Página de error personalizada
├── site.webmanifest        # Manifest PWA mínimo
├── vercel.json             # Config: headers, cache, clean URLs
├── .gitignore
├── README.md               # Este archivo
├── css/
│   └── presskit.css        # Estilos pixel-art (paleta del juego)
├── js/
│   └── presskit.js         # Lightbox + nav scroll + active link
├── docs/                   # 6 documentos GDD en Markdown
│   ├── VISION_DEL_JUEGO.md
│   ├── MANUAL_COMPLETO.md
│   ├── GUION_HISTORIA.md
│   ├── CORE_LOOP.md
│   ├── REFERENCIAS_ARTE.md
│   └── COMO_FUNCIONA.md
└── assets/
    ├── logos/              # logo.svg, logo-512.png, logo-256.png, favicon-64.png
    ├── fonts/              # Silkscreen Regular + Bold (SIL OFL 1.1)
    ├── screenshots/        # 21 capturas del juego v13.14
    ├── sprites/            # Sprites para decoración (Nara, tren, etc.)
    └── music/              # 2 muestras de música (menu, calma)
```

No requiere build. No requiere dependencias. No requiere Node. Solo archivos estáticos.

---

## 🚀 Cómo publicarlo

### Opción A — GitHub + Vercel (recomendada)

1. **Crea un repositorio nuevo en GitHub**, por ejemplo `emo-shift-presskit`.
2. **Sube el contenido de esta carpeta a la raíz del repo** (no dentro de una subcarpeta):

   ```bash
   cd presskit_vercel   # la carpeta que contiene este README
   git init
   git add .
   git commit -m "Presskit inicial v1.0"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/emo-shift-presskit.git
   git push -u origin main
   ```

3. **Conéctalo a Vercel:**
   - Entra a [vercel.com/new](https://vercel.com/new) e inicia sesión con GitHub.
   - Selecciona el repo `emo-shift-presskit`.
   - Vercel lo detecta automáticamente como sitio estático: **no necesitas configurar Build Command ni Output Directory**.
   - Pulsa **Deploy**.
   - En segundos tendrás una URL como `https://emo-shift-presskit.vercel.app`.

4. **(Opcional) Dominio propio:**
   - En el dashboard del proyecto en Vercel → **Settings → Domains** → añade tu dominio y configura los DNS según las instrucciones.

Cada `git push` a `main` publicará una nueva versión automáticamente.

### Opción B — Solo GitHub Pages

Si prefieres no usar Vercel:

1. Sube el contenido a la raíz de un repo.
2. **Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`**.
3. En 1-2 minutos estará en `https://TU_USUARIO.github.io/emo-shift-presskit/`.

> ⚠️ GitHub Pages sirve el sitio bajo un subpath (`/repo/`), mientras Vercel lo sirve en la raíz (`/`). Las rutas del presskit son **todas relativas** (`css/…`, `assets/…`, `docs/…`), así que funciona igual de bien en ambos. El `404.html` también es compatible con ambos.

### Opción C — Probarlo localmente antes de publicar

```bash
cd presskit_vercel
python3 -m http.server 8000
# Abre http://localhost:8000/
```

O con Node:

```bash
npx serve .
```

---

## ⚙️ Detalles técnicos

- **Sin frameworks, sin bundlers, sin dependencias.** HTML + CSS + JS puro.
- **Tipografía Silkscreen** (Jason Kottke, SIL Open Font License 1.1) embebida en `assets/fonts/`.
- **`vercel.json`** configura:
  - `cleanUrls: true` → `docs/MANUAL_COMPLETO.md` se sirve sin extensión como `/docs/MANUAL_COMPLETO`.
  - Cache de 1 año para `/assets/`, `/css/`, `/js/` (inmutable, ideal para CDNs).
  - Headers de seguridad básicos (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
- **Open Graph + Twitter Card** listos: el `og:image` apunta a `assets/logos/logo-512.png`. Al compartir la URL en redes o mensajería se ve el logo del juego.
- **Favicon SVG** (moderno) + PNG fallback de 64×64 + apple-touch-icon de 256×256.
- **`404.html`** con el estilo del juego para rutas inexistentes.
- **Accesible:** skip-link, aria-labels, navegación por teclado en el lightbox (ESC, ←, →), `prefers-reduced-motion` respetado.

---

## 📝 Personalizar antes de publicar

Busca y reemplaza estos placeholders en `index.html`:

| Placeholder | Sustituir por |
|---|---|
| `press@grillostudio.example` | Email real de prensa |
| `href="#"` en `.social-btn` | URLs reales de Twitter, itch.io, YouTube, Discord, web del estudio |
| `Pendiente de publicación pública` (en Ficha técnica) | Fecha real si ya la conoces |

---

## 📜 Licencias

- **Tipografía Silkscreen** por Jason Kottke — SIL Open Font License 1.1 (ver `assets/fonts/OFL-Silkscreen.txt`).
- **Sprites, capturas y música** del juego — © 2026 Grillo Studio.
- **Código del presskit** (HTML/CSS/JS) — © 2026 Grillo Studio.
- Recursos externos de itch.io pendientes de atribución completa (ver ficha técnica).

---

**¿Dudas?** Abre un issue en el repo o escribe a prensa (una vez configurado el email real).
