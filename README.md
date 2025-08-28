# Web Development Bootcamp: Backend Journey

## Overview

This repository is dedicated to the backend development portion of Dr. Angela Yu's **"The Complete 2023 Web Development Bootcamp."** It contains all the projects, challenges, and notes that focus on server-side programming, APIs, databases, and authentication.

The goal is to provide a focused look at the server-side skills learned throughout the course, separate from the frontend-only modules.

---

## Core Concepts Covered

This repository showcases a deep dive into the technologies and methodologies that power the web from behind the scenes.

* **Node.js & NPM:** Understanding the Node runtime environment and using NPM for package management.
* **Express.js:** Building robust and scalable web servers and RESTful APIs with this powerful Node.js framework.
* **RESTful API Design:** Creating and interacting with internal and third-party APIs using REST principles.
* **EJS (Embedded JavaScript):** Server-side rendering of dynamic HTML pages by combining data with templates.
* **Databases:**
    * **PostgreSQL:** Designing relational database schemas, writing complex SQL queries, and integrating with a Node.js application.
    * **MongoDB & Mongoose:** Working with a NoSQL database, defining schemas, and performing CRUD operations using an ODM.
* **Authentication & Security:**
    * Implementing complete authentication from scratch.
    * Hashing and salting passwords for secure storage.
    * Managing user sessions and cookies.
    * Implementing OAuth 2.0 for third-party logins (e.g., Google, Facebook).

---

## Key Backend Projects

This repository includes several key projects that demonstrate the application of the concepts above:

* **Newsletter Signup:** A simple application that connects to the external Mailchimp API.
* **To-Do List App:** A full-stack application demonstrating CRUD (Create, Read, Update, Delete) operations with a database.
* **Blog Website:** A complete, database-driven blog platform built from scratch with Node.js, Express, and EJS.
* **Secrets Sharing App:** A full-stack application that focuses heavily on implementing secure user authentication, including password hashing, sessions, and OAuth 2.0.

---

## How to Use This Repository

Each major project is contained within its own folder. To run a specific project:

1.  Navigate into the project's directory.
2.  Install the required dependencies using `npm install`.
3.  If required, create a `.env` file and add necessary environment variables (like database URIs or API keys).
4.  Run the application using `node app.js` or the specified run script in `package.json`.

---

## Acknowledgments

All projects and learning materials are based on the fantastic curriculum created by **Dr. Angela Yu**. This repository is my implementation and documentation of that journey.
