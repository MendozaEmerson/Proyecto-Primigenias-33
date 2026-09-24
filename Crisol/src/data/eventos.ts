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
    titulo: "2026 Cerro Baúl – Moquegua – Perú",
    ubicacion: "Moquegua, Perú",
    descripcion: "El Cerro Baúl es un imponente monumento arqueológico y geográfico ubicado en el distrito de Torata, provincia de Mariscal Nieto, a unos 12-18 kilómetros al norte de la ciudad de Moquegua. La mística del Cerro Baúl lo convierte en uno de los centros energéticos y espirituales más importantes del sur del Perú. Para los pobladores andinos, esta montaña no es un simple cúmulo de rocas, sino un Apu.",
    fotos: [
      { src: "/images/eventos/2026-cerro-1.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-2.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-3.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-4.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-5.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-6.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-7.png", titulo: "Cerro Baúl", tag: "Salida de Campo" },
      { src: "/images/eventos/2026-cerro-8.png", titulo: "Cerro Baúl", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2025",
    titulo: "2025 Ñaupa Iglesia Cusco – Perú",
    ubicacion: "Valle Sagrado de los Incas, Cusco, Perú",
    descripcion: "También conocido como Choquequilla, es uno de los sitios arqueológicos más misteriosos y sagrados del Valle Sagrado de los Incas en Cusco, Perú.",
    fotos: [
      { src: "/images/eventos/2025-naupa-1.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" },
      { src: "/images/eventos/2025-naupa-2.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" },
      { src: "/images/eventos/2025-naupa-3.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" },
      { src: "/images/eventos/2025-naupa-4.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" },
      { src: "/images/eventos/2025-naupa-5.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" },
      { src: "/images/eventos/2025-naupa-6.png", titulo: "Ñaupa Iglesia", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2024",
    titulo: "2024 Isla del Sol - Lago Titicaca - Bolivia",
    ubicacion: "Copacabana, La Paz, Bolivia",
    descripcion: "Es la isla más grande del Lago Titicaca, ubicada en el municipio de Copacabana, dentro del departamento de La Paz, Bolivia. Este místico rincón andino, situado a más de 3,800 metros sobre el nivel del mar, es considerado en la mitología incaica como la cuna de su civilización y el lugar de nacimiento del Sol.",
    fotos: [
      { src: "/images/eventos/2024-isla-1.png", titulo: "Isla del Sol", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-isla-2.png", titulo: "Isla del Sol", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-isla-3.png", titulo: "Isla del Sol", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-isla-4.png", titulo: "Isla del Sol", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-isla-5.png", titulo: "Isla del Sol", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-isla-6.png", titulo: "Isla del Sol", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2024",
    titulo: "2024 El Portal de Aramu Muru – Puno – Perú",
    ubicacion: "Puno, Perú",
    descripcion: "También conocido como Hayu Marca, Ajayu Marka o Willka Uta, es un enigmático sitio histórico-mitológico ubicado en la región de Puno, Perú, cerca del Lago Titicaca. Consiste en una impresionante estructura de piedra con una puerta perfectamente rectangular tallada en roca sólida de unos 7 metros de lado, rodeada de un místico bosque de piedras.",
    fotos: [
      { src: "/images/eventos/2024-aramu-1.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-2.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-3.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-4.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-5.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-6.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-7.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-8.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" },
      { src: "/images/eventos/2024-aramu-9.png", titulo: "Portal Aramu Muru", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2023",
    titulo: "2023 Petroglifos DE La Caldera Arequipa – Perú",
    ubicacion: "Arequipa, Perú",
    descripcion: "Es un valioso sitio arqueológico y ruta de senderismo que esconde arte rupestre milenario entre los distritos de Uchumayo y La Joya, en Arequipa, Perú.",
    fotos: [
      { src: "/images/eventos/2023-petroglifos-1.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-2.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-3.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-4.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-5.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-6.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-7.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-8.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-9.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-10.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-petroglifos-11.png", titulo: "Petroglifos de La Caldera", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2023",
    titulo: "2023 Apu Pitusiray Calca Cusco – Perú",
    ubicacion: "Valle Sagrado de los Incas, Cusco, Perú",
    descripcion: "Es una imponente montaña andina de 4,991 metros de altitud, ubicada en la cordillera de Urubamba, dentro de la provincia de Calca en la Región Cusco, Perú. Esta cumbre es considerada un pilar fundamental en la cosmovisión y mitología del Valle Sagrado de los Incas",
    fotos: [
      { src: "/images/eventos/2023-apu-1.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-2.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-3.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-4.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-5.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-6.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" },
      { src: "/images/eventos/2023-apu-7.png", titulo: "Apu Pitusiray", tag: "Salida de Campo" }
    ]
  },
  {
    anio: "2022",
    titulo: "2022 Cerro Uritorco - Argentina",
    ubicacion: "Capilla del Monte, Córdoba, Argentina",
    descripcion: "El Cerro Uritorco es la máxima elevación de las Sierras Chicas, con 1979 metros de altura, ubicado en la mística localidad de Capilla del Monte, en el Valle de Punilla, Córdoba, Argentina.",
    fotos: [
      { src: "/images/eventos/2022-uritorco-1.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-2.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-3.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-4.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-5.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" },
      { src: "/images/eventos/2022-uritorco-6.png", titulo: "Cerro Uritorco", tag: "Salida de Campo" }
    ]
  }
];