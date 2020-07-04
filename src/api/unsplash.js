import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Xi5hFJtTMcrIMhLDoK_JLbYd9H41mB64k-kGNfBui3g'
    }
})