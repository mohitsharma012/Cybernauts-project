import axios from "axios";

const API_URL = "http://localhost:8000/api/users/";

// Get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the users!", error);
        throw error;
    }
};

// Create a new user
export const createUser = async (user: any) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the user!", error);
        throw error;
    }
};

// Update a user
export const updateUser = async (id: string, user: any) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, user);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the user!", error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id: string) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error("There was an error deleting the user!", error);
        throw error;
    }
};
