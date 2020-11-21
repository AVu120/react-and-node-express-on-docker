#  Dockerfile for Node Express Backend
FROM node:15.1-alpine

# Create App Directory
COPY . /usr/src/app

# Working directory be app
WORKDIR /usr/src/app

# Installing dependencies.
RUN npm i -g nodemon
RUN npm i

EXPOSE 5000

CMD ["npm","start"]