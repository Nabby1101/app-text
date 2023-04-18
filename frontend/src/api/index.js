import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://nabby-app.onrender.com',
    // baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
