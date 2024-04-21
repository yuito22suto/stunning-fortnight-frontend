import axios from 'axios';

export default axios.create({
    baseURL: 'https://4ba2-123-0-94-84.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});