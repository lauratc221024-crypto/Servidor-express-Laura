const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PUERTO || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor Express - Ficha 3407186");
});

// Ruta 1
app.get("/ruta1", (req, res) => {
    res.send("Esta es la ruta 1");
});

// Ruta 2
app.get("/ruta2", (req, res) => {
    res.send("Esta es la ruta 2");
});

// Ruta 3
app.get("/ruta3", (req, res) => {
    res.send("Esta es la ruta 3");
});

// Ruta 4
app.get("/ruta4", (req, res) => {
    res.json({
        mensaje: "Esta es la ruta 4",
        estado: "OK"
    });
});

// Ruta 5 - parámetro
app.get("/ruta5/:nombre", (req, res) => {
    const { nombre } = req.params;

    res.send(`Hola ${nombre}`);
});

// Ruta 6 - parámetro
app.get("/ruta6/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: "ID recibido",
        id: id
    });
});

// Ruta 7 - query
app.get("/ruta7", (req, res) => {
    const { nombre } = req.query;

    res.send(`Hola ${nombre || "usuario"}`);
});

// Ruta 8 - varios query
app.get("/ruta8", (req, res) => {
    const { nombre, edad } = req.query;

    res.json({
        nombre: nombre,
        edad: edad
    });
});

// Ruta 9
app.get("/ruta9", (req, res) => {
    res.send(`
        <h1>Ruta 9</h1>
        <p>Servidor Express funcionando correctamente.</p>
    `);
});

// Ruta 10
app.get("/ruta10", (req, res) => {
    res.json({
        ruta: "ruta10",
        mensaje: "Respuesta en formato JSON"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});