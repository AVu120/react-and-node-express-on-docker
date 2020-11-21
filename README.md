<h1 align="center">React & Node-Express on Docker Template</h1>

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Prerequisites to Getting Started](#prerequisites-to-getting-started)
- [Getting Started](#getting-started)
- [Accessing the Application](#accessing-the-application)
- [Troubleshooting](#troubleshooting)

## About

A template for setting up a React frontend and a Node-Express backend in docker containers using a single command.

## Built With

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## Prerequisites to Getting Started

- Docker Desktop

## Getting Started

1. Clone the project source code.

```
git clone https://github.com/AVu120/react-and-node-express-on-docker.git
```

2. Navigate into the project directory.

```
cd react-and-node-express-on-docker
```

3. Run this single command to build the react-frontend (client) & node-express-backend (server) docker images, run them as containers, and have them connect to each other.

```
docker-compose up
```

- Wait until both containers are up and running before proceeding.
- Client is running on port 3000.
- Server is running/listening on port 5000.

4. When necessary, install only the client dependencies you need (e.g. install react-scripts to execute 'npm run build' before deploying app to production).

```
cd client
npm i react-scripts etc.
```

5. When you need to add-new/update npm packages to/in an image/container, update the relevant package.json, stop that container first, then run

```
docker-compose build <service-name>
```

then run

```
docker-compose up
```

to restart all the containers (with the new/updated packages).

## Accessing the Application

1. Enter localhost:3000 into any web-browser.

## Troubleshooting

### No such file or directory error:

- After running `docker-compose up`, if you see anything like the below error messages:

```
npm ERR! path /usr/src/app/package.json
npm ERR! enoent ENOENT: no such file or directory, open '/usr/src/app/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
Error: Cannot find module '/usr/src/app/package.json'
```

- Open Docker Desktop > Settings > Resources > File Sharing:
- Unselect the local drive which contains the react-and-node-express-on-docker directory (or the directory containing this project's code).
- Click 'Apply & Restart' button.
- Re-select the previously unselected local drive.
- Click 'Apply & Restart' button.
- Run `docker-compose up` and the error shouldn't occur now.
