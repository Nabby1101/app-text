import Axios from "axios";

const api = Axios.create({
    baseURL: 'https://nabby-app.onrender.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
