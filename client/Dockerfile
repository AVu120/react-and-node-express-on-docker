# Dockerfile for React client
FROM node:15.1-alpine

# copy local files to app folder
COPY . /usr/src/app

# Working directory be app
WORKDIR /usr/src/app

# Installing dependencies, you'll most likely see warnings, you can ignore
# most of these.
RUN npm i

EXPOSE 3000

CMD ["npm","start"]