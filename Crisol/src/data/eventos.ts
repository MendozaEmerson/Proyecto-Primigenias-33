export interface FotoEvento {
  src: string;
  titulo: string;
  tag: string;
}

export interface BloqueEventoPorAnio {
  anio: string;
  titulo: string;
  ubicacion: string;
  descripcion: string;
  fotos: FotoEvento[];
}

export const eventosPorAnioList: BloqueEventoPorAnio[] = [
  {
    anio: "2026",
    titulo: "Jornadas Abiertas y Seminario Anual 2026",
    ubicacion: "Buenos Aires, Argentina & Campus Virtual",
    descripcion: "Presentación magistral de la diplomatura en Numerología Óntica y talleres interactivos virtuales con la comunidad internacional.",
    fotos: [
      { src: "/images/jornada-abierta-2026.jpg", titulo: "Apertura Jornada Abierta 2026", tag: "Jornada Presencial" },
      { src: "/images/numerologia-2026.jpg", titulo: "Seminario Anual 2026", tag: "Seminario Magistral" },
      { src: "/images/diana-numerologia-clase.jpg", titulo: "Clase Magistral con Diana Braconi", tag: "Taller Práctico" },
      { src: "/images/grupo-estudiantes-graduacion.jpg", titulo: "Entrega de Diplomas y Certificaciones", tag: "Graduación 2026" }
    ]
  },
  {
    anio: "2025",
    titulo: "Eventos Institucionales 2025",
    ubicacion: "Múltiples Sedes",
    descripcion: "Próximamente compartiremos las imágenes y eventos memorables que construirán nuestra historia en este año.",
    fotos: []
  },
  {
    anio: "2024",
    titulo: "Expo Holística 2024",
    ubicacion: "La Rural / Pabellón Central, CABA",
    descripcion: "Stand institucional del Instituto Primigenias 33 con charlas abiertas, lecturas transpersonales y muestra académica del equipo docente.",
    fotos: [
      { src: "/images/expo-holistica-2024.jpg", titulo: "Stand Institucional #412 - Expo Holística 2024", tag: "Stand Principal" },
      { src: "/images/curso-numerologia-diploma.jpg", titulo: "Muestra Académica y Entrega de Guías", tag: "Asesoramiento" },
      { src: "/images/directorio-profesionales.jpg", titulo: "Equipo Docente en Expo 2024", tag: "Cuerpo Docente" },
      { src: "/images/diana-fundadora-cristales.jpg", titulo: "Conferencia de Cierre de Diana Braconi", tag: "Disertación" }
    ]
  },
  {
    anio: "2023",
    titulo: "Expo Holística 2023 Costa Salguero",
    ubicacion: "Centro de Exposiciones Costa Salguero, Buenos Aires",
    descripcion: "Simposio internacional y participación magistral ante más de 500 asistentes con actividades de integración humana y ciencias ónticas.",
    fotos: [
      { src: "/images/expo-holistica-2023.jpg", titulo: "Conferencia Magistral en Costa Salguero", tag: "Gran Auditorio" },
      { src: "/images/alumna-luciana-masa.jpg", titulo: "Encuentro de Egresadas 2023", tag: "Comunidad Primigenias" },
      { src: "/images/master-especializaciones.jpg", titulo: "Presentación del Máster en Especializaciones", tag: "Lanzamiento 2023" },
      { src: "/images/directora-diana.jpg", titulo: "Reconocimiento a la Trayectoria Institucional", tag: "Dirección" }
    ]
  },
  {
    anio: "2022",
    titulo: "2022 Cerro Uritorco - Argentina",
    ubicacion: "Capilla del Monte, Córdoba",
    descripcion: "El Cerro Uritorco es la máxima elevación de las Sierras Chicas, con 1979 metros de altura, ubicado en la mística localidad de Capilla del Monte, en el Valle de Punilla, Córdoba, Argentina.",
    fotos: [
      { src: "/images/eventos/2022-uritorco-1.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-2.png", titulo: "Caminata Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-3.png", titulo: "Sierras Chicas", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-4.png", titulo: "Valle de Punilla", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-5.png", titulo: "Cima Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-6.png", titulo: "Paisaje Cerro Uritorco", tag: "Salida de Campo" }
    ]
  }
];