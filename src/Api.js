import axios from "axios";
import md5 from "js-md5";


const API_BASE = 'https://gateway.marvel.com/'
const API_PRIVATE_KEY = 'c40e6a9d21e6d67294d3d9b956f04f1b1e4c4785'
const API_PUBLIC_KEY = 'a36e13b6ed038707b611877f7e757552'
const TIME_STAMP = '11082022';

const HASH = md5(`${TIME_STAMP + API_PRIVATE_KEY + API_PUBLIC_KEY}`)

const finallyPoint = `ts=${TIME_STAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;

const basicGet = async (endpoint) => {
    const req = await axios.get(`${API_BASE}${endpoint}${finallyPoint}`)
        .then((res) => {
            return res.data
        })
    return req.data;    
}

export default {
    getComicsLists: async () => {
        return [
            {
                slug: 'avengers',
                title: 'Vingadores',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009165&orderBy=focDate&') 
            },
            {
                slug: 'wolverine',
                title: 'Wolverine',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009718&orderBy=focDate&') 
            },
            {
                slug: 'spiderman',
                title: 'Homem Aranha',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009610&orderBy=focDate&') 
            },
            {
                slug: 'thor',
                title: 'Thor',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009664&orderBy=focDate&') 
            },
            {
                slug: 'hulk',
                title: 'Hulk',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009351&orderBy=focDate&') 
            },
            {
                slug: 'ironman',
                title: 'Homem de Ferro',
                items: await basicGet('v1/public/comics?format=comic&formatType=comic&noVariants=true&characters=1009368&orderBy=focDate&') 
            }
        ]
    }
}