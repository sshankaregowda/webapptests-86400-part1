FROM node:8

RUN mkdir ebay-tests-docker
WORKDIR /ebay-tests-docker
COPY . .
COPY ./nightwatch.docker.json ./nightwatch.json

COPY package.json .
RUN yarn install

RUN yarn add nightwatch
CMD ./entrypoint.sh start

