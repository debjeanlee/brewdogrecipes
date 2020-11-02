import axios from 'axios';

const beer = axios.create({
    baseURL: "https://api.punkapi.com/v2/beers",
});

export default beer;