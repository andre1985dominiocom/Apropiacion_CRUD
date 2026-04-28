// Importar los servicios necesarios para manejar las operaciones de los posts, usuarios y comentarios
import {
    getPosts as getPostsService,
    getUser as getUserService,
    getComments as getCommentsService,
    createPosts as createPostsService,
    updatePosts as updatePostsService,
    deletePosts as deletePostsService,
} from "../services/service.js";

// Controladores para manejar las solicitudes HTTP relacionadas con los posts, usuarios y comentarios
export const getPosts = async (req, res) => {
    try {
        const posts = await getPostsService();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener un usuario específico por su ID
export const getUser = async (req, res) => {
    try {
        const user = await getUserService(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener los comentarios de un post específico
export const getComments = async (req, res) => {
    try {
        const comments = await getCommentsService(req.params.postId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para crear un nuevo post utilizando los datos enviados en el cuerpo de la solicitud
export const createPosts = async (req, res) => {
    try {
        const newPost = await createPostsService(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para actualizar un post existente utilizando los datos enviados en el cuerpo de la solicitud
// y el ID del post especificado en los parámetros de la URL
export const updatePosts = async (req, res) => {
    try {
        const updatedPost = await updatePostsService(req.params.id, req.body);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para eliminar un post específico utilizando el ID del post especificado en los parámetros de la URL
export const deletePosts = async (req, res) => {
    try {
        await deletePostsService(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};