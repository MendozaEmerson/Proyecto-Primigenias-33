export interface Docente {
  id: string;
  nombre: string;
  rol: string;
  especialidad: string;
  bio: string;
  imagen: string;
  badge: string;
  modalidad: string;
}

export const docentesList: Docente[] = [
  {
    id: "diana-braconi",
    nombre: "Diana Braconi",
    rol: "Directora Institucional y Creadora del Método",
    especialidad: "Numerología Óntica & Ciencias Transpersonales",
    bio: "Más de 20 años investigando la frecuencia numérica, arquetipos junguianos y desarrollo del potencial humano.",
    imagen: "/images/directora-diana.jpg",
    badge: "badge-gold",
    modalidad: "Docente Titular"
  },
  {
    id: "equipo-docente-1",
    nombre: "Lic. Fernanda Cassia Alfano",
    rol: "Docente de Psicología Transpersonal",
    especialidad: "Arquetipos Junguianos & Decodificación",
    bio: "Licenciada en Psicología con especialización en ciencias ónticas y herramientas de integración de sombra.",
    imagen: "/images/directorio-profesionales.jpg",
    badge: "badge-cyan",
    modalidad: "Cuerpo Docente"
  },
  {
    id: "equipo-docente-2",
    nombre: "Lorena Paula Rodríguez",
    rol: "Docente de Numerología Base Óntica",
    especialidad: "Análisis de Matriz de Nacimiento",
    bio: "Consultora profesional en matrices numéricas personales y facilitadora en desarrollo transpersonal.",
    imagen: "/images/diana-numerologia-clase.jpg",
    badge: "badge-gold",
    modalidad: "Cuerpo Docente"
  },
  {
    id: "equipo-docente-3",
    nombre: "Zulma Ofelia Christensen",
    rol: "Facilitadora en Memorias Cuánticas",
    especialidad: "Sincronicidades & Símbolos",
    bio: "Especialista en lectura de arquetipos y facilitación de talleres prácticos de cartas e inconsciente colectivo.",
    imagen: "/images/master-especializaciones.jpg",
    badge: "badge-cyan",
    modalidad: "Cuerpo Docente"
  }
];
