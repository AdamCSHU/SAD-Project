const express = require("express");
const connDB = require("./database");

const PORT = process.env.PORT || 3001;

connDB()

const app = express();

app.get("/api", (req, res)=> {
    res.json({message: "hello client!"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



