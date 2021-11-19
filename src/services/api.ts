import axios from 'axios';

const key = 'c558f0155ae979f8505018b33e4b0452';
const imgUrl = 'https://image.tmdb.org/t/p/original';
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export {api, key, imgUrl};