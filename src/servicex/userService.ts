import weavyAPI from '../api/weavy.ts';


export const createUser = async (userData) => {
    return weavyAPI.post('/', userData);
};


export const listUsers = async () => {
    return weavyAPI.get('/');
};

export const getUser = async (id) => {
    return weavyAPI.get(`/${id}`);
};

export const updateUser = async (id, data) => {
    return weavyAPI.put(`/${id}`, data);
};

export const deleteUser = async (id) => {
    return weavyAPI.delete(`/${id}`);
};
