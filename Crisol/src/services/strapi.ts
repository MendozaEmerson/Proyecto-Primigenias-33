import { eventosPorAnioList, type BloqueEventoPorAnio } from '../data/eventos';
import { testimoniosList, type TestimonioAlumno } from '../data/testimonios';
import { docentesList } from '../data/docentes';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export function getStrapiMediaUrl(path: string | null | undefined): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${STRAPI_URL}${path}`;
}

export async function fetchStrapiData<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return fallbackData;
    }

    const json = await res.json();
    if (!json.data || (Array.isArray(json.data) && json.data.length === 0)) {
      return fallbackData;
    }

    return json.data as T;
  } catch (error) {
    return fallbackData;
  }
}

// 1. EVENTOS ANUALES (Eventos por Año + SubEventos)
export async function getEventosAnuales(): Promise<BloqueEventoPorAnio[]> {
  const strapiData = await fetchStrapiData<any[]>('evento-anuales', []);
  if (!strapiData || strapiData.length === 0) {
    return eventosPorAnioList;
  }

  return strapiData.map((item: any) => {
    const attrs = item.attributes || item;
    const subEventosRaw = attrs.sub_eventos || attrs.subEventos || [];
    
    return {
      anio: String(attrs.anio || attrs.año || '2026'),
      titulo: attrs.titulo_principal || attrs.titulo || 'Evento Institucional',
      ubicacion: attrs.ubicacion || 'Buenos Aires & Campus Virtual',
      descripcion: attrs.descripcion_breve || attrs.descripcion || '',
      fotos: Array.isArray(subEventosRaw)
        ? subEventosRaw.map((sub: any) => {
            const subImg = sub.imagen?.data?.attributes?.url || sub.imagen?.url;
            return {
              src: subImg ? getStrapiMediaUrl(subImg) : '/images/jornada-abierta-2026.jpg',
              titulo: sub.titulo_subevento || sub.titulo || 'Actividad',
              tag: sub.etiqueta_badge || sub.tag || 'Evento',
            };
          })
        : [],
    };
  });
}

// 2. INTEGRANTES DE EQUIPO (La Escuela)
export interface IntegranteEquipo {
  nombre: string;
  cargo: string;
  foto: string;
}

export async function getIntegrantesEquipo(): Promise<IntegranteEquipo[]> {
  const fallbackList: IntegranteEquipo[] = docentesList.map(d => ({
    nombre: d.nombre,
    cargo: d.especialidad,
    foto: d.imagen
  }));

  const strapiData = await fetchStrapiData<any[]>('integrantes', []);
  if (!strapiData || strapiData.length === 0) {
    return fallbackList;
  }

  return strapiData.map((item: any) => {
    const attrs = item.attributes || item;
    const imgUrl = attrs.foto?.data?.attributes?.url || attrs.foto?.url;
    return {
      nombre: attrs.nombre || 'Integrante',
      cargo: attrs.cargo || 'Docente',
      foto: imgUrl ? getStrapiMediaUrl(imgUrl) : '/images/directora-diana.jpg',
    };
  });
}

// 3. GALERÍA DE FOTOS (Carrusel de Inicio)
export interface FotoGaleria {
  titulo: string;
  imagen: string;
}

export async function getGaleriaInicio(): Promise<FotoGaleria[]> {
                  const fallback: FotoGaleria[] = [
      { titulo: 'Lago Titicaca', imagen: '/images/lago-titicaca.png' },
      { titulo: 'Aramu Muru', imagen: '/images/aramu-muru.png' },
      { titulo: 'Apu Pitusiray', imagen: '/images/apu-pitusiray.png' },
      { titulo: 'Naupa Iglesia', imagen: '/images/naupa-iglesia.png' },
      { titulo: 'Numerología', imagen: '/images/numerologia-oficial.png' },
      { titulo: 'El Origen', imagen: '/images/origen-logo.png' },
      { titulo: 'Isla del Sol 2024', imagen: '/images/eventos/2024-isla-1.png' },
      { titulo: 'Isla del Sol 2024', imagen: '/images/eventos/2024-isla-2.png' },
      { titulo: 'Portal Aramu Muru 2024', imagen: '/images/eventos/2024-aramu-1.png' },
      { titulo: 'Portal Aramu Muru 2024', imagen: '/images/eventos/2024-aramu-3.png' },
      { titulo: 'Petroglifos La Caldera 2023', imagen: '/images/eventos/2023-petroglifos-1.png' },
      { titulo: 'Petroglifos La Caldera 2023', imagen: '/images/eventos/2023-petroglifos-3.png' }
    ];

  const strapiData = await fetchStrapiData<any[]>('galeria-fotos', []);
  if (!strapiData || strapiData.length === 0) {
    return fallback;
  }

  return strapiData
    .filter((item: any) => {
      const attrs = item.attributes || item;
      return attrs.mostrar_en_carrusel_inicio !== false;
    })
    .map((item: any) => {
      const attrs = item.attributes || item;
      const imgUrl = attrs.imagen?.data?.attributes?.url || attrs.imagen?.url;
      return {
        titulo: attrs.titulo || 'Foto Institucional',
        imagen: imgUrl ? getStrapiMediaUrl(imgUrl) : '/images/grupo-estudiantes-graduacion.jpg',
      };
    });
}

// 4. TESTIMONIOS DE ALUMNOS (Inicio)
export async function getTestimoniosAlumnos(): Promise<TestimonioAlumno[]> {
  const strapiData = await fetchStrapiData<any[]>('testimonios', []);
  if (!strapiData || strapiData.length === 0) {
    return testimoniosList.map((t, idx) => ({
      id: String(idx),
      nombre: t.nombre,
      curso: t.rol,
      comentario: t.cita,
      avatar: t.foto
    }));
  }

  return strapiData.map((item: any) => {
    const attrs = item.attributes || item;
    const imgUrl = attrs.foto_estudiante?.data?.attributes?.url || attrs.foto_estudiante?.url;
    return {
      id: String(item.id || attrs.id),
      nombre: attrs.nombre_estudiante || attrs.nombre || 'Estudiante',
      curso: attrs.curso_realizado || attrs.curso || 'Numerología Óntica',
      comentario: attrs.comentario || '',
      avatar: imgUrl ? getStrapiMediaUrl(imgUrl) : '/images/alumna-luciana-masa.jpg',
    };
  });
}

// 5. PDF DE NIVEL O CURSO (Botón Programa PDF)
export async function getPdfNivel(slugNivel: string): Promise<string> {
  const fallbackMap: Record<string, string> = {
    'primer-nivel': '/images/curso-numerologia-diploma.jpg',
    'segundo-nivel': '/images/curso-numerologia-diploma.jpg',
    'tercer-nivel': '/images/curso-numerologia-diploma.jpg',
    'especialidades': '/images/curso-numerologia-diploma.jpg',
  };

  const strapiData = await fetchStrapiData<any[]>(`nivel-pdfs?filters[slug_nivel][$eq]=${slugNivel}`, []);
  if (strapiData && strapiData.length > 0) {
    const item = strapiData[0];
    const attrs = item.attributes || item;
    const pdfUrl = attrs.archivo_pdf?.data?.attributes?.url || attrs.archivo_pdf?.url;
    if (pdfUrl) return getStrapiMediaUrl(pdfUrl);
  }

  return fallbackMap[slugNivel] || '/images/curso-numerologia-diploma.jpg';
}

// 6. SEMINARIO ANUAL (Video de YouTube & Material PDF)
export interface SeminarioAnualData {
  titulo: string;
  subtitulo: string;
  videoUrl: string;
  pdfUrl: string;
}

export async function getSeminarioAnual(anio: string = '2026'): Promise<SeminarioAnualData> {
  const fallback: SeminarioAnualData = {
    titulo: `Seminario Anual: Numerología Óntica ${anio}`,
    subtitulo: 'Un viaje profundo hacia las frecuencias, arquetipos y aprendizajes que marcarán el nuevo ciclo anual.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pdfUrl: '/images/curso-numerologia-diploma.jpg',
  };

  const strapiData = await fetchStrapiData<any[]>(`seminario-anuales?filters[anio][$eq]=${anio}`, []);
  if (strapiData && strapiData.length > 0) {
    const attrs = strapiData[0].attributes || strapiData[0];
    const pdfUrl = attrs.archivo_pdf_material?.data?.attributes?.url || attrs.archivo_pdf_material?.url;
    return {
      titulo: attrs.titulo_seminario || fallback.titulo,
      subtitulo: attrs.subtitulo || fallback.subtitulo,
      videoUrl: attrs.url_video_youtube || fallback.videoUrl,
      pdfUrl: pdfUrl ? getStrapiMediaUrl(pdfUrl) : fallback.pdfUrl,
    };
  }

  return fallback;
}

// 7. CLASES DE JORNADA (Módulos Gratuitos)
export interface ClaseJornadaData {
  numeroClase: string;
  categoriaBadge: string;
  tituloClase: string;
  descripcion: string;
  videoUrl: string;
  duracion: string;
}

export async function getClasesJornada(anio: string = '2026'): Promise<ClaseJornadaData[]> {
  const fallback: ClaseJornadaData[] = [
    {
      numeroClase: 'Clase 01',
      categoriaBadge: 'FUNDAMENTOS ÓNTICOS',
      tituloClase: 'Clase 1: Introducción al Diseño Óntico y Decodificación',
      descripcion: 'Bases teóricas sobre la estructura de la psique, la decodificación de mandatos del inconsciente y el despertar de la conciencia observadora.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duracion: '45 min',
    },
    {
      numeroClase: 'Clase 02',
      categoriaBadge: 'PSICOLOGÍA & ARQUETIPOS',
      tituloClase: 'Clase 2: Los 9 Arquetipos de Transmutación Personal',
      descripcion: 'Exploración práctica de los arquetipos aplicados a la autoconciencia, relaciones e integración de la sombra.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duracion: '50 min',
    },
  ];

  const strapiData = await fetchStrapiData<any[]>(`clase-jornadas?filters[anio][$eq]=${anio}&sort=orden:asc`, []);
  if (strapiData && strapiData.length > 0) {
    return strapiData.map((item: any) => {
      const attrs = item.attributes || item;
      return {
        numeroClase: attrs.numero_clase || 'Clase',
        categoriaBadge: attrs.categoria_badge || 'JORNADA',
        tituloClase: attrs.titulo_clase || 'Clase Grabada',
        descripcion: attrs.descripcion || '',
        videoUrl: attrs.url_video_youtube || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duracion: attrs.duracion || '45 min',
      };
    });
  }

  return fallback;
}
