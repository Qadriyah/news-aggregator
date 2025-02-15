# News Aggregator

News aggregator website that pulls articles from different sources and displays them in a clean, easy-to-read format.

## Table of contents

- [Tools](#tools)
- [Setup](#setup)
- [To install dependencies run](#to-install-dependencies-run)
- [Set environment variables](#set-environment-variables)
- [Starting local development server](#starting-local-development-server)

## Tools

- [Node](https://nodejs.org/docs/latest/api/) - A Javascript runtime environment.
- [React](https://react.dev/reference/react) - A Javascript library for building user interfaces.
- [NPM](https://www.npmjs.com/) - A package manager

## Setup

Clone the repository:

```
git clone https://github.com/Qadriyah/news-aggregator.git
```

Then change to project directory:

```
cd news-aggregator
```

#### Set environment variables

Be sure to set the environment variables shown in the `.env.example` file

### Starting local development server

#### With docker

```
docker build -t  news-aggregator .
```

This command tags the image with the name `news-aggregator` and specifies the build context as current directory and builds the app using the `Dockerfile`

```
docker run -p 3000:3000 news-aggregator
```

This command will run the app inside a docker container and expose port 3000

#### Without docker

#### To install dependencies run:

```
npm install --force
```

This will install all the dependencies defined in the `package.json` file inside the news-aggregator folder.

#### To start the development serer

```
npm start
```

After starting the local development server, the application can be accessed at:

```
http://localhost:3000
```
