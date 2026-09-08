export interface Testimonio {
  nombre: string;
  foto: string;
  rol: string;
  cita: string;
}

export const testimoniosList: Testimonio[] = [
  {
    nombre: "Luciana Masa",
    foto: "/images/alumna-luciana-masa.jpg",
    rol: "Alumna egresada del Instituto Primigenias 33",
    cita: '"La formación óntica cambió por completo mi perspectiva profesional y de vida."'
  },
  {
    nombre: "Fernanda Cassia Alfano",
    foto: "/images/directora-diana.jpg",
    rol: "Alumna egresada y Lic. en Psicología",
    cita: '"Las herramientas de lectura transpersonal me permitieron abordar a mis pacientes con una profundidad sin precedentes."'
  },
  {
    nombre: "Lorena Paula Rodríguez",
    foto: "/images/diana-numerologia-clase.jpg",
    rol: "Alumna egresada y Consultora",
    cita: '"El mapa de la fecha de nacimiento e inconsciente colectivo es imprescindible para el autoconocimiento real."'
  },
  {
    nombre: "Zulma Ofelia Christensen",
    foto: "/images/directora-diana.jpg",
    rol: "Alumna egresada y Analista",
    cita: '"Comprender la matriz numérica y la geometría de la frecuencia me dio la claridad que buscaba durante años."'
  }
];

export const galleryCarouselImages = [
  { src: "/images/grupo-estudiantes-graduacion.jpg", alt: "Graduación Instituto Primigenias 33" },
  { src: "/images/curso-numerologia-diploma.jpg", alt: "Entrega de Diplomas Numerología" },
  { src: "/images/jornada-abierta-2026.jpg", alt: "Jornada Abierta Presencial" },
  { src: "/images/numerologia-2026.jpg", alt: "Seminario Anual 2026" },
  { src: "/images/diana-numerologia-clase.jpg", alt: "Clase de Numerología Base Óntica" },
  { src: "/images/diana-fundadora-cristales.jpg", alt: "Dirección Institucional" }
];
