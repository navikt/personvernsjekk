FROM node:alpine
ADD . /src
WORKDIR /src
RUN npm ci
ENTRYPOINT ["npm", "start"]
