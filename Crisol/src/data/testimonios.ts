export interface Testimonio {
  nombre: string;
  foto: string;
  rol: string;
  cita: string;
}

export const testimoniosList: Testimonio[] = [
  {
    nombre: "Alumno de Numerología",
    foto: "/images/alumno1.png",
    rol: "Numerología Óntica",
    cita: "«Gracias a la numerología, logré reconocer mis sombras, dones y esencia. Esta herramienta fue fundamental en mi autoconocimiento, ya que me ayudó a comprender mi propósito de vida y a encontrar el camino hacia la respuesta de la gran pregunta: ¿quién soy?»"
  },
  {
    nombre: "Alumno de Numerología",
    foto: "/images/alumno2.png",
    rol: "Numerología Óntica",
    cita: "Antes de descubrir la numerología, sentía que mi vida era una rutina eterna y sin sentido, limitada a trabajar y sobrevivir; sin embargo, las sesiones y clases de este maravilloso tema transformaron por completo mi perspectiva al recordarme mi verdadera identidad, mis talentos olvidados y el propósito de mis vivencias pasadas. Este conocimiento no solo me abrió los ojos y reavivó mi chispa interior con esperanza, sino que se convirtió en la guía fundamental que hoy me inspira a seguir descubriéndome y a cumplir con mi misión en este mundo."
  }
];

export const galleryCarouselImages = [
  { src: "/images/lago-titicaca.png", alt: "Lago Titicaca" },
  { src: "/images/aramu-muru.png", alt: "Aramu Muru" },
  { src: "/images/naupa-iglesia.png", alt: "Ñaupa Iglesia" },
  { src: "/images/apu-pitusiray.png", alt: "Apu Pitusiray" },
  { src: "/images/carrusel-4.png", alt: "Evento Presencial" },
  { src: "/images/numerologia-main.png", alt: "Clase de Numerología Base Óntica" }
];
