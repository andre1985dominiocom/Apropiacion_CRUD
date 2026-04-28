// Importar las dependencias necesarias para definir las rutas de la aplicación
import express  from "express";
import controller from "../controllers/controller.js";

// Crear una instancia del enrutador de Express para definir las rutas de la API
const router = express.Router();

// Definir las rutas para manejar las solicitudes HTTP relacionadas con los posts, usuarios y comentarios
router.get("/posts", controller.getPosts);
router.get("/users/:id", controller.getUser);
router.get("/posts/:postId/comments", controller.getComments);
router.post("/posts", controller.createPosts);
router.put("/posts/:id", controller.updatePosts);
router.delete("/posts/:id", controller.deletePosts);

// Exportar el enrutador para que pueda ser utilizado en otras partes de la aplicación
export default router;