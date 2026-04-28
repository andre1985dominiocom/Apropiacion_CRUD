// Importar las dependencias necesarias para la aplicación
import express from 'express';
import postRoutes from './routes/routes.js';
import { getPosts, getUser, getComments, createPosts, updatePosts, deletePosts } from './services/service';

// Crear una instancia de la aplicación Express
const app = express();
app.use(express.json());
app.use('/api', postRoutes);

// Middleware para manejar errores globales
app.use((err, req, res, next) => {
    console.error(err.stack); // Log del error en la consola
    res.status(500).json({ error: '¡Algo salió mal!' }); // Respuesta de error genérica
});

// Iniciar el servidor en el puerto especificado
const PORT = process.env.PORT || 3000; // Usar una variable de entorno para el puerto o el puerto 3000 por defecto
app.listen(PORT, () => { // Callback para confirmar que el servidor está corriendo
    console.log(`Servidor escuchando en el puerto ${PORT}`); // Mensaje de confirmación en la consola
});