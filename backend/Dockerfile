FROM node:14.15.0-alpine

COPY . .

RUN npm install && npm run build

EXPOSE 3000
CMD NODE_ENV='production' npm run migrate && NODE_ENV='production' node dist/main.js
