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
    id: "omar-zambrano",
    nombre: "Omar Zambrano",
    rol: "Docente Instructor",
    especialidad: "Numerología Óntica & Ciencias Transpersonales",
    bio: "Docente y facilitador especializado en ciencias ónticas, arquetipos y desarrollo transpersonal.",
    imagen: "/images/omar.png",
    badge: "badge-gold",
    modalidad: "Docente Titular"
  }
];
