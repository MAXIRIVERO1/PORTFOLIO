const db = [
    {
        name: "FOODS",
        title: "Proyecto food",
        description: `He tenido el placer de completar con éxito un proyecto individual, superando sus desafíos y complejidad.
       
      SPA (Single Page Application) que permite al usuario buscar recetas, crear una receta, poder filtrar por puntuación, tipo de dieta, al igual que ordenamiento alfabético.
      
      Tech skills: React.js · redux · Sequelize.js · GitHub · Hojas de estilos en cascada (CSS) · Node.js · SQL · JavaScript · HTML · Express.js`,
        english: {
            title: "Food Project",
            description: `I have had the pleasure of successfully completing an individual project, overcoming its challenges and complexity.
       
        SPA (Single Page Application) that allows the user to search for recipes, create a recipe, be able to filter by score, type of diet, as well as alphabetical order.
       
        Tech skills: React.js · redux · Sequelize.js · GitHub · Cascading style sheets (CSS) · Node.js · SQL · JavaScript · HTML · Express.js`
        },
        imageName: "food.jpg"
    },
    {
        name: "PORTFOLIO",
        title: "Mi Portfolio",
        description: `¡Bienvenido a mi Portafolio Personal!
      En mi rincón en línea, te invito a explorar mi viaje a través del mundo de la programación y el desarrollo web. Aquí encontrarás una colección de proyectos, logros y experiencias que han moldeado mi camino como desarrollador web Full Stack.
      Tech skills: HTML, CSS, JAVASCRIPT, REACT.`,
        english: {
            title: "My Portfolio",
            description: `Welcome to my Personal Portfolio!
        In my online corner, I invite you to explore my journey through the world of programming and web development. Here you will find a collection of projects, achievements and experiences that have shaped my path as a Full Stack web developer.
        Tech skills: HTML, CSS, JAVASCRIPT, REACT.`
        },
        imageName: "portfolio.jpg"
    },
    {
        name: "XUL",
        title: "Proyecto para Museo Xul Solar",
        description: `Estoy muy contento de haber tenido la oportunidad de trabajar en un proyecto real con Henry y nuestro equipo. A pesar de enfrentar distintas adversidades, logramos superarlas con éxito.
      SPA(single page aplication) en la que podes crear un usuario, recuperar contraseña, gestionar la reserva de actividades, realizar donaciones con mercado pago, investigar sobre Xul Solar, y gestionar todas las funcionalidades de la pagina con un perfil de administrador.

      Utilice tecnologias como: HTML, CSS, JAVA SCRIPT, NODE.JS, EXPRESS, SQL, NODEMAILER, GIT, GITHUB, SEQUELIZE, REACT, REDUX`,
        english: {
            title: "Museum Xul Solar Project",
            description: `I am very glad to have had the opportunity to work on a real project with Henry and our team. Despite facing various adversities, we managed to overcome them successfully.
        SPA (single page application) in which you can create a user, recover password, manage the reservation of activities, make donations with a paid market, research about Xul Solar, and manage all the functionalities of the page with an administrator profile.
 
        Use technologies such as: HTML, CSS, JAVA SCRIPT, NODE.JS, EXPRESS, SQL, NODEMAILER, GIT, GITHUB, SEQUELIZE, REACT, REDUX`
        },
        imageName: "xul.jpg"
    },
    {
        name: "rickAndMorty",
        title: "Proyecto del bootcamp de Soy HENRY",
        description: `Este es el proyecto que debemos hacer en el bootcamp de Soy Henry.
      
      SPA (Single Page Application): Contiene desarrollo frontend backend(CRUD completo), base de datos y tambien usa una API externa.
      
      Tech skills: Javascript, Html, Css, React, Redux, Node.js, Express, MongoDB y Mongoose.`,
        english: {
            title: "Rick and Morty",
            description: `This is the project we must work on in the Soy Henry bootcamp.

        SPA (Single Page Application): It includes full-stack development (complete CRUD operations) with frontend and backend components, a database, and also utilizes an external API.
        
        Tech skills: Javascript, Html, Css, React, Redux, Node.js, Express, MongoDB, and Mongoose.`
        },
        imageName: "rickCapture.png"
    },
    {
        name: "notes",
        title: "Aplicación para tomar notas",
        description: `Este es un proyecto que he trabajado como parte de un challenge.
      SPA (Single Page Application): Contiene desarrollo frontend, backend(CRUD completo) y base de datos.
      Tech skills: Javascript, Html, Css, React, Redux, Node.js, Express, PostgreSQL y Sequelize.`,
        english: {
            title: "Notes application",
            description: `This is a project I've worked on as part of a challenge.

        Key features:
        SPA (Single Page Application): It includes frontend development, backend (complete CRUD operations), and a database.
        Tech skills: Javascript, Html, Css, React, Redux, Node.js, Express, PostgreSQL, and Sequelize.`
        },
        imageName: "notesCapture.png"
    },
    {
        name: "pythonCrud",
        title: "User Management API with FastAPI",
        description: `Este es un proyecto que trabajé como parte de un challenge.
      API con FastAPI y MongoDB que permite operaciones CRUD completas para la gestión de usuarios.
      Tech skills: Python, FastAPI, MongoDB, y Uvicorn.`,
        english: {
            title: "User Management API",
            description: `This is a project I worked on as part of a challenge.
    
        Key features:
        A full CRUD API built with FastAPI and MongoDB for user management.
        Tech skills: Python, FastAPI, MongoDB, and Uvicorn.`
        },
        imageName: "python.png"
    },
    {
        name: "taskApi",
        title: "Task Management API with Node.js",
        description: `Este es un proyecto diseñado para gestionar tareas mediante un backend construido con Node.js, Express y PostgreSQL. Proporciona un CRUD completo para crear, obtener, actualizar y eliminar tareas.

      Tech skills: Node.js, Express, PostgreSQL, Sequelize.`,
        english: {
            title: "Task Management API",
            description: `This is a project designed for managing tasks via a backend built with Node.js, Express, and PostgreSQL. It provides full CRUD operations to create, retrieve, update, and delete tasks.

        Tech skills: Node.js, Express, PostgreSQL, Sequelize.`
        },
        imageName: "apiProjects.png"
    },
    {
        name: "contactApi",
        title: "Contact Management API with Node.js",
        description: `Este es un proyecto desarrollado para gestionar contactos a través de un backend con Node.js, Express y PostgreSQL. Proporciona operaciones CRUD completas para crear, obtener, actualizar y eliminar contactos, con un enfoque en la eficiencia y facilidad de uso.
      
      Tech skills: Node.js, Express, PostgreSQL, Sequelize.`,
        english: {
            title: "Contact Management API",
            description: `This is a project built for managing contacts via a backend using Node.js, Express, and PostgreSQL. It provides full CRUD operations to create, retrieve, update, and delete contacts with a focus on efficiency and ease of use.

        Tech skills: Node.js, Express, PostgreSQL, Sequelize.`
        },
        imageName: "apiProjects.png"
    },
    {
        name: "productInventory",
        title: "Product Inventory API with Node.js",
        description: `Este es un proyecto creado para gestionar un inventario de productos usando un backend con Node.js, Express y PostgreSQL. Ofrece un CRUD completo para agregar, obtener, actualizar y eliminar productos, facilitando la administración eficiente de inventarios.

      Tech skills: Node.js, Express, PostgreSQL, Sequelize.`,
        english: {
            title: "Product Inventory API",
            description: `This is a project built for managing a product inventory using a backend with Node.js, Express, and PostgreSQL. It provides full CRUD operations to add, retrieve, update, and delete products, ensuring efficient inventory management.

        Tech skills: Node.js, Express, PostgreSQL, Sequelize.`
        },
        imageName: "apiProjects.png"
    },
    {
        name: "userAuthApi",
        title: "User Authentication API with JWT",
        description: `Este es un proyecto que se centra en la autenticación de usuarios utilizando JWT y ofrece operaciones CRUD sencillas para la gestión de usuarios. Permite crear, obtener, actualizar y eliminar usuarios, todo bajo un sistema seguro de autenticación.

      Tech skills: Node.js, Express, PostgreSQL, Sequelize, JWT Authentication, Bcrypt.`,
        english: {
            title: "User Authentication API",
            description: `This is a project focused on user authentication using JWT and provides simple CRUD operations for user management. It allows creating, retrieving, updating, and deleting users, all secured under an authentication system.

        Tech skills: Node.js, Express, PostgreSQL, Sequelize, JWT Authentication, Bcrypt.`
        },
        imageName: "apiProjects.png"
    },
    {
        name: "bookUserApi",
        title: "Book Management API with JWT Authentication",
        description: `Este proyecto incluye autenticación de usuarios utilizando JWT y hashing de contraseñas. Contiene un CRUD completo tanto para usuarios como para libros. La API fue testeada en Hoppscotch y ofrece un sistema seguro para gestionar usuarios y libros.

      Tech skills: Node.js, Express, PostgreSQL, Sequelize, JWT Authentication, Bcrypt, Hoppscotch.`,
        english: {
            title: "Book Management API with JWT Authentication",
            description: `This project includes user authentication using JWT and password hashing. It features full CRUD for both users and books. The API was tested in Hoppscotch and provides a secure system to manage users and books.

        Tech skills: Node.js, Express, PostgreSQL, Sequelize, JWT Authentication, Bcrypt, Hoppscotch.`
        },
        imageName: "apiProjects.png"
    }
]
export default db;