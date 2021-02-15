FROM node:12-alpine
WORKDIR /usr/src/app
ADD . .
COPY package*.json ./
RUN npm i
USER node
EXPOSE 8081
#CMD ['npm', 'start']