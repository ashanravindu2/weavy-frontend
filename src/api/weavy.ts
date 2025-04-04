import axios from 'axios';

const weavyAPI = axios.create({
    baseURL: 'https://8015b5dbc0724d38882ac90397c27649.weavy.io/api/users',
    headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json',
    },
});

export default weavyAPI;
