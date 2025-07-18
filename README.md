# iNews - A Dynamic Online News Portal (Node.js & MongoDB Atlas)

---

## Introduction

Welcome to **iNews**, a robust and feature-rich online news portal meticulously crafted using **Node.js** as its powerful backend framework and **MongoDB Atlas** for its scalable and cloud-hosted NoSQL database. This project serves as a comprehensive platform for the aggregation, management, and display of news articles, offering a dynamic and engaging experience for both content creators and readers. Built upon the popular Express.js framework for efficient routing, EJS for dynamic server-side rendering, and leveraging MongoDB Atlas for data persistence, iNews exemplifies a full-stack JavaScript application designed for modern web environments. It aims to provide users with a seamless experience for Browse current events, categorized content, and administrative tools for content management.

---
##Link Deploy

https://online-news-website-nodejs-mongodb-atlat.onrender.com

## Core Features

iNews comes packed with a suite of functionalities to deliver a complete news Browse and management experience:

* **Dynamic Homepage Display:** The landing page serves as the central hub, presenting a curated selection of the **latest news articles** and **most viewed content**. Articles are intuitively grouped and displayed, ensuring that readers can quickly grasp trending topics and newly published stories.
* **Comprehensive Category Management:** The platform implements a robust system for **categorizing news articles** into various topics or "chuyên mục." This feature not only aids in content organization but also allows readers to filter and explore news based on their specific interests, enhancing content discoverability.
* **User Authentication & Authorization System:** iNews incorporates a secure and efficient user management system. It supports **user registration** and **login** functionalities, managing user sessions through `express-session` for persistent login states. Password security is paramount, with user passwords securely hashed using `bcryptjs` before storage, protecting sensitive user data.
* **Intelligent Search Functionality:** A powerful search bar allows users to **query news articles by keywords**. This feature enables quick and efficient retrieval of specific information or articles related to a particular topic, greatly improving user experience.
* **Dedicated Administration Panel (Admin Panel):** For content managers and administrators, iNews provides a secure and intuitive **admin panel**. This area is designed for comprehensive content management, including the creation, editing, and deletion of articles, categories, and user accounts. Access to this panel is restricted and requires proper authentication, ensuring data integrity and security.
* **Interactive User Feedback & Notifications:** The application enhances user interaction by displaying clear and concise **success or error messages** directly on the user interface. This immediate feedback helps guide users through various actions, from successful logins to form submission errors.
* **Responsive Web Design:** Built with modern web standards and utilizing frontend frameworks like Bootstrap, iNews boasts a **responsive user interface**. This ensures an optimal viewing and interaction experience across a wide range of devices, from desktops to tablets and smartphones, adapting seamlessly to different screen sizes.

---

## Technologies Utilized

The iNews project is a testament to the power of the MERN stack (MongoDB, Express, React/EJS, Node.js, though EJS is used here instead of React) and incorporates several key technologies to deliver its robust features:

* **Backend Technologies:**
    * **Node.js:** The core JavaScript runtime environment that executes server-side code, providing a high-performance and non-blocking I/O model essential for web applications.
    * **Express.js:** A minimalist and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's used for routing HTTP requests, middleware integration, and serving static files.
    * **Mongoose:** An elegant Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies interaction with the MongoDB database by providing a schema-based solution for modeling application data, handling data validation, and building powerful queries.
    * **Express-session:** A middleware for Express that enables session management. It creates and manages sessions for users, allowing for persistent user states (like login status) across multiple requests, crucial for authentication.
    * **Bcryptjs:** A robust library for hashing passwords. It significantly enhances security by making it computationally infeasible to reverse engineer passwords from their stored hash values, protecting user credentials against breaches.
    * **Nodemon:** A development utility that automatically restarts the Node.js application when file changes are detected. This greatly accelerates the development workflow by removing the need for manual server restarts.
* **Frontend Technologies:**
    * **EJS (Embedded JavaScript):** A powerful templating engine that allows you to embed plain JavaScript within your HTML. This enables the server to dynamically generate HTML content before sending it to the client, facilitating the creation of data-driven web pages.
    * **Bootstrap (CSS Framework):** A widely adopted open-source CSS framework that provides pre-built components, responsive grid systems, and a collection of JavaScript plugins. It ensures the application's aesthetic appeal and responsiveness across various devices.
* **Database:**
    * **MongoDB Atlas:** A fully managed, cloud-based MongoDB service. It offers a highly scalable, available, and secure NoSQL database solution, eliminating the complexities of database administration and allowing developers to focus on application logic. The project leverages its robust features for storing and retrieving news articles, user data, and categories.

---

## Project Structure

The iNews project adheres to a well-organized and modular directory structure, promoting maintainability and scalability:

* **`index.js`**: This is the application's **main entry point**. It's responsible for initializing the Express.js server, establishing the connection to MongoDB Atlas, configuring `express-session` middleware, setting up view engine (EJS), serving static files from the `public` directory, and registering all the application's routers.
* **`package.json`**: This file acts as the **project manifest**. It contains vital metadata about the project, defines executable scripts (like `npm run test` which uses `nodemon`), and lists all the project's external dependencies (e.g., `express`, `mongoose`, `bcryptjs`, `ejs`, `express-session`, `nodemon`), which `npm install` uses to set up the project environment.
* **`routers/`**: This directory encapsulates all the application's **routing logic**, following a modular approach. Each file within this directory handles a specific set of routes, improving code organization and readability:
    * `index.js`: Manages routes for the main homepage and general public-facing functionalities.
    * `auth.js`: Dedicated to authentication-related routes, including user registration (`/dangky`), login (`/dangnhap`), and logout (`/dangxuat`).
    * `chude.js`: Handles routes pertaining to news categories (chuyên mục), likely for displaying articles by category or managing categories in the admin panel.
    * `taikhoan.js`: Manages routes for user account functionalities, potentially including profile management or user listings for administrators.
    * `baiviet.js`: Controls routes for news articles, covering displaying article details (`/baiviet/chitiet/:id`), listing articles by category (`/baiviet/chude/:id`), and potentially administrative article management.
* **`views/`**: This directory is where all the **EJS template files** reside. These files define the structure and dynamic content of the web pages. The Express application uses these templates to render HTML sent to the client, injecting data from the server.
* **`public/`**: This directory serves as the repository for all **static assets** of the web application. This includes CSS stylesheets (e.g., `css/app.css`), JavaScript files (e.g., `js/app.js`), images (e.g., those found in `images/instagram/`), and any other client-side resources that are served directly to the browser without server-side processing.

---

## Local Installation and Development Guide

To get the iNews news portal up and running on your local machine for development or testing, follow these detailed steps:

1.  **Clone the Repository:**
    Start by cloning the project's source code from its GitHub repository to your local machine using Git:
    ```bash
    git clone [https://github.com/hkhuang07/Online-News-Site-NodeJS-MongoDB-Atlat.git](https://github.com/hkhuang07/Online-News-Site-NodeJS-MongoDB-Atlat.git)
    cd Online-News-Site-NodeJS-MongoDB-Atlat
    ```

2.  **Install Dependencies:**
    Navigate into the project directory (if you haven't already) and install all the necessary Node.js packages listed in `package.json`. This command will download and set up all the required libraries:
    ```bash
    npm install
    ```

3.  **Configure MongoDB Atlas Connection:**
    Your application requires a connection to a MongoDB Atlas cluster to store and retrieve data.
    * **Obtain Your Connection String:** Ensure you have your MongoDB Atlas connection string readily available. This string typically starts with `mongodb+srv://` and includes your cluster details, username, and password.
    * **Update `index.js` (for local development):** In your `index.js` file, locate the `mongoose.connect` line. For local testing, you might find the connection string directly embedded:
        ```javascript
        var uri = '[YOUR-PROJECT-URI]';
        mongoose.connect(uri).catch(err => console.log(err));
        ```
        **Important:** While this works for local development, it is **highly recommended to use environment variables** for your MongoDB Atlas connection string in a production environment for security reasons. For local testing, you can temporarily replace the placeholder `uri` with your actual MongoDB Atlas connection string.

4.  **Run the Application:**
    The `package.json` file includes a `test` script that utilizes `nodemon` for automatic server restarts during development.
    * To start the server with `nodemon` (recommended for development as it automatically reloads on code changes):
        ```bash
        npm run test
        ```
    * Alternatively, to run the server without `nodemon` (e.g., for a more "production-like" local test or if you don't need hot-reloading):
        ```bash
        node index.js
        ```
    * You should see a message in your console indicating that the server is running, likely on port 3000.

5.  **Access the Application:**
    Once the server is running, open your web browser and navigate to the following URL to view your news portal:
    ```
    [http://127.0.0.1:3000](http://127.0.0.1:3000)
    ```

---

## Deployment Considerations

Deploying your iNews application to a cloud hosting platform allows it to be accessible worldwide. Given its Node.js backend and MongoDB Atlas database, platforms like **Render.com** (highly recommended for its ease of use with Node.js and MongoDB), Heroku, or cyclic.sh are excellent choices for free or low-cost deployment.

* **Port Configuration:** Before deploying to any cloud platform, it's crucial to modify your `index.js` file to listen on the port provided by the hosting environment. Cloud platforms typically assign a dynamic port via an environment variable. **Change your `app.listen` line from a hardcoded `3000` to:**
    ```javascript
    const PORT = process.env.PORT || 3000; // Use environment PORT or fallback to 3000 locally
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    ```
    Make sure to commit and push this change to your GitHub repository.

* **Environment Variables for MongoDB Atlas:** When deploying, you **must** set up an environment variable for your MongoDB Atlas connection string on the hosting platform. For instance, on Render.com, you would add an environment variable named `MONGODB_URI` (or whatever variable name you use in your `index.js` code, e.g., `process.env.YOUR_DB_URI`) and paste your full MongoDB Atlas connection string as its value. This practice is vital for keeping sensitive credentials out of your public codebase.

* **Static File Paths in EJS:** Notice the hardcoded `http://127.0.0.1:3000/` in your EJS template for static assets (e.g., `<link href="http://127.0.0.1:3000/css/app.css" rel="stylesheet" />`). For production deployment, these paths should be relative or generated dynamically based on the base URL of your deployed application to avoid issues.
    **Consider changing these to relative paths:**
    ```html
    <link href="/css/app.css" rel="stylesheet" />
    <img class="card-img" src="/images/instagram/1.jpg" alt="" />
    ```
    This ensures that the browser requests static files from the same domain as the deployed application, regardless of its URL or port.

---

## Authors

This project is a collaborative effort:

* **Mentor:** Nguyễn Hoàng Tùng
* **Student:** Huỳnh Quốc Huy
    * [GitHub Profile: hkhuang07](https://github.com/hkhuang07/)

---

## Repository

The complete source code for the iNews online news portal can be found on GitHub:
[Online-News-Site-NodeJS-MongoDB-Atlat](https://github.com/hkhuang07/Online-News-Site-NodeJS-MongoDB-Atlat)

---

## License

This project is open-source and distributed under the **ISC License**. For more detailed information regarding the terms and conditions of use, please refer to the `LICENSE` file (if present) within the project repository. Contributions are welcome!

---
