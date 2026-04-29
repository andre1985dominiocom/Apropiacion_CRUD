// Importar las dependencias necesarias para la aplicación
import express from 'express';

// Crear una instancia del router de Express
const router = express.Router();

// Almacenamiento local (simulando una base de datos)
let tareas = [];

// GET
router.get('/posts', (req, res) => {
    res.json(tareas);
});

// POST
router.post('/posts', (req, res) => {
    const nueva = {
        id: tareas.length + 1,
        ...req.body
    };

    tareas.push(nueva);
    res.status(201).json(nueva);
});

// PUT
router.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tareas = tareas.map(t =>
        t.id === id ? { ...t, ...req.body } : t
    );

    res.json({ mensaje: "Actualizado" });
});

// DELETE
router.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tareas = tareas.filter(t => t.id !== id);

    res.json({ mensaje: "Eliminado" });
});

// Exportar el router para ser utilizado en la aplicación principal
export default router;