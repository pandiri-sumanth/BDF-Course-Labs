# Lab 1: Node.js and Express Server

## Student Details

- **Name:** Sumanth
- **Registration Number:** 252U1R9117
- **Section:** 111 CSE GEN-AI 2B
- **Course:** Backend Development Fundamentals
- **Lab Number:** 01

## Live Link

**Platform:** Render

**Live URL:** https://bdf-lab-01-sumanth.onrender.com

## Objective

To set up a Node.js project and build a web server first using the built-in HTTP module and then using Express.js.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Visual Studio Code
- Google Chrome
- Git and GitHub
- Render

## Project Structure

```text
BDF-Course-Labs/
├── .gitignore
└── lab-01/
    ├── screenshots/
    │   ├── home.png
    │   ├── home-status.png
    │   ├── about.png
    │   ├── about-status.png
    │   ├── time.png
    │   ├── time-status.png
    │   ├── not-found.png
    │   └── not-found-status.png
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── server-http.js
    └── server.js
```

**Note:** `node_modules/` is installed locally and excluded from GitHub using `.gitignore`.

## Installation and Setup

### Prerequisites

Install Node.js and npm on your system.

### Install Dependencies

1. Open the `lab-01` folder in Visual Studio Code.
2. Open the terminal.
3. Run the following command:

```bash
npm install
```

### Run the Express Server

Start the Express server using:

```bash
npm start
```

Open the following URL in your browser:

http://localhost:3000

### Run the Original Node.js HTTP Server

To run the server created using the built-in Node.js HTTP module, use:

```bash
node server-http.js
```

Stop the running server before starting another server on the same port.

## package.json Fields

- **name:** The name of the project.
- **version:** The current project version.
- **description:** A short description of the project, if provided.
- **main:** The main entry file specified in the project.
- **scripts:** Commands used to run project tasks, such as `npm start`.
- **keywords:** Words describing the project, if provided.
- **author:** The project author's name, if provided.
- **license:** The project's license.
- **type:** Specifies the JavaScript module system. `commonjs` allows the use of `require()`.
- **dependencies:** Packages required by the application, including Express.

The fields shown depend on the actual `package.json` file.

## API Endpoints

| HTTP Method | Endpoint | Description | Expected Status Code |
|---|---|---|---|
| GET | `/` | Displays the welcome message | 200 OK |
| GET | `/about` | Returns the name and section in JSON format | 200 OK |
| GET | `/time` | Displays the current date and time | 200 OK |
| GET | `/anything` | Displays a page-not-found message for an unknown route | 404 Not Found |

### Test the Live Endpoints

- Home: https://bdf-lab-01-sumanth.onrender.com/
- About: https://bdf-lab-01-sumanth.onrender.com/about
- Time: https://bdf-lab-01-sumanth.onrender.com/time
- 404 Test: https://bdf-lab-01-sumanth.onrender.com/anything

## Screenshots

### 1. Home Route

**Server Response**

![Home response](screenshots/home.png)

**HTTP Status Code Verification**

![Home status code](screenshots/home-status.png)

### 2. About Route

**Server Response**

![About response](screenshots/about.png)

**HTTP Status Code Verification**

![About status code](screenshots/about-status.png)

### 3. Time Route

**Server Response**

![Time response](screenshots/time.png)

**HTTP Status Code Verification**

![Time status code](screenshots/time-status.png)

### 4. 404 Not Found

**Server Response**

![404 response](screenshots/not-found.png)

**HTTP Status Code Verification**

![404 status code](screenshots/not-found-status.png)

## HTTP Status Codes

- **200 OK:** The request was successful, and the server returned the requested response.
- **404 Not Found:** The requested route does not exist on the server.

## Viva Questions and Answers

### 1. What is the difference between `package.json` and `node_modules`?

`package.json` stores project information, scripts, and dependency details. `node_modules` contains the installed packages used by the application.

### 2. What does `app.listen()` do?

`app.listen()` starts the Express server and makes it listen for incoming requests on the specified port.

### 3. What do request and response represent?

The request contains information sent by the client to the server. The response contains the information the server sends back to the client.

## Notes: Problems Faced and Solutions

- **Git push rejection:** The local and remote repositories had separate histories. The remote changes were pulled, the README conflict was resolved, and the changes were pushed to GitHub.
- **Deployment configuration:** The Express server was configured to use `process.env.PORT || 3000` so it works locally and on Render. An `npm start` script was added to `package.json`.
- **Screenshot documentation:** Separate screenshots were captured for server responses and HTTP status-code verification and referenced in this README.

## Result

Successfully created and tested a Node.js HTTP server and an Express server with multiple routes, JSON responses, date and time output, and 404 handling. The Express application was deployed on Render.

## Git Repository

[View BDF-Course-Labs on GitHub](https://github.com/pandiri-sumanth/BDF-Course-Labs)
