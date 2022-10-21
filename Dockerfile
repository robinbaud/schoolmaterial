FROM node:14.17.3

WORKDIR /app
COPY . .
RUN rm -rf node_modules

RUN npm i yarn
RUN yarn install

EXPOSE 3000