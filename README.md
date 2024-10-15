# Blog Platform Backend

A robust API for managing blog content, including posts, users, comments, and categories. Built with Node.js, Express, and TypeScript, this project follows Clean Architecture and SOLID principles for maintainability and scalability.

## Features

- **User Authentication**: Register, login, and manage user roles.
- **Blog Post Management**: Create, read, update, and delete blog posts.
- **Comment System**: Add, retrieve, update, and delete comments on blog posts.
- **Categories and Tags**: Organize posts by categories and tags.
- **RESTful API**: Fully functional REST API for integration with frontend applications.

## Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** (or **PostgreSQL**)
- **Mongoose** (for MongoDB)
- **Jest** (for testing)

## Project Structure

```plaintext
blog-platform-backend/
├── src/
│   ├── entities/
│   ├── use-cases/
│   ├── controllers/
│   ├── repositories/
│   ├── services/
│   ├── infrastructure/
│   ├── middlewares/
│   ├── app.ts
│   └── index.ts
├── tests/
├── .env
├── package.json
├── tsconfig.json
└── jest.config.js




