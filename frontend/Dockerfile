FROM node:14.15.0

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD node server/main.js
