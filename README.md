# Club Ciclista Bidebieta

Sitio web oficial del Club Ciclista Bidebieta - Basauri, Bizkaia

## Migración desde WordPress a GitHub Pages

Este sitio ha sido migrado desde WordPress a GitHub Pages para:
- Reducir costes de hosting
- Simplificar el mantenimiento
- Mejorar el rendimiento
- Facilitar las actualizaciones

## Características

✅ **Multiidioma:** Castellano / Euskera con cambio instantáneo
✅ **Métricas:** Google Analytics integrado
✅ **Responsive:** Funciona en móvil, tablet y desktop
✅ **Rápido:** Sitio estático optimizado
✅ **Gratis:** Hosting en GitHub Pages

## Configuración de GitHub Pages

### 1. Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre del repositorio: `clubciclistabidebieta.github.io` (o cualquier nombre)
- Marca como público
- Crea el repositorio

### 2. Subir archivos
```bash
cd clubciclistabidebieta
git init
git add .
git commit -m "Migración inicial desde WordPress"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/clubciclistabidebieta.github.io.git
git push -u origin main
```

### 3. Activar GitHub Pages
- Ve a Settings > Pages en tu repositorio
- En "Source" selecciona "Deploy from a branch"
- En "Branch" selecciona "main" y carpeta "/ (root)"
- Guarda los cambios

### 4. Configurar Google Analytics

1. **Crear cuenta en Google Analytics:**
   - Ve a https://analytics.google.com
   - Crea una cuenta y propiedad
   - Selecciona "Web" como plataforma
   - Copia tu ID de medición (formato: G-XXXXXXXXXX)

2. **Actualizar el sitio:**
   - Abre `index.html`
   - Reemplaza `G-XXXXXXXXXX` con tu ID real en estas líneas:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ...
   gtag('config', 'G-XXXXXXXXXX');
   ```

3. **Métricas disponibles:**
   - Visitas totales y únicas
   - Páginas más visitadas
   - Tiempo en el sitio
   - Ubicación geográfica de visitantes
   - Dispositivos utilizados (móvil/desktop)
   - Idioma preferido de usuarios

### 5. Configurar dominio personalizado

#### En GitHub:
- Ve a Settings > Pages
- En "Custom domain" escribe: `www.clubciclistabidebieta.com`
- Marca "Enforce HTTPS" (después de configurar DNS)

#### En tu proveedor de dominio:
Añade estos registros DNS:

**Para www.clubciclistabidebieta.com:**
```
Tipo: CNAME
Nombre: www
Valor: TU_USUARIO.github.io
```

**Para clubciclistabidebieta.com (apex):**
```
Tipo: A
Nombre: @
Valor: 185.199.108.153

Tipo: A
Nombre: @
Valor: 185.199.109.153

Tipo: A
Nombre: @
Valor: 185.199.110.153

Tipo: A
Nombre: @
Valor: 185.199.111.153
```

## Estructura del sitio

```
clubciclistabidebieta/
├── index.html          # Página principal
├── style.css           # Estilos
├── lang.js             # Sistema multiidioma
├── 404.html           # Página de error
├── CNAME              # Configuración de dominio
└── README.md          # Este archivo
```

## Sistema Multiidioma

El sitio detecta y guarda la preferencia de idioma del usuario:
- **ES:** Castellano (por defecto)
- **EU:** Euskera

La preferencia se guarda en localStorage y persiste entre visitas.

## Mantenimiento

Para actualizar el contenido:
1. Edita los archivos HTML/CSS localmente
2. Para añadir traducciones, usa los atributos `data-es` y `data-eu`
3. Haz commit y push a GitHub
4. Los cambios se reflejarán automáticamente en minutos

## Contenido migrado

✅ Página de inicio (bilingüe)
✅ Información de salidas (bilingüe)
✅ Calendario 2026
✅ Reglamento interno completo (bilingüe)
✅ Concurso de kilómetros (bilingüe)
✅ Patrocinadores
✅ Ubicación de salida
✅ Diseño responsive
✅ Selector de idioma ES/EU
✅ Google Analytics

## Ventajas sobre WordPress

- **Coste:** Gratis (vs hosting WordPress)
- **Velocidad:** Sitio estático ultra-rápido
- **Seguridad:** Sin vulnerabilidades de plugins
- **Mantenimiento:** Sin actualizaciones de WordPress/plugins
- **Simplicidad:** Solo HTML/CSS/JS, fácil de editar
- **Métricas:** Analytics integrado sin plugins

## Soporte

Para dudas sobre el sitio, contacta con la junta directiva del club.

