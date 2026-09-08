FROM node:20-alpine

RUN apk add --no-cache python3 make g++ gcc

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
