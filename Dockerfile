FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]