
const express = require("express");

const app = express();

// Home route
app.get("/", (request, response) => {
  response.status(200).send("Welcome to BDF Lab 1");
});


app.get("/about", (request, response) => {
  response.status(200).json({
    name: "Pandiri Sumanth",
    section: "111 CSE GEN-AI 2B."
  });
});


app.get("/time", (request, response) => {
  const date = new Date();
  response.status(200).send(date.toString());
});



app.use((request, response) => {
  response.status(404).send("404 - Page not found");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
