# Backend Development Fundamentals (BDF) - Course Labs

**Student Name:** PANDIRI SUMANTH  
**Registration Number:** 252U1R9117  
**Section:** 111 CSE GEN-AI 2B  
**Course:** Backend Development Fundamentals (BDF)  

---

## 📚 Labs Overview

| Lab | Title | Description | Live Deployment |
| :---: | :--- | :--- | :---: |
| **[Lab 01](./lab-01)** | Node.js and Express Server | Basic web server using built-in `http` module and Express.js with routing and error handling. | [Live App](https://bdf-lab-01-sumanth.onrender.com) |
| **[Lab 02](./lab-02)** | SQLite Database and CRUD Routes | SQLite integration (`sqlite` and `sqlite3`), database seeding, and REST API endpoints for book CRUD operations. | [Live App](https://bdf-lab-02-sumanth.onrender.com) |
| **[Lab 03](./lab-03)** | REST API, Query Params & Debugging | Advanced REST API with partial search (`search_q`), sorting (`order_by`), price filtering (`min_price`, `max_price`), pagination (`limit`, `offset`), payload validation, and a 4-bug faculty debugging exercise. | [Live App](https://bdf-lab-03-sumanth.onrender.com/books/) |

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite3 (`sqlite` & `sqlite3`)
- **Testing & Tools:** Postman, Nodemon
- **Deployment:** Render
- **Version Control:** Git & GitHub

---

## 📂 Repository Structure

```text
BDF-Course-Labs/
├── .gitignore
├── README.md
├── lab-01/
│   ├── server.js
│   ├── server-http.js
│   ├── screenshots/
│   └── README.md
├── lab-02/
│   ├── server.js
│   ├── goodreads.db
│   ├── screenshots/
│   └── README.md
└── lab-03/
    ├── index.js
    ├── books.db
    ├── init_db.sql
    ├── setup_db.js
    ├── test_routes.js
    ├── debugging_exercise/
    │   ├── broken_app.js
    │   ├── fixed_app.js
    │   ├── test_debugging.js
    │   └── DEBUGGING_REPORT.md
    ├── Express_Lab3_Postman_Collection.json
    ├── render.yaml
    ├── screenshots/
    └── README.md
```
