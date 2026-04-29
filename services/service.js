// Importar la biblioteca axios para realizar solicitudes HTTP a la API externa
import axios from "axios";

// Definir la URL base de la API externa para facilitar las solicitudes a los diferentes endpoints
const BASE_URL = "https://jsonplaceholder.typicode.com/";

// Funciones asíncronas para interactuar con la API externa y manejar las operaciones relacionadas
// con los posts, usuarios y comentarios
export const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}posts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

// Función para obtener un usuario específico por su ID utilizando una solicitud GET a la API externa
export const getUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw error;
    }
};

// Función para obtener los comentarios de un post específico utilizando una solicitud GET a la API externa
export const getComments = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments for post with id ${postId}:`, error);
        throw error;
    }
};

// Función para crear un nuevo post utilizando una solicitud POST a la API externa con los datos del post
export const createPosts = async (postData) => {
    try {
        const response = await axios.post(`${BASE_URL}posts`, postData);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

// Función para actualizar un post existente utilizando una solicitud PUT a la API externa con los datos del post
// y el ID del post especificado en los parámetros de la URL
export const updatePosts = async (id, postData) => {
    try {
        const response = await axios.put(`${BASE_URL}posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.error(`Error updating post with id ${id}:`, error);
        throw error;
    }
};

// Función para eliminar un post específico utilizando una solicitud DELETE a la API externa con el ID del post
export const deletePosts = async (id) => {
    try {
        await axios.delete(`${BASE_URL}posts/${id}`);
    } catch (error) {
        console.error(`Error deleting post with id ${id}:`, error);
        throw error;
    }
};

// Exportar las funciones para que puedan ser utilizadas en otras partes de la aplicación, como los controladores
export default {
    getPosts,
    getUser,
    getComments,
    createPosts,
    updatePosts,
    deletePosts
}