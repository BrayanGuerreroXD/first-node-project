import express from "express";

const app = express();
app.listen(3000);

app.get("/", (req, res) => res.send("Hello World!"));

console.log('Server listening on port 3000');