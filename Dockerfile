FROM node:6-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
