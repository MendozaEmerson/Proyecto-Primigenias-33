# Guía de Configuración de Strapi CMS para el Cliente

Esta guía detalla el paso a paso para configurar el panel de control de Strapi CMS (**`http://localhost:1337/admin`**) de modo que el cliente pueda administrar independientemente:

- **Eventos por Año (con tarjetas de sub-eventos apilables)**
- **Equipo de La Escuela**
- **Galería de Fotos del Carrusel de Inicio**
- **Testimonios de Estudiantes**
- **Gestor de PDFs para Cursos y Niveles**
- **Seminarios Anuales (Video YouTube & PDF)**
- **Módulos de Clases Gratuitas (Videos y Duración)**

---

## 1. Crear el Componente `sub-evento`

Antes de crear la colección de Eventos, debemos crear el componente repetible para las tarjetas de cada evento.

1. En el menú lateral izquierdo, haz clic en **Content-Type Builder**.
2. En la sección **Components**, haz clic en **Create new component**.
3. **Display Name:** `sub-evento`
4. **Category:** `eventos`
5. Agrega los siguientes campos:
   - `titulo_subevento` (Text - Short)
   - `etiqueta_badge` (Text - Short) *(Ej: JORNADA PRESENCIAL, SEMINARIO MAGISTRAL, GRADUACIÓN 2026)*
   - `imagen` (Media - Single image)
6. Haz clic en **Save**.

---

## 2. Colección `EventoAnual` (Collection Type)

1. En **Content-Type Builder**, haz clic en **Create new collection type**.
2. **Display Name:** `EventoAnual`
3. Agrega los siguientes campos:
   - `anio` (Text / Short Text) *(Ej: 2026, 2024, 2023)*
   - `titulo_principal` (Text / Short Text)
   - `ubicacion` (Text / Short Text)
   - `descripcion_breve` (Text / Long Text)
   - `sub_eventos` (Component - Repeatable Component -> selecciona `eventos.sub-evento`)
4. Haz clic en **Save**.

---

## 3. Colección `Integrante` (Collection Type - La Escuela)

1. **Display Name:** `Integrante`
2. Campos:
   - `nombre` (Text - Short)
   - `cargo` (Text - Short)
   - `foto` (Media - Single image)
   - `orden` (Number - Integer)
3. Haz clic en **Save**.

---

## 4. Colección `GaleriaFoto` (Collection Type - Carrusel Inicio)

1. **Display Name:** `GaleriaFoto`
2. Campos:
   - `titulo` (Text - Short)
   - `imagen` (Media - Single image)
   - `mostrar_en_carrusel_inicio` (Boolean - Default True)
3. Haz clic en **Save**.

---

## 5. Colección `Testimonio` (Collection Type)

1. **Display Name:** `Testimonio`
2. Campos:
   - `nombre_estudiante` (Text - Short)
   - `curso_realizado` (Text - Short)
   - `comentario` (Text - Long Text)
   - `foto_estudiante` (Media - Single image)
3. Haz clic en **Save**.

---

## 6. Colección `NivelPDF` (Collection Type - Gestor de PDFs por Nivel/Curso)

1. **Display Name:** `NivelPDF`
2. Campos:
   - `slug_nivel` (Text - Short) *(Ej: `primer-nivel`, `segundo-nivel`, `tercer-nivel`, `especialidades`)*
   - `titulo_nivel` (Text - Short)
   - `archivo_pdf` (Media - Single file PDF)
3. Haz clic en **Save**.

---

## 7. Colección `SeminarioAnual` (Collection Type)

1. **Display Name:** `SeminarioAnual`
2. Campos:
   - `anio` (Text - Short) *(Ej: `2026`)*
   - `titulo_seminario` (Text - Short)
   - `subtitulo` (Text - Long Text)
   - `url_video_youtube` (Text - Short) *(Ej: `https://www.youtube.com/embed/VIDEO_ID`)*
   - `archivo_pdf_material` (Media - Single file PDF)
3. Haz clic en **Save**.

---

## 8. Colección `ClaseJornada` (Collection Type - Módulos Gratuitos)

1. **Display Name:** `ClaseJornada`
2. Campos:
   - `anio` (Text - Short) *(Ej: `2026`)*
   - `numero_clase` (Text - Short) *(Ej: `Clase 01`, `Clase 02`)*
   - `categoria_badge` (Text - Short) *(Ej: `FUNDAMENTOS ÓNTICOS`)*
   - `titulo_clase` (Text - Short)
   - `descripcion` (Text - Long Text)
   - `url_video_youtube` (Text - Short)
   - `duracion` (Text - Short) *(Ej: `45 min`)*
   - `orden` (Number - Integer)
3. Haz clic en **Save**.

---

## 9. Habilitar Permisos de Lectura Pública (Public Roles)

Para que Astro pueda consultar las colecciones sin necesidad de tokens de API:

1. Ve a **Settings -> Roles -> Public**.
2. Marca la casilla **`find`** y **`findOne`** para todas las colecciones recién creadas.
3. Haz clic en **Save**.
