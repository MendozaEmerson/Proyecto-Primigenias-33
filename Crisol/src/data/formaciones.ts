export interface Formacion {
  id: string;
  titulo: string;
  imagen: string;
  desc: string;
  link: string;
  btnText: string;
}

export const formacionesList: Formacion[] = [
  {
    id: "numerologia",
    titulo: "ESCUELA DE NUMEROLOGÍA ÓNTICA",
    imagen: "/images/numerologia-main.png",
    desc: "Estudio del potencial numérico personal, lectura transpersonal de tu nombre y fecha de nacimiento.",
    link: "/numerologia/",
    btnText: "Ver Formación"
  }
];

export const talleresList: Formacion[] = [
  {
    id: "taller-bebes",
    titulo: "CO - CREEMOS EL NOMBRE DE TU BEBE",
    imagen: "/images/taller-nombres-oficial.png",
    desc: "Hablemos del nombre de tu bebé... no desde la moda, sino desde su esencia pura.",
    link: "/talleres/nombres-bebes/",
    btnText: "Ver Taller"
  }
];

export interface Especializacion {
  slug: string;
  titulo: string;
  desc: string;
  badge: string;
  imagen: string;
  detalles: string[];
}

export const especializacionesList: Especializacion[] = [
  {
    slug: "lineas-temporales",
    titulo: "Líneas Temporales y Multidimensionalidad",
    desc: "Exploración de la percepción del tiempo óntico, ciclos de sincronicidad y desbloqueo de potenciales paralelos.",
    badge: "Especialización Avanzada",
    imagen: "/images/master-especializaciones.jpg",
    detalles: [
      "Comprensión del tiempo cuántico e inconsciente.",
      "Técnicas de reconfiguración de memorias limitantes.",
      "Prácticas guiadas de aceleración de frecuencia."
    ]
  },
  {
    slug: "4-elementos",
    titulo: "Los 4 Elementos y la Psicología Óntica",
    desc: "Integración de Fuego, Agua, Aire y Tierra como matrices energéticas en la lectura transpersonal.",
    badge: "Diplomatura Especial",
    imagen: "/images/diana-fundadora-cristales.jpg",
    detalles: [
      "Diagnóstico temperamental por frecuencias elementales.",
      "Equilibrio de polaridades emocionales e intuitivas.",
      "Herramientas terapéuticas de reconexión con la naturaleza."
    ]
  },
  {
    slug: "numeros-maestros",
    titulo: "Números Maestros y Códigos de la Mente",
    desc: "Decodificación profunda de los dígitos dobles (11, 22, 33, 44) y su impacto en la misión de vida.",
    badge: "Nivel Superior",
    imagen: "/images/numerologia-main.png",
    detalles: [
      "Arquitectura sagrada de los números dobles.",
      "Misión colectiva y responsabilidad transpersonal.",
      "Casos de estudio prácticos en consulta individual."
    ]
  },
  {
    slug: "futurologia",
    titulo: "Futurología y Proyección de Ciclos",
    desc: "Cálculo de tendencias anuales, cuatrimestrales y días clave para la toma de decisiones estratégicas.",
    badge: "Módulo Profesional",
    imagen: "/images/numerologia-2026.jpg",
    detalles: [
      "Matriz de cálculo del año personal y universal.",
      "Interpretación de tránsitos numéricos clave.",
      "Elaboración de informes de proyección profesional."
    ]
  },
  {
    slug: "formacion-numero",
    titulo: "Formación de Número y Geometría de la Frecuencia",
    desc: "La estructura oculta de la energía numérica y su manifestación geométrica en el Ser.",
    badge: "Mantenibilidad Óntica",
    imagen: "/images/curso-numerologia-diploma.jpg",
    detalles: [
      "Patrones geométricos de la frecuencia numérica.",
      "Conexión entre número, forma y conciencia.",
      "Aplicaciones prácticas en sesiones clínicas."
    ]
  },
  {
    slug: "4-puertas",
    titulo: "Las 4 Puertas del Aprendizaje Óntico",
    desc: "Las etapas fundamentales del despertar y la integración del propósito superior.",
    badge: "Máster Exclusivo",
    imagen: "/images/diana-numerologia-clase.jpg",
    detalles: [
      "Reconocimiento de la sombra y arquetipos.",
      "Pasaje por la puerta de la mente y la emoción.",
      "Integración del Ser consciente en la cotidianeidad."
    ]
  }
  {
    slug: "frecuencia-emprendedora",
    link: "/talleres/frecuencia-emprendedora/",
    titulo: "Taller Frecuencia Emprendedora 33",
    subtitulo: "Dirección a tu propósito",
    imagen: "/images/frecuencia-emprendedora.png",
    desc: "Herramientas desde la Numerología Óntica para dar dirección a tu propósito empresarial.",
    btnText: "Conocer Taller"
  },
  {
    slug: "arquetipos-frecuencias",
    link: "/talleres/arquetipos-frecuencias/",
    titulo: "Arquetipos y Frecuencias",
    subtitulo: "Numerología en Consulta",
    imagen: "/images/arquetipos-frecuencias.png",
    desc: "Integración de la Numerología óntica en la Consulta Terapéutica para optimizar diagnósticos.",
    btnText: "Conocer Taller"
  }
];