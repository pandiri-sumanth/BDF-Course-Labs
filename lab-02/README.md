# Lab 2: SQLite Database and CRUD Routes

**Sumanth** · **252U1R9117** · **111 CSE GEN-AI 2B**

---

### Objective

To create a SQLite database and develop REST API endpoints using Node.js and Express.js to perform CRUD operations on book records.

### Project Details

- **Database:** SQLite
- **Database File:** `goodreads.db`
- **Table Name:** `book`
- **Backend:** Node.js and Express.js
- **SQLite Integration:** sqlite and sqlite3
- **Development Tool:** Nodemon
- **Port:** 3000

---

### How to Run

#### 1. Prerequisites

- Node.js
- npm (Node Package Manager)
- SQLite CLI (`sqlite3`)
- VS Code

#### 2. Install Dependencies

Open the terminal and navigate to the `lab-02` directory.

```bash
cd lab-02
npm install
```

#### 3. Database Setup

The project uses a SQLite database named `goodreads.db`.

The database contains a table named `book` with the following columns:

| Column | Data Type | Description |
|---|---|---|
| id | INTEGER | Primary key |
| title | TEXT | Book title |
| author | TEXT | Author name |
| price | INTEGER | Book price |
| pages | INTEGER | Number of pages |

Ten initial book records were inserted into the database using SQLite CLI.

#### 4. Start the Server

To start the development server using Nodemon:

```bash
npm run dev
```

Alternatively, start the server using Node.js:

```bash
npm start
```

The server runs at:

```text
http://localhost:3000/
```

Expected terminal output:

```text
Database Connected Successfully
Server Running at http://localhost:3000/
```

---

### API Endpoints

| Method | Endpoint | Status Code | Description |
|---|---|---|---|
| GET | `/books/` | 200 OK | Retrieves all book records. |
| GET | `/books/:bookId/` | 200 OK / 404 Not Found | Retrieves a book using its ID. |
| POST | `/books/` | 201 Created | Adds a new book to the database. |
| PUT | `/books/:bookId/` | 200 OK / 404 Not Found | Updates an existing book. |
| DELETE | `/books/:bookId/` | 200 OK / 404 Not Found | Deletes a book using its ID. |

---

### Sample Request Bodies

#### 1. POST - Add a Book

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "price": 550,
  "pages": 464
}
```

#### 2. PUT - Update a Book

Example endpoint:

```text
PUT /books/11/
```

Request body:

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "price": 600,
  "pages": 464
}
```

---

### Screenshots

Add your actual Postman and SQLite screenshots inside the `screenshots` folder.

#### 1. GET All Books

![GET All Books](screenshots/01_get_all_books.png)

#### 2. GET Single Book by ID

![GET Single Book](screenshots/02_get_single_book.png)

#### 3. POST Add New Book

![POST Add Book](screenshots/03_post_new_book.png)

#### 4. PUT Update Book

![PUT Update Book](screenshots/04_put_update_book.png)

#### 5. DELETE Book

![DELETE Book](screenshots/05_delete_book.png)

#### 6. GET Non-Existent Book

![GET Not Found](screenshots/06_get_not_found.png)

#### 7. SQLite Database Verification

![SQLite Verification](screenshots/07_sqlite_cli_verification.png)

---

### Important Concepts Learned

1. **SQLite:** A lightweight database used to store and manage structured data.
2. **Database Connection:** Connecting the Node.js application to SQLite using the `open()` function.
3. **CRUD Operations:** Creating, reading, updating, and deleting database records.
4. **Parameterized Queries:** Using `?` placeholders to safely pass user inputs into SQL queries.
5. **Express Routes:** Creating API endpoints to handle HTTP requests.
6. **Async/Await:** Managing asynchronous database operations.
7. **Nodemon:** Automatically restarting the server when monitored files change.

---

### Problems Faced and Solutions

#### 1. Database File Location

- **Problem:** SQLite showed `no such table: book` when the database was opened from the parent project directory.
- **Solution:** Opened the correct database file from the `lab-02` directory.

#### 2. POST Request Body

- **Problem:** `request.body` was undefined when the POST request did not contain a valid JSON body.
- **Solution:** Used `app.use(express.json())` and configured Postman with Body → raw → JSON.

#### 3. Database Connection

- **Problem:** The server must not accept requests before the database connection is ready.
- **Solution:** Used an asynchronous `initializeDBAndServer()` function and awaited the SQLite connection before starting the Express server.

#### 4. SQL Injection

- **Problem:** Directly inserting user input into SQL queries creates SQL injection risks.
- **Solution:** Used parameterized queries with `?` placeholders and passed user values separately.

---

### Viva Questions and Answers

#### 1. Why do we use await for database calls?

Database operations are asynchronous. The `await` keyword waits for the database operation to complete before the next statement runs. This helps return the correct database result to the client.

#### 2. What is SQL Injection and how do placeholders prevent it?

SQL Injection is an attack where someone inserts harmful SQL commands through user input.

Parameterized queries use `?` placeholders to separate SQL commands from user-provided values. This helps prevent user input from being executed as SQL commands.

#### 3. When do we use PUT instead of POST?

- **POST:** Used to create a new record.
- **PUT:** Used to update an existing record using its ID.

POST usually creates another record when repeated. PUT with the same data and resource ID produces the same final resource state.

---

### Conclusion

In this lab, I created a SQLite database and connected it to an Express.js application. I implemented all five CRUD API endpoints to manage book records. I also tested the APIs using Postman and verified database changes using SQLite CLI.