FROM node:19-bullseye
RUN npm prune --production
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .