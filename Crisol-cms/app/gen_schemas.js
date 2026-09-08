const fs = require('fs');
const path = require('path');

const base = '/opt/app';

const apiNames = [
  { singular: 'evento-anual', uid: 'api::evento-anual.evento-anual' },
  { singular: 'integrante', uid: 'api::integrante.integrante' },
  { singular: 'galeria-foto', uid: 'api::galeria-foto.galeria-foto' },
  { singular: 'testimonio', uid: 'api::testimonio.testimonio' },
  { singular: 'nivel-pdf', uid: 'api::nivel-pdf.nivel-pdf' },
  { singular: 'seminario-anual', uid: 'api::seminario-anual.seminario-anual' },
  { singular: 'clase-jornada', uid: 'api::clase-jornada.clase-jornada' },
];

for (const item of apiNames) {
  const dir = path.join(base, 'src/api', item.singular);
  
  // Controller
  const controllerContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreController('${item.uid}');\n`;
  const controllerPath = path.join(dir, 'controllers', `${item.singular}.ts`);
  fs.mkdirSync(path.dirname(controllerPath), { recursive: true });
  fs.writeFileSync(controllerPath, controllerContent, 'utf8');

  // Router
  const routerContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreRouter('${item.uid}');\n`;
  const routerPath = path.join(dir, 'routes', `${item.singular}.ts`);
  fs.mkdirSync(path.dirname(routerPath), { recursive: true });
  fs.writeFileSync(routerPath, routerContent, 'utf8');

  // Service
  const serviceContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreService('${item.uid}');\n`;
  const servicePath = path.join(dir, 'services', `${item.singular}.ts`);
  fs.mkdirSync(path.dirname(servicePath), { recursive: true });
  fs.writeFileSync(servicePath, serviceContent, 'utf8');

  console.log('Created controller, router, service for:', item.singular);
}
