[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/iuze45af)
# Not fast just furious: Shopping list
> By Maria Kailahti and Nikola Simovic
> @mariakailahti @Nikola-Simovic

Welcome to our project for the Web Software Production course. We are developing a comprehensive shopping list application, showcasing our proficiency in full-stack development. Our project has a CI/CD system, using the tools and methods we learned in the course. This project represents our learning journey in full-stack development.

------------------------

## Server information

Server address: https://23wsp-pro12.course.tamk.cloud/
The IP address: 172.16.6.26
    Ports:
    * frontend: 172.16.6.26:8000 
    * backend 172.16.6.26:4000

Endpoints:

### How to run locally: 

- dependencies that need to be installed:

for backend dependencies:
```
npm install
```

for frontend dependencies:
```
npm test
```

------------------------

## Phases

**Phase 1**

Installing and creating boilerplates for backend and frontend:

    ```
    npx create-express-api -d backend
    ```
    ```
    npx create-react-app frontend
    ```

**Phase 2**

Created the needed dockerfiles and made sure that all containers are running and that its running in the server

**Phase 3**

A CI/CD pipeline was set up by following stages: test, build, and deploy. To ensure functionality, we installed dependencies in both the backend and frontend folders. Before installing the required dependencies, navigate to the correct folder from the main directory using 'cd backend' and 'cd frontend'.

for backend dependencies:
```
npm install
```

for frontend dependencies:
```
npm test
```

A remote server was taken into use in this phase and here the details for it:

* Server address: [address](https://23wsp-pro12.course.tamk.cloud/)
* the IP address: 172.16.6.26
    Ports:
    * frontend: 172.16.6.26:8000 
    * backend 172.16.6.26:4000


**Phase 4**

**Phase 5**


------------------------

## Release History

* 0.1.0
    * Initial Setup
    * README

* 0.2.0
    * Dockerizing the localhost 
    * Updated README

* 0.3.0
    * CI/CD Pipeline and Remote Server
    * Updated README


------------------------

Expected project grade and reasoning behind it:

