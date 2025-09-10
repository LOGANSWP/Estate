# Real Estate Web App

A **MERN stack** real estate web application with authentication, image uploads, and Google OAuth support.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />&nbsp;
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />&nbsp;
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />&nbsp;
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />&nbsp;
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />&nbsp;
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />&nbsp;
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />&nbsp;
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />&nbsp;
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render" />
</p>

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Redux Toolkit, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, Google OAuth (Firebase)
- **Image Storage:** Firebase
- **Testing:** Postman
- **Deployment:** Render

---

## Project Setup

### 1. Clone the Repository

```bash
git clone <repo-url>
cd project-folder
```

### 2. Backend Setup

Install dependencies:

```bash
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser nodemon
```

Create a .env file in the project root:

```
MONGO=<your-mongo-connection-string>
```

Update package.json scripts:

```json
"scripts": {
  "dev": "nodemon api/index.js",
  "start": "node api/index.js"
}
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm create vite@latest
npm install
npm install react-router-dom react-icons @reduxjs/toolkit react-redux firebase
```

Set up Tailwind CSS by following the guide:
https://tailwindcss.com/docs/guides/vite

### 4. Firebase Setup

- Go to Firebase and create a new project.
- Enable Google OAuth and Firebase Storage.
- Create client/src/firebase.js and paste your Firebase config.

### 5. Run the App

- Backend:

```bash
npm run dev
```

- Frontend:

```bash
cd client
npm run dev
```

---

## Features

- User login with JWT and Google OAuth
- Image uploads to Firebase
- Redux for state management
- REST API backend
- Tailwind CSS for responsive design

---

## Deployment

- Frontend & Backend: Deploy on Render.
- Add environment variables to deployment settings.
