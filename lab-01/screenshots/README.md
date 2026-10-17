# Lab 1: Node.js and Express Server

## Student Details

- **Name:** Sumanth
- **Registration Number:** 252U1R9117
- **Section:** 111 CSE GEN-AI 2B
- **Course:** Backend Development Fundamentals
- **Lab Number:** 01

## Live Link

**Platform:** Render

**URL:** To be added after deployment.

## Objective

To create a web server using the built-in Node.js HTTP module and then build the same server using Express.js.

## Installation and Running

**Prerequisites:** Node.js and npm.

1. Open the project folder in VS Code.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the Express server:

   ```bash
   node server.js
   ```

4. Open `http://localhost:3000` in your browser.

To run the original Node.js HTTP server, use:

```bash
node server-http.js
```

Stop the running server before starting the other server on the same port.

## Project Structure

```text
lab-01/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server-http.js
└── server.js
```

## package.json Fields

- **name:** The project name.
- **version:** The current project version.
- **description:** A short explanation of the project, if present.
- **main:** The main entry file specified in the project.
- **scripts:** Commands configured to run project tasks.
- **keywords:** Words used to describe the project, if present.
- **author:** The project author's name, if provided.
- **license:** The project's license.
- **dependencies:** Packages required by the application, including Express.

The fields present depend on the generated `package.json`.

## Endpoints

| Method | Path        | Description                       | Expected Status |
| ------ | ----------- | --------------------------------- | --------------- |
| GET    | `/`         | Displays the welcome message      | 200 OK          |
| GET    | `/about`    | Returns name and section as JSON  | 200 OK          |
| GET    | `/time`     | Returns the current date and time | 200 OK          |
| GET    | `/anything` | Returns a page-not-found message  | 404 Not Found   |


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


## Viva Questions and Answers

**1. What is the difference between package.json and node_modules?**

`package.json` stores project information and dependency details. `node_modules` contains the installed packages.

**2. What does app.listen() do?**

It starts the Express server and makes it listen for requests on a specified port.

**3. What do request and response represent?**

The request contains information sent by the client. The response contains the data sent back by the server.

## Notes: Problems Faced and Solutions

Record the actual problems faced during the lab and explain how you solved them.

## Result

Successfully created and tested a Node.js HTTP server and an Express server with multiple routes, JSON output, date and time output, and 404 handling.
