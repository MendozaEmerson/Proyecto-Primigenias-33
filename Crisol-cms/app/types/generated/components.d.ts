import type { Schema, Struct } from '@strapi/strapi';

export interface EventosSubEvento extends Struct.ComponentSchema {
  collectionName: 'components_eventos_sub_eventos';
  info: {
    displayName: 'sub-evento';
    icon: 'calendar';
  };
  attributes: {
    etiqueta_badge: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    titulo_subevento: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'eventos.sub-evento': EventosSubEvento;
    }
  }
}
