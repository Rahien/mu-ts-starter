FROM node:20.10.0-alpine3.18

WORKDIR /app
ADD package*.json ./
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 80
EXPOSE 9229
CMD ["node", "dist/index.js"]
