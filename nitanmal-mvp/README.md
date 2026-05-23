# NiTanMal MVP

MVP frontend de **NiTanMal**, una app web para comparar escenarios de vida antes de tomar decisiones grandes: vivienda, trabajo y transporte.

## Qué incluye

- Landing con estética verde/cálida.
- Login simulado.
- Registro simulado con roles:
  - `comprador`
  - `operaciones`
- Panel de comprador con:
  - comparador de vivienda,
  - comparador de trabajo,
  - comparador de transporte,
  - formularios editables,
  - resultados recalculados automáticamente.
- Panel operativo simulado.
- Persistencia en `localStorage`.
- Configuración preparada para desplegar en GitHub Pages con GitHub Actions.

## Usuarios demo

```txt
Comprador:
comprador@demo.com / 1234

Operaciones:
operaciones@demo.com / 1234
```

## Instalación local

```bash
npm install
npm run dev
```

La app se abrirá normalmente en:

```txt
http://localhost:5173
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube este proyecto al repositorio.
3. En GitHub, ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Haz push a la rama `main`.
6. El workflow `.github/workflows/deploy.yml` generará y publicará la web.

## Estructura

```txt
src/
  App.jsx
  main.jsx
  components/
    common/
    layout/
  data/
  hooks/
  modules/
  pages/
  styles/
  utils/
```

## Siguiente paso técnico

Cuando se quiera pasar de mock a producto real, habría que sustituir:

- `localStorage` por backend real.
- Usuarios simulados por autenticación real.
- Fórmulas simples por motor de cálculo más completo.
- Panel operativo mock por métricas reales.
