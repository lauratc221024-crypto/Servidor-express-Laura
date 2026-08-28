const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Aprendices ficha 3407186");
});

app.get("/ruta1", (req, res) => {
    res.send("Esta es la ruta 1");
});

app.get("/ruta2", (req, res) => {
    res.send("Esta es la ruta 2");
});

app.get("/ruta3", (req, res) => {
    res.send("Esta es la ruta 3");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});