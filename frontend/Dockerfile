FROM node:14.17.1-alpine

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]