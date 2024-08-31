const express = require("express");

const app = express();

const port = process.env.PORT || 3000; // this will ensure that if a PORT isn't specifically entered it will resort to 3000 by default

app.use(express.json()); //this helps you properly handle JSON payloads

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
