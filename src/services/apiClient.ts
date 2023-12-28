import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '762d9c3000434942b77e8fc7a7fd697d'
    }
});
