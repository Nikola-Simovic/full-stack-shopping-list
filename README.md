[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/iuze45af)
# Not fast just furious: Shopping list
> By Maria Kailahti and Nikola Simovic ┃ @mariakailahti @Nikola-Simovic

Welcome to our project for the Web Software Production course. We are developing a comprehensive shopping list application, showcasing our proficiency in full-stack development. Our project has a CI/CD system, using the tools and methods we learned in the course. This project represents our learning journey in full-stack development.

------------------------

## Server information

Server address: https://23wsp-pro12.course.tamk.cloud/

The IP address: 172.16.6.26
    
    
Ports:
* frontend: 172.16.6.26:8000 
* backend 172.16.6.26:4000


Endpoint:  https://23wsp-pro12.course.tamk.cloud/api/v1/items

* Endpoint for item 1: https://23wsp-pro12.course.tamk.cloud/api/v1/items/1
* Endpoint for item 2: https://23wsp-pro12.course.tamk.cloud/api/v1/items/2
* Endpoint for item 3: https://23wsp-pro12.course.tamk.cloud/api/v1/items/3

Other numbers will not not work since we only have 3 items in the backend api. Any other number will give this message: 

```
{"message":"Not found"}
```

### How to run locally: 


In order to run the code locally, run npm install in the appropriate folders (frontend and backend), after which by running the "npm start" command in the terminal, the frontend or backend will start functioning and will be accessible on your localhost via ports 3000 and 5000.

dependencies that need to be installed:


for backend dependencies:
```
npm install
```

for frontend dependencies:
```
npm install
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

Created the needed dockerfiles and made sure that all containers are running and that its running in the local host properly.

**Phase 3**

In this phase two CI/CD pipelines were set up, with the following stages: test, build, and deploy. One in order to make sure that when posting something to main everything functions properly, and the other in order to make sure the code is working properly before a pull request can be made. To ensure functionality, we installed dependencies in both the backend and frontend folders. Before installing the required dependencies yourself, navigate to the correct folder from the main directory using 'cd backend' and 'cd frontend'.

for backend dependencies:
```
npm install
```

for frontend dependencies:
```
npm install
```

A remote server was taken into use in this phase and here the details for it:

* Server address: [address](https://23wsp-pro12.course.tamk.cloud/)
* the IP address: 172.16.6.26
    Ports:
    * frontend: 172.16.6.26:8000 
    * backend 172.16.6.26:4000

Finally we created environmental secrets and adjusted branch protection via github.

**Phase 4**

In this phase, we created a Shopping List Application using React.js for the frontend. The frontend comprises a basic container that has all the required features. A functional API was also implemented to manage shopping list items, stored within an array. Upon opening the app, a set of sample items is displayed.

To add an item to the list, you can either click the plus sign or press Enter. Additionally, the application supports modifying item quantities through plus and minus buttons, as well as deleting items using the trash button. Each item has a bullet point, and clicking on the circle adds a checkmark, indicating that the item has been acquired.

At the end of the list, a total quantity is provided, giving users an overview of the total number of items on the list. Backend adjustments were made to handle GET, POST, and DELETE calls. The implementation of GET by ID allows for retrieving individual items from the API endpoint, with three default items currently available.

Furthermore, we've incorporated validation into the system through the use of a schema. This ensures that there is always a quantity associated with each item and that item names are required to be at least 1 letter long. Additionally, the validation prevents the quantity from going below 0; if such an attempt is made, the system will display an error message, enhancing the robustness and user-friendliness of the application.

For ease of testing and verification, a .rest file has been included, specifying the requests required for checking the functionality of the application.


**Phase 5**


------------------------

## Release History

* 0.1.0
    * Initial Setup
    * README

* 0.2.0
    * Dockerizing and making sure everything operates properly in the localhost
    * Updated README

* 0.3.0
    * CI/CD Pipelines and Remote Server taken into function
    * Updated README

* 0.4.0
    * Frontend
    * Backend
    * Updated README

------------------------

=======

Expected project grade and reasoning behind it:
50%, all the specified functionalities for the steps up until this point are met.
