# ==========================================
# ETAPA 1: Compilación del proyecto Astro
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Deshabilitar telemetría de Astro para evitar bloqueos en compilación
ENV ASTRO_TELEMETRY_DISABLED=1

# Copiar archivos de dependencias e instalar
COPY package.json ./
RUN npm install

# Copiar todo el código fuente y construir la landing
COPY . .
RUN npm run build

# ==========================================
# ETAPA 2: Servidor Web Nginx ultra ligero
# ==========================================
FROM nginx:alpine AS runner

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los HTML/CSS compilados desde la Etapa 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
