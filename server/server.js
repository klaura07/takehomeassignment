const express = require("express");
const app = express();
const movies = require("./movies_metadata.json");


app.get("/api/movies", (request, response) => {
  response.json({
    data: movies
  });
});
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});