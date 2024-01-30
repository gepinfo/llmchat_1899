FROM node:20.2-alpine
COPY . /orgdb
WORKDIR /orgdb
RUN npm install
RUN npm i -g ts-node
CMD npm run prod