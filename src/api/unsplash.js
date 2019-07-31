import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 70efbc5a975efe1f365c03030a990c26a18878a349774d8042a17f34d309d2c3'
    }
});